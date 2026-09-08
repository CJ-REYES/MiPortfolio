'use client';

import { useState } from 'react';
import { ExternalLink, Code2, X, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CatalogItem {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  price: string;
  description: string;
  image: string;
  videoUrl: string;
  githubUrl: string;
}

const catalogItems: CatalogItem[] = [
  {
    id: "prod-01",
    title: "Viktor Oddy",
    category: "frontend",
    categoryLabel: "Landing Page",
    price: "Diseño Web",
    description: "Estudio creativo digital minimalista con interacciones de tarjetas 3D flotantes, tipografía editorial y selector de planes interactivo.",
    image: "/ViktorOddy.png",
    videoUrl: "/ViktorOddy.mp4",
    githubUrl: "https://github.com/CJ-REYES"
  },
  {
    id: "prod-02",
    title: "Vanguard Agency",
    category: "frontend",
    categoryLabel: "Landing Page",
    price: "Diseño Web",
    description: "Colectivo digital de alta gama con estética oscura y roja, inmersiones de personajes 3D de alta calidad y navegación de estudio.",
    image: "/VANGUARD.png",
    videoUrl: "/VANGUARD.mp4",
    githubUrl: "https://github.com/CJ-REYES/VanguardAgency"
  },
  {
    id: "prod-03",
    title: "Veldara 3D",
    category: "frontend",
    categoryLabel: "Landing Page",
    price: "Diseño Web",
    description: "Experiencia web inmersiva en Three.js con universos 3D espaciales, animaciones de partículas y efectos visuales de pétalos flotantes.",
    image: "/Veldara3D.png",
    videoUrl: "/Veldara3D.mp4",
    githubUrl: "https://github.com/CJ-REYES/Veldara3D"
  },
  {
    id: "prod-04",
    title: "CitizenReport SaaS",
    category: "saas",
    categoryLabel: "Smart City SaaS",
    price: "Repositorio",
    description: "Plataforma Smart City con algoritmo de triage inteligente, app móvil en React Native, REST API en .NET 8 y base de datos geoespacial MySQL para incidentes municipales.",
    image: "/ViktorOddy.png",
    videoUrl: "/ViktorOddy.mp4",
    githubUrl: "https://github.com/CJ-REYES/CitizenReport"
  },
  {
    id: "prod-05",
    title: "EcoPulse API",
    category: "backend",
    categoryLabel: "Backend API",
    price: "Repositorio",
    description: "API orientada al monitoreo y procesamiento de datos ambientales, desarrollada con arquitecturas limpias y endpoints seguros.",
    image: "/VANGUARD.png",
    videoUrl: "/VANGUARD.mp4",
    githubUrl: "https://github.com/MAR10MM04/EcoPulse.Api"
  },
  {
    id: "prod-06",
    title: "AppDelivery",
    category: "fullstack",
    categoryLabel: "Full Stack MVP",
    price: "Repositorio",
    description: "Plataforma web full stack de delivery que centraliza los flujos de 3 perfiles (cliente, comercio y repartidor) con React, TypeScript, ASP.NET Core, MariaDB, JWT y SignalR.",
    image: "/Veldara3D.png",
    videoUrl: "/Veldara3D.mp4",
    githubUrl: "https://github.com/CJ-REYES"
  }
];

export default function CatalogPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<CatalogItem | null>(null);

  const filteredCatalog = activeCategory === "all" 
    ? catalogItems 
    : catalogItems.filter(item => item.category === activeCategory);

  return (
    <div className="w-full py-16 px-6 md:px-16 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
      >
        <div>
          <div className="text-[10px] md:text-[11px] font-mono tracking-[0.2em] text-gray-500 uppercase mb-3 flex items-center gap-2">
            <span>[ 02 ]</span>
            <span className="font-bold text-gray-900">Catálogo de Proyectos</span>
          </div>
          <h1 className="text-[2.5rem] md:text-[3.5rem] font-medium tracking-tight leading-[1.1]">
            Apps, SaaS & Landing Pages.
          </h1>
        </div>
        <p className="text-xs font-mono text-gray-600 max-w-sm">
          Haz clic en cualquier tarjeta para ver su showcase interactivo en video con reproducción continua.
        </p>
      </motion.div>

      <div className="flex flex-wrap gap-2 mb-12 border-b border-gray-200 pb-6">
        {[
          { id: "all", label: "Todos" },
          { id: "saas", label: "SaaS / Smart City" },
          { id: "backend", label: "Backend & APIs" },
          { id: "fullstack", label: "Full Stack" },
          { id: "frontend", label: "Landing Pages & UI" }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveCategory(tab.id)}
            className={`px-6 py-2.5 rounded-full border text-[11px] font-mono uppercase tracking-widest transition-all duration-300 cursor-pointer ${
              activeCategory === tab.id
                ? "bg-[#111] text-white border-[#111]"
                : "bg-transparent text-gray-600 border-gray-300 hover:border-black hover:text-black"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid de Tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCatalog.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            onClick={() => setSelectedProject(product)}
            className="group bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col justify-between hover:border-black transition-all duration-300 shadow-xs cursor-pointer"
          >
            <div>
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 border-b border-gray-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  crossOrigin="anonymous"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white/90 text-black px-4 py-2 rounded-full text-xs font-mono uppercase tracking-widest flex items-center gap-2 shadow-lg">
                    <Play size={12} fill="currentColor" />
                    <span>Ver Showcase</span>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full text-[9px] font-mono uppercase tracking-widest border border-gray-200">
                  {product.categoryLabel}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-medium tracking-tight text-gray-900 group-hover:text-black mb-2">
                  {product.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-6 line-clamp-2">
                  {product.description}
                </p>
              </div>
            </div>

            <div className="px-6 pb-6 pt-0 flex items-center justify-between border-t border-gray-100 mt-4 pt-4">
              <span className="font-mono text-sm font-bold text-gray-900">
                {product.price}
              </span>
              <span className="text-xs font-mono uppercase tracking-wider text-gray-500 group-hover:text-black flex items-center gap-1">
                <span>Reproducir</span>
                <Play size={10} />
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-2 md:p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0b0b0b] text-white w-full max-w-7xl rounded-2xl border border-gray-800 overflow-hidden shadow-2xl flex flex-col h-[85vh] md:h-[80vh]"
            >
              <div className="flex justify-between items-center px-8 py-5 border-b border-gray-800/80 bg-black/40">
                <div className="flex items-center gap-3">
                  <span className="bg-white/10 text-white px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest border border-white/10">
                    {selectedProject.categoryLabel}
                  </span>
                  <span className="text-xs font-mono text-gray-400">/ Showcase Interactivo</span>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 overflow-hidden">
                <div className="lg:col-span-7 bg-black flex items-center justify-center w-full h-full border-b lg:border-b-0 lg:border-r border-gray-800/80 relative overflow-hidden">
                  <video
                    src={selectedProject.videoUrl}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover absolute inset-0 pointer-events-none"
                  />
                </div>

                <div className="lg:col-span-5 p-6 md:p-10 flex flex-col justify-between space-y-6 overflow-y-auto bg-[#0b0b0b]">
                  <div className="space-y-6">
                    <div>
                      <p className="text-[10px] font-mono tracking-widest uppercase text-gray-500 mb-2">Proyecto Seleccionado</p>
                      <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white">
                        {selectedProject.title}
                      </h2>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-[10px] font-mono uppercase tracking-widest text-gray-400">[ Descripción General ]</h4>
                      <p className="text-sm md:text-base text-gray-300 leading-relaxed font-sans">
                        {selectedProject.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-800/80 grid grid-cols-2 gap-4 font-mono text-xs">
                      <div>
                        <span className="text-gray-500 block uppercase text-[9px]">Estado</span>
                        <span className="text-white font-bold">{selectedProject.price}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 block uppercase text-[9px]">Plataforma</span>
                        <span className="text-white font-bold">Web / UI</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-800/80">
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-3 bg-white text-black py-4 rounded-xl text-xs font-mono uppercase tracking-widest font-bold hover:bg-gray-200 transition-colors shadow-lg"
                    >
                      <Code2 size={16} />
                      <span>Ver Repositorio en GitHub</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}