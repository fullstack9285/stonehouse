import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { language, t, changeLanguage } = useLanguage();

  const languages = [
    { code: 'az', name: 'AZ' },
    { code: 'en', name: 'EN' },
    { code: 'ru', name: 'RU' }
  ];

  const navItems = [
    { path: '/', name: t('home') },
    { path: '/projects', name: t('projects') },
    { path: '/gallery', name: t('gallery') },
    { path: '/services', name: t('services') },
    { path: '/contact', name: t('contact') },
  ];

  const phoneNumbers = ['+994 51 511 12 12', '+994 55 806 00 22'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentLang = languages.find(lang => lang.code === language);

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 font-poppins ${scrolled
      ? 'bg-main/95 backdrop-blur-xl shadow-lg py-4'
      : 'bg-main/90 backdrop-blur-sm py-6'
      }`}>
      {/* Top Bar - Only visible when not scrolled */}
      {/* {!scrolled && (
        <div className="hidden xl:block border-b border-white/10">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2 text-white/80">
                  <MapPin size={14} className="text-gold flex-shrink-0" />
                  <span className="font-light text-xs">{t('address').substring(0, 60)}...</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                {phoneNumbers.map((phone, index) => (
                  <a
                    key={index}
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="flex items-center space-x-2 text-white hover:text-gold transition-colors duration-300"
                  >
                    <Phone size={14} />
                    <span className="font-medium text-xs">{phone}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )} */}

      {/* Main Navigation */}
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex justify-between items-center gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group shrink-0">
            <div className="relative">
              <div className="w-14 h-14 rounded-lg flex items-center justify-center duration-300 overflow-hidden">
                <img src="/logo.png" alt="Stone House Construction" className='w-full h-full' />
              </div>
            </div>
            <div className="hidden md:block">
              <h1 className="text-base font-bold font-serif text-white leading-tight">
                STONE HOUSE
              </h1>
              <p className="text-[9px] font-light text-white/60 tracking-widest uppercase leading-tight">
                Construction
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-sm xl:text-base font-medium transition-all duration-300 py-2 px-3 rounded-lg whitespace-nowrap ${location.pathname === item.path
                  ? 'text-gold bg-white/10'
                  : 'text-white hover:text-gold hover:bg-white/5'
                  }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gold rounded-full"></span>
                )}
              </Link>
            ))}

            {/* Language Selector */}
            <div className="relative flex-shrink-0">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-1.5 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 hover:border-gold/30 transition-all duration-300"
              >
                <Globe size={14} className="text-white" />
                <span className="text-sm font-medium text-white">{currentLang?.name}</span>
              </button>
              {isLangOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setIsLangOpen(false)}></div>
                  <div className="absolute top-full right-0 mt-2 bg-main/95 backdrop-blur-sm rounded-lg shadow-2xl border border-white/20 py-1 z-50 min-w-[80px]">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          changeLanguage(lang.code);
                          setIsLangOpen(false);
                        }}
                        className={`w-full flex items-center justify-center px-4 py-2 text-left transition-all duration-300 ${language === lang.code
                          ? 'bg-white/10 text-gold font-semibold'
                          : 'text-white hover:bg-white/5 hover:text-gold'
                          }`}
                      >
                        <span className="text-sm">{lang.name}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-6 border-t border-white/10 pt-6 bg-main/95 backdrop-blur-xl rounded-b-2xl shadow-lg">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-3 px-4 rounded-lg font-medium transition-all duration-300 ${location.pathname === item.path
                  ? 'text-gold bg-white/10'
                  : 'text-white hover:text-gold hover:bg-white/5'
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-6 grid grid-cols-3 gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    changeLanguage(lang.code);
                    setIsMenuOpen(false);
                  }}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${language === lang.code
                    ? 'bg-gold text-main'
                    : 'bg-white/10 text-white hover:bg-white/20 hover:text-gold'
                    }`}
                >
                  {lang.name}
                </button>
              ))}
            </div>
            <Link
              to="/contact"
              className="block mt-4 text-center px-6 py-3 bg-gold text-main font-semibold rounded-lg hover:bg-gold/90 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('contact')}
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
