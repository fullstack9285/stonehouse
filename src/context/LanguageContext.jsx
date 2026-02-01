import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('az');

  const translations = {
    az: {
      // Header
      home: 'Ana Səhifə',
      projects: 'Layihələr',
      portfolio: 'Portfolio',
      services: 'Dizayn Xidmətləri',
      contact: 'Əlaqə',
      address: 'Bakı şəh., Sabunçu ray., Bakıxanov qəsəbəsi, Şamil Kamilov küç., ev 2h',
      callUs: 'Zəng edin',
      
      // Hero Section
      tagline: 'Professional Daş Ev Tikintisi',
      mainTitle: 'Müasir Tikinti',
      subtitle: 'və Sənaye Agentliyi',
      description: 'Müştərilərimizlə əməkdaşlıq etməkdən qürur duyuruq, onların çətinliklərini, hədəflərini və gələcək üçün vizyonlarını anlamaq üçün sıx işləyirik.',
      getStarted: 'Başlayaq',
      freeConsultation: 'Pulsuz Konsultasiya',
      
      // Stats
      completedProjects: 'Tamamlanmış Layihə',
      happyClients: 'Məmnun Müştəri',
      yearsExperience: 'İllik Təcrübə',
      warranty: 'Zəmanət',
      
      // Footer
      quickLinks: 'Sürətli Keçidlər',
      ourServices: 'Xidmətlərimiz',
      workingHours: 'İş Saatları',
      mapLocation: 'Xəritədə Göstər',
      onlineApplication: 'Onlayn Müraciət',
      copyright: '© STONE HOUSE construction. Bütün hüquqlar qorunur.',
    },
    en: {
      // Header
      home: 'Home',
      projects: 'Projects',
      portfolio: 'Portfolio',
      services: 'Design Services',
      contact: 'Contact',
      address: 'Baku city, Sabunchu district, Bakikhanov settlement, Shamil Kamilov str., house 2h',
      callUs: 'Call Us',
      
      // Hero Section
      tagline: 'Professional Stone House Construction',
      mainTitle: 'Modern Construction',
      subtitle: '& Industrial Agency',
      description: 'We take pride in our collaborative approach, working closely with clients to understand their challenges, goals, and vision for the future.',
      getStarted: 'Get Started',
      freeConsultation: 'Free Consultation',
      
      // Stats
      completedProjects: 'Completed Projects',
      happyClients: 'Happy Clients',
      yearsExperience: 'Years Experience',
      warranty: 'Warranty',
      
      // Footer
      quickLinks: 'Quick Links',
      ourServices: 'Our Services',
      workingHours: 'Working Hours',
      mapLocation: 'Show on Map',
      onlineApplication: 'Online Application',
      copyright: '© STONE HOUSE construction. All rights reserved.',
    },
    ru: {
      // Header
      home: 'Главная',
      projects: 'Проекты',
      portfolio: 'Портфолио',
      services: 'Дизайн Услуги',
      contact: 'Контакты',
      address: 'г. Баку, Сабунчинский р-н, пос. Бакиханов, ул. Шамиля Камилова, д. 2h',
      callUs: 'Позвонить',
      
      // Hero Section
      tagline: 'Профессиональное Каменное Домостроение',
      mainTitle: 'Современное Строительство',
      subtitle: 'и Промышленное Агентство',
      description: 'Мы гордимся нашим совместным подходом, тесно работая с клиентами, чтобы понять их проблемы, цели и видение будущего.',
      getStarted: 'Начать',
      freeConsultation: 'Бесплатная Консультация',
      
      // Stats
      completedProjects: 'Завершенные Проекты',
      happyClients: 'Довольные Клиенты',
      yearsExperience: 'Лет Опыта',
      warranty: 'Гарантия',
      
      // Footer
      quickLinks: 'Быстрые Ссылки',
      ourServices: 'Наши Услуги',
      workingHours: 'Рабочие Часы',
      mapLocation: 'Показать на Карте',
      onlineApplication: 'Онлайн Заявка',
      copyright: '© STONE HOUSE construction. Все права защищены.',
    }
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, t, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
