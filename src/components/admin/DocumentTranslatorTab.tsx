import React, { useState } from 'react';
import { FileIcon, Loader2, Download, Languages } from 'lucide-react';
import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';

export default function DocumentTranslatorTab() {
  const [isLoading, setIsLoading] = useState(false);
  const [progressText, setProgressText] = useState('');

  const translateArray = async (strings: string[]) => {
    // Send in chunks of 150 to prevent AI context overload or JSON truncation
    const CHUNK_SIZE = 150;
    let translated: string[] = [];

    for (let i = 0; i < strings.length; i += CHUNK_SIZE) {
      setProgressText(`Translating chunk ${Math.floor(i / CHUNK_SIZE) + 1} of ${Math.ceil(strings.length / CHUNK_SIZE)}...`);
      const chunk = strings.slice(i, i + CHUNK_SIZE);

      const resp = await fetch('/api/admin-translate-excel', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ strings: chunk })
      });

      if (!resp.ok) {
        let errStr = 'Unknown error';
        try {
          const eData = await resp.json();
          errStr = eData.error || errStr;
        } catch { }
        throw new Error(`API Error: ${errStr}`);
      }

      const data = await resp.json();
      if (!data.success || !data.translatedStrings || !Array.isArray(data.translatedStrings)) {
        throw new Error('Invalid response from AI translator.');
      }
      
      translated = translated.concat(data.translatedStrings);
    }

    return translated;
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.name.match(/\.(xlsx|xls)$/i)) {
      alert("Unsupported file format. Please upload an Excel (.xlsx, .xls) file.");
      event.target.value = '';
      return;
    }

    setIsLoading(true);
    setProgressText('Reading Excel file...');

    try {
      const arrayBuffer = await file.arrayBuffer();
      const workbook = new ExcelJS.Workbook();
      await workbook.xlsx.load(arrayBuffer);

      setProgressText('Extracting text cells...');
      
      const stringsToTranslate: string[] = [];
      const cellReferences: Array<{ cell: ExcelJS.Cell, type: 'string' | 'richText', index?: number }> = [];

      workbook.eachSheet((worksheet) => {
        worksheet.eachRow((row) => {
          row.eachCell((cell) => {
            const value = cell.value;
            if (typeof value === 'string' && value.trim()) {
              stringsToTranslate.push(value);
              cellReferences.push({ cell, type: 'string' });
            } else if (value && typeof value === 'object' && 'richText' in value && Array.isArray((value as any).richText)) {
              (value as any).richText.forEach((rt: any, idx: number) => {
                if (rt.text && typeof rt.text === 'string' && rt.text.trim()) {
                  stringsToTranslate.push(rt.text);
                  cellReferences.push({ cell, type: 'richText', index: idx });
                }
              });
            }
          });
        });
      });

      if (stringsToTranslate.length === 0) {
        alert("No translateable text found in this Excel file.");
        setIsLoading(false);
        return;
      }

      setProgressText(`Found ${stringsToTranslate.length} texts to translate...`);
      const translatedStrings = await translateArray(stringsToTranslate);

      if (translatedStrings.length !== stringsToTranslate.length) {
         throw new Error(`Mismatch in translation length. Expected ${stringsToTranslate.length}, got ${translatedStrings.length}.`);
      }

      setProgressText('Rebuilding Excel file...');
      translatedStrings.forEach((trans, i) => {
        const ref = cellReferences[i];
        if (ref.type === 'string') {
          ref.cell.value = trans;
        } else if (ref.type === 'richText' && ref.index !== undefined) {
          const val = ref.cell.value as any;
          val.richText[ref.index].text = trans;
          ref.cell.value = val;
        }
      });

      setProgressText('Generating translated file...');
      const outBuffer = await workbook.xlsx.writeBuffer();
      
      const originalName = file.name.replace(/\.[^/.]+$/, "");
      saveAs(new Blob([outBuffer]), `${originalName}_Translated.xlsx`);
      
      setProgressText('Complete!');
    } catch (err: any) {
      console.error(err);
      alert("Error translating document: " + err.message);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
        setProgressText('');
      }, 1000);
      event.target.value = '';
    }
  };

  return (
    <div className="space-y-6 animate-fade-in relative">
      <div className="bg-white p-6 rounded-xl shadow-lg border border-neutral-200">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 border-b pb-4 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-neutral-800 flex items-center gap-2">
              <Languages className="w-6 h-6 text-blue-600" />
              Document Translator
            </h2>
            <p className="text-sm text-neutral-500">
              Upload any Chinese Excel document. The AI will translate all text into English while perfectly maintaining the layout, styles, and sheets.
            </p>
          </div>
        </div>

        <div className="max-w-xl mx-auto py-12">
          <div className={`border-2 border-dashed rounded-xl p-10 flex flex-col items-center justify-center transition cursor-pointer relative overflow-hidden
            ${isLoading ? 'border-blue-300 bg-blue-50 text-blue-600' : 'border-neutral-300 bg-neutral-50 hover:bg-neutral-100 text-neutral-600'}`}
          >
            <input 
              type="file" 
              onChange={handleFileUpload} 
              accept=".xlsx,.xls" 
              className="absolute inset-0 opacity-0 cursor-pointer" 
              disabled={isLoading}
            />
            {isLoading ? (
              <>
                <Loader2 className="w-12 h-12 mb-4 animate-spin text-blue-500" />
                <span className="text-lg font-bold text-blue-700">Translating Document...</span>
                <span className="text-sm text-blue-500 mt-2 font-medium">{progressText}</span>
              </>
            ) : (
              <>
                <FileIcon className="w-12 h-12 mb-4 text-neutral-400" />
                <span className="text-lg font-bold text-neutral-700">Drop Excel File Here to Translate</span>
                <span className="text-sm text-neutral-500 mt-2">Only .xlsx and .xls are supported</span>
              </>
            )}
          </div>

          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-4 text-amber-800 text-sm">
            <strong>Note:</strong> This tool modifies the Excel file directly in your browser. All colors, fonts, column widths, and multiple sheets will be preserved exactly as they are. Formulas are ignored and preserved.
          </div>
        </div>
      </div>
    </div>
  );
}
