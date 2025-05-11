'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';

export default function LanguageToggle() {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = (lang: string) => {
    setLanguage(lang);
    // Here you would typically use next-intl or another i18n library to change the language
    // For now, we're just updating the state
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Globe className="h-5 w-5" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => toggleLanguage('en')} className={language === 'en' ? 'bg-muted' : ''}>
          <span>English</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => toggleLanguage('ar')} className={language === 'ar' ? 'bg-muted' : ''}>
          <span>العربية</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}