import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Wand2, Globe, FileText, Check, Loader2, X } from 'lucide-react';
import { toast } from 'sonner';

interface EmailEditorProps {
  value: string;
  onChange: (value: string) => void;
  onSendTest?: (html: string) => void;
}

export const EmailEditor: React.FC<EmailEditorProps> = ({ value, onChange, onSendTest }) => {
  const [isScraping, setIsScraping] = useState(false);
  const [scrapeUrl, setScrapeUrl] = useState('');
  const [isRewriting, setIsRewriting] = useState(false);
  const [isImproving, setIsImproving] = useState(false);
  const [aiInstruction, setAiInstruction] = useState('');

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ];

  const handleScrapePage = async () => {
    if (!scrapeUrl) return;
    setIsScraping(true);
    try {
      // Call backend scraper
      // Since backend is Python on port 5001 (or separate), we assume proxy or direct call
      // For now, let's fetch from our new API
      const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5001'
      const response = await fetch(`${API_BASE}/api/scrape`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: scrapeUrl })
      });
      
      const data = await response.json();
      if (data.success && data.content) {
        // Insert scraped content into editor
        const newContent = value + `<br/><br/>${data.content}`;
        onChange(newContent);
        toast.success("Page content added!");
      } else {
        toast.error("Failed to scrape page");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error scraping page");
    } finally {
      setIsScraping(false);
      setScrapeUrl('');
    }
  };

  const handleAiRewrite = async () => {
    if (!aiInstruction) return;
    setIsRewriting(true);
    // Call AI rewrite API
    // Placeholder for AI implementation
    setTimeout(() => {
        setIsRewriting(false);
        toast.info("AI Rewrite feature coming soon");
    }, 1000);
  };
    
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2 mb-2">
        <div className="flex gap-2 items-center">
            {isScraping ? (
                <div className="flex gap-2 animate-in fade-in slide-in-from-left-5">
                    <Input 
                        placeholder="https://..." 
                        value={scrapeUrl}
                        onChange={(e) => setScrapeUrl(e.target.value)}
                        className="w-64 h-8"
                    />
                    <Button size="sm" onClick={handleScrapePage} disabled={!scrapeUrl}>
                        Fetch
                    </Button>
                    <Button size="sm" variant="ghost" onClick={() => setIsScraping(false)}>
                        <X className="h-4 w-4" />
                    </Button>
                </div>
            ) : (
                <Button variant="outline" size="sm" className="gap-2" onClick={() => setIsScraping(true)}>
                    <Globe className="h-4 w-4" />
                    Add Page Content
                </Button>
            )}
        </div>

        <Button variant="outline" size="sm" className="gap-2" onClick={() => setIsImproving(true)}>
            <Wand2 className="h-4 w-4" />
            AI Improve
        </Button>
        
        {onSendTest && (
            <Button variant="secondary" size="sm" className="ml-auto" onClick={() => onSendTest(value)}>
                Send Test Email
            </Button>
        )}
      </div>

      <div className="min-h-[300px] border rounded-md bg-white">
        <ReactQuill 
            theme="snow"
            value={value}
            onChange={onChange}
            modules={modules}
            formats={formats}
            className="h-[250px]"
        />
      </div>
    </div>
  );
};
