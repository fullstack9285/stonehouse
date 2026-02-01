import { Link } from 'react-router-dom';
import { Maximize, Bed, MapPin, ArrowRight } from 'lucide-react';

const ProjectsPreview = () => {
  const projects = [
    {
      id: 1,
      name: 'Xərbülbül',
      area: 667,
      rooms: 8,
      location: 'Bakı',
      image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800'
    },
    {
      id: 2,
      name: 'Pinokkio',
      area: 265.9,
      rooms: 5,
      location: 'Quba',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w-800'
    },
    {
      id: 3,
      name: 'Springville',
      area: 273.6,
      rooms: 5,
      location: 'Şamaxı',
      image: 'https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=800'
    }
  ];

  return (
    <section className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
              Son Layihələrimiz
            </h2>
            <p className="text-stone-600 max-w-2xl">
              Tamamlanmış və davam edən ən son layihələrimiz. Hər biri unikal dizayn və keyfiyyət ilə hazırlanıb.
            </p>
          </div>
          <Link 
            to="/projects"
            className="hidden md:flex items-center space-x-2 text-amber-600 hover:text-amber-700 font-semibold"
          >
            <span>Hamısına bax</span>
            <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-stone-800">{project.location}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-stone-800 mb-3">{project.name}</h3>
                
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center space-x-2 text-stone-600">
                    <Maximize size={18} />
                    <span>{project.area} m²</span>
                  </div>
                  <div className="flex items-center space-x-2 text-stone-600">
                    <Bed size={18} />
                    <span>{project.rooms} otaq</span>
                  </div>
                </div>
                
                <div className="flex items-center text-stone-500 text-sm mb-4">
                  <MapPin size={16} className="mr-2" />
                  <span>{project.location}</span>
                </div>
                
                <Link
                  to={`/projects/${project.id}`}
                  className="block w-full text-center bg-stone-100 hover:bg-amber-50 text-stone-700 hover:text-amber-700 py-3 rounded-lg font-medium transition-colors"
                >
                  Ətraflı məlumat
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 md:hidden text-center">
          <Link 
            to="/projects"
            className="inline-flex items-center space-x-2 text-amber-600 hover:text-amber-700 font-semibold"
          >
            <span>Bütün layihələrə bax</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;