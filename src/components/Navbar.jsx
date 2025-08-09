import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext.jsx';

export default function Navbar() {
  const { lang, setLang, t } = useContext(LanguageContext);
  const toggleLang = () => setLang(lang === 'en' ? 'pl' : 'en');

  return (
    <nav className="sticky top-0 z-50 flex flex-wrap justify-center gap-4 bg-white/90 backdrop-blur p-4 shadow">
      <a href="#about" className="text-blue-900 hover:text-purple-700">
        {t('nav.about')}
      </a>
      <a href="#experience" className="text-blue-900 hover:text-purple-700">
        {t('nav.experience')}
      </a>
      <a href="#projects" className="text-blue-900 hover:text-purple-700">
        {t('nav.projects')}
      </a>
      <a href="#education" className="text-blue-900 hover:text-purple-700">
        {t('nav.education')}
      </a>
      <a href="#skills" className="text-blue-900 hover:text-purple-700">
        {t('nav.skills')}
      </a>
      <a href="#interests" className="text-blue-900 hover:text-purple-700">
        {t('nav.interests')}
      </a>
      <button
        className="px-2 py-1 rounded bg-blue-900 text-white hover:bg-purple-700"
        onClick={toggleLang}
      >
        {lang === 'en' ? 'PL' : 'EN'}
      </button>
    </nav>
  );
}
