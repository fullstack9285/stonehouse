import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';

const ContactPreview = () => {
  const contactInfo = {
    phones: ['+994 51 511 12 12', '+994 55 806 00 22'],
    email: 'stonehouse022@gmail.com',
    address: 'Bakı şəh., Sabunçu ray., Bakıxanov qəsəbəsi, Şamil Kamilov küç., ev 2h'
  };

  return (
    <section className="py-20 bg-gradient-to-br from-stone-800 to-stone-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <MessageSquare size={20} />
            <span className="text-sm font-medium">Pulsuz Konsultasiya</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Layihənizi Bizimlə Müzakirə Edin
          </h2>
          
          <p className="text-stone-300 text-lg mb-8 max-w-2xl mx-auto">
            Sizə zəng edib, layihəniz üçün pulsuz konsultasiya təklif edək.
            Ən yaxşı həlləri birlikdə müəyyən edək.
          </p>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Phone */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone size={24} />
              </div>
              <h4 className="font-semibold mb-3">Telefonla Əlaqə</h4>
              <div className="space-y-2">
                {contactInfo.phones.map((phone, index) => (
                  <a 
                    key={index}
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="block text-lg font-semibold hover:text-amber-300 transition-colors"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </div>

            {/* Email */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail size={24} />
              </div>
              <h4 className="font-semibold mb-3">Email Göndərin</h4>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="text-lg font-semibold hover:text-amber-300 transition-colors break-all"
              >
                {contactInfo.email}
              </a>
            </div>

            {/* Address */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin size={24} />
              </div>
              <h4 className="font-semibold mb-3">Ünvana Gəlin</h4>
              <p className="text-stone-300">
                {contactInfo.address}
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <a 
            href="/contact"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors hover:scale-105"
          >
            İndi Əlaqə Saxlayın
          </a>

          <p className="text-stone-400 text-sm mt-6">
            Cavab vermə müddəti: 24 saat ərzində
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactPreview;