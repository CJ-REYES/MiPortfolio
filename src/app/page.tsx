'use client';

import { ExternalLink, Code2, Mail, MapPin, Globe } from 'lucide-react';
import { motion } from 'motion/react';

export default function CVPage() {
  const experiences = [
    {
      period: "2025 — 2026",
      role: "CitizenReport - Smart City SaaS Platform",
      company: "ExpoCiencias Campeche / Repositorio",
      description: "Plataforma SaaS de ciudad inteligente con algoritmo de triage inteligente, aplicación móvil en React Native, REST API en .NET 8 y base de datos geoespacial MySQL para el seguimiento de incidentes municipales en Candelaria, Campeche.",
      githubUrl: "https://github.com/CJ-REYES/CitizenReport"
    },
    {
      period: "2026",
      role: "AppDelivery - Plataforma web full stack de delivery",
      company: "Proyecto Personal / Repositorio",
      description: "Centralicé en un MVP los flujos de 3 perfiles (cliente, comercio y repartidor) al implementar catálogo, carrito, pedidos, perfiles y seguimiento con React, TypeScript, ASP.NET Core, MariaDB, JWT y SignalR. Respaldé la estabilidad del backend con 19 pruebas de integración y automaticé la validación de cada Pull Request mediante GitHub Actions, Git Flow y documentación técnica.",
      githubUrl: "https://github.com/CJ-REYES/AppDelivery"
    },
    {
      period: "2025 — 2026",
      role: "Agro Tienda - API REST para productos y usuarios",
      company: "Proyecto Académico / Repositorio",
      description: "Construí una API REST para gestionar 2 entidades clave (productos y usuarios) mediante C#, ASP.NET Core, Entity Framework Core y SQL Server, con controladores asíncronos, migraciones y Swagger/OpenAPI.",
      githubUrl: "https://github.com/Bartt0/AgroTiendaSQL"
    }
  ];

  const techStack = [
    {
      category: "Frontend y Móvil",
      skills: "React, React Native, TypeScript, JavaScript, Vite, Tailwind CSS, HTML5, CSS3, diseño responsivo, animaciones web, accesibilidad."
    },
    {
      category: "Backend y datos",
      skills: "C#, .NET 8, ASP.NET Core, APIs REST, Entity Framework Core, SQL Server, MySQL Geoespacial, MariaDB, JWT, SignalR."
    },
    {
      category: "Herramientas y DevOps",
      skills: "Expo Go, Git, GitHub, Git Flow, GitHub Actions, Swagger/OpenAPI, xUnit."
    }
  ];

  return (
    <div className="w-full">
      {/* Hero CV */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="px-6 md:px-16 pt-20 pb-16 max-w-6xl mx-auto"
      >
        <div className="text-[10px] md:text-[11px] font-mono tracking-[0.2em] text-gray-500 uppercase mb-4">
          [ CURRICULUM VITAE — CARLOS JOSE SUCHITE REYES ]
        </div>
        <h1 className="text-[3rem] md:text-[5rem] font-normal tracking-tight leading-[1.05] mb-8">
          Desarrollador Full Stack | .NET, React Native y Smart City SaaS.
        </h1>
        <p className="text-base md:text-lg text-gray-700 max-w-2xl leading-relaxed font-sans mb-12">
          Estudiante de Ingeniería en Desarrollo y Gestión de Software en la Universidad Tecnológica de Candelaria. Desarrollo plataformas SaaS, aplicaciones móviles y APIs con un enfoque riguroso en arquitecturas limpias y tecnología cívica.
        </p>
      </motion.section>

      {/* Sección de Contacto */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-gray-100 py-16 px-6 md:px-16 border-y border-gray-200"
      >
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xs font-mono tracking-widest uppercase text-gray-500 mb-8">[ CONTACTO ]</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a 
              href="mailto:cjosereyes09@gmail.com"
              className="bg-white p-6 rounded-lg border border-gray-200 shadow-xs flex items-center gap-4 hover:border-black transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                <Mail size={18} />
              </div>
              <div>
                <span className="block text-[10px] font-mono uppercase tracking-widest text-gray-500">Correo</span>
                <span className="text-xs font-mono font-bold text-gray-900">cjosereyes09@gmail.com</span>
              </div>
            </a>

            <a 
              href="https://github.com/CJ-REYES"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg border border-gray-200 shadow-xs flex items-center gap-4 hover:border-black transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                <Globe size={18} />
              </div>
              <div>
                <span className="block text-[10px] font-mono uppercase tracking-widest text-gray-500">GitHub</span>
                <span className="text-xs font-mono font-bold text-gray-900">github.com/CJ-REYES</span>
              </div>
            </a>

            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-xs flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <MapPin size={18} />
              </div>
              <div>
                <span className="block text-[10px] font-mono uppercase tracking-widest text-gray-500">Ubicación</span>
                <span className="text-xs font-mono font-bold text-gray-900">Candelaria, Campeche</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Expertise Stack */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="py-20 px-6 md:px-16 max-w-6xl mx-auto border-b border-gray-200"
      >
        <h3 className="text-xs font-mono tracking-widest uppercase text-gray-500 mb-8">[ HABILIDADES TÉCNICAS ]</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {techStack.map((group, idx) => (
            <div key={idx} className="bg-white p-8 rounded-lg border border-gray-200 shadow-xs">
              <h4 className="font-mono text-sm uppercase tracking-wider mb-2 font-bold">{group.category}</h4>
              <p className="text-xs text-gray-600 leading-relaxed">{group.skills}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Experience & Projects Timeline */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="py-24 px-6 md:px-16 max-w-6xl mx-auto"
      >
        <h3 className="text-xs font-mono tracking-widest uppercase text-gray-500 mb-12">[ PROYECTOS DESTACADOS ]</h3>
        <div className="space-y-12">
          {experiences.map((item, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 pb-12 border-b border-gray-200 last:border-0">
              <div className="font-mono text-xs text-gray-500 tracking-wider">
                {item.period}
              </div>
              <div className="md:col-span-3 space-y-3">
                <div>
                  <h4 className="text-xl font-medium">{item.role}</h4>
                  <p className="text-xs font-mono uppercase tracking-wider text-gray-600 mt-1">{item.company}</p>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{item.description}</p>
                <div>
                  <a
                    href={item.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#111] text-white px-4 py-2 rounded-md text-xs font-mono uppercase tracking-wider hover:bg-gray-800 transition-colors shadow-xs"
                  >
                    <Code2 size={12} />
                    <span>Ver Repositorio</span>
                    <ExternalLink size={10} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}