import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select';
import { Globe } from 'lucide-react';

function LanguageSelect() {
  const { t } = useTranslation();
  const languages = i18n.options.resources ? Object.keys(i18n.options.resources) : [];

  const handleChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Select value={i18n.language} onValueChange={handleChange}>
      <SelectTrigger>
        <div className="flex items-center gap-2">
          <Globe className="h-4 w-4" />
          {t(i18n.language)}
        </div>
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem value={lang} key={lang}>
            {t(lang)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default LanguageSelect;
