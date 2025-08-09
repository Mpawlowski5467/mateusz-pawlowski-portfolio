import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext.jsx';

export default function Navbar() {
  const { lang, setLang, t } = useContext(LanguageContext);
  const toggleLang = () => setLang(lang === 'en' ? 'pl' : 'en');

  return (
    <nav>
      <a href="#about">{t('nav.about')}</a>
      <a href="#experience">{t('nav.experience')}</a>
      <a href="#projects">{t('nav.projects')}</a>
      <a href="#education">{t('nav.education')}</a>
      <a href="#skills">{t('nav.skills')}</a>
      <a href="#interests">{t('nav.interests')}</a>
      <button className="lang-btn" onClick={toggleLang}>
        {lang === 'en' ? 'PL' : 'EN'}
      </button>
    </nav>
  );
}
