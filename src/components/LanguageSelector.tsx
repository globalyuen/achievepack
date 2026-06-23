import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

interface LanguageSelectorProps {
  onClose?: () => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = useCallback((targetLang: string) => {
    i18n.changeLanguage(targetLang);
    setIsOpen(false);
    if (onClose) onClose();
  }, [onClose]);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center hover:bg-primary-700 transition-colors"
        aria-label={t('appHome.string_214', 'Select language')}
      >
        <Globe className="h-4 w-4 text-white" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-neutral-200 py-1 z-50">
          <button onClick={() => changeLanguage('en')} className="block w-full text-left px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100">English</button>
          <button onClick={() => changeLanguage('fr')} className="block w-full text-left px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100">Français</button>
          <button onClick={() => changeLanguage('es')} className="block w-full text-left px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100">Español</button>
          <button onClick={() => changeLanguage('zh-TW')} className="block w-full text-left px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100">繁體中文</button>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
