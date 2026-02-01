import { Link } from 'react-router-dom';
import { Palette, ClipboardCheck, Users, Shield, ArrowRight } from 'lucide-react';

const ServicesPreview = () => {
  const services = [
    {
      icon: Palette,
      title: 'Dizayn və Planlaşdırma',
      description: 'Xüsusi daş ev dizaynı və detallı planlaşdırma',
      features: ['3D vizualizasiya', 'Texniki çertyoj', 'Material seçimi']
    },
    {
      icon: ClipboardCheck,
      title: 'Tikinti Nəzarəti',
      description: 'Tikinti prosesinin peşəkar nəzarəti',
      features: ['Gündəlik hesabat', 'Keyfiyyət kontrol', 'Təhlükəsizlik']
    },
    {
      icon: Users,
      title: 'Komanda İdarəetməsi',
      description: 'Peşəkar tikinti komandasının idarə edilməsi',
      features: ['Usta seçimi', 'İş cədvəli', 'Təchizat']
    },
    {
      icon: Shield,
      title: 'Keyfiyyət Zəmanəti',
      description: '15 il tikinti keyfiyyəti zəmanəti',
      features: ['Material zəmanəti', 'İş keyfiyyəti', 'Xidmət']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
            Xidmətlərimiz
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Layihənin başlanğıcından tamamlanmasına qədər hər mərhələdə peşəkar dəstək
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="bg-stone-50 rounded-xl p-6 hover:bg-amber-50 transition-colors group border border-stone-100 hover:border-amber-200"
              >
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors">
                  <Icon className="text-amber-600" size={28} />
                </div>
                
                <h3 className="text-lg font-bold text-stone-800 mb-2">{service.title}</h3>
                <p className="text-stone-600 text-sm mb-4">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-stone-500">
                      <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            to="/services"
            className="inline-flex items-center space-x-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            <span>Bütün xidmətlərə bax</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;