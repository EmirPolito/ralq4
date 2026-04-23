// "use client";

// import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
// import { useState, useEffect } from "react";
// import { Card } from "@/components/ui/card-2";
// import { Button } from "@/components/ui/button";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
// } from "@/components/ui/carousel";
// import Image from "next/image";
// import Link from "next/link";

// interface GalleryHoverCarouselItem {
//   id: string;
//   title: string;
//   summary: string;
//   url: string;
//   image: string;
// }

// export default function GalleryHoverCarousel({
//   heading = "Proyectos Destacados",
//   demoUrl = "#",
//   items = [
//     {
//       id: "item-1",
//       title: "Interfaces Modernas",
//       summary:
//         "Creamos interfaces de usuario asombrosas y escalables con nuestro sistema de diseño integral.",
//       url: "#",
//       image:
//         "https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/dashboard-02.png",
//     },
//     {
//       id: "item-2",
//       title: "Visión por Computadora",
//       summary:
//         "Potentes capacidades de procesamiento de imágenes para analizar e interpretar datos visuales del mundo real.",
//       url: "#",
//       image:
//         "https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/dashboard-gradient.png",
//     },
//     {
//       id: "item-3",
//       title: "Automatización Inteligente",
//       summary:
//         "Algoritmos que aprenden continuamente de patrones de datos para automatizar tareas complejas.",
//       url: "#",
//       image:
//         "https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/featured-01.png",
//     },
//     {
//       id: "item-4",
//       title: "Análisis Predictivo",
//       summary:
//         "Capacidades avanzadas de pronóstico que analizan datos históricos para predecir tendencias futuras.",
//       url: "#",
//       image:
//         "https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/featured-06.png",
//     },
//     {
//       id: "item-5",
//       title: "Arquitectura Escalable",
//       summary:
//         "Soluciones robustas y altamente escalables que garantizan el rendimiento y la seguridad para el futuro.",
//       url: "#",
//       image:
//         "https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/Screenshot%202025-08-05%20at%2021-15-55%20Ruixen%20-%20Beautifully%20crafted%20UI%20components%20to%20elevate%20your%20web%20projects.png",
//     },
//   ],
// }: {
//   heading?: string;
//   demoUrl?: string;
//   items?: GalleryHoverCarouselItem[];
// }) {
//   const [index, setIndex] = useState(0);
//   const itemsCount = items?.length || 0;

//   const canScrollPrev = index > 0;
//   const canScrollNext = index < itemsCount - 1;

//   return (
//     <section className="py-10 sm:py-15 bg-background">
//       <div className="container mx-auto px-4 sm:px-16">
//         <div className="mb-6 sm:mb-8 flex flex-col justify-between md:mb-14 md:flex-row md:items-end lg:mb-8 gap-4">
//           <div className="max-w-6xl">
//             <h3 className="text-base sm:text-lg md:text-xl lg:text-3xl font-semibold text-[var(--primary-general)] leading-relaxed">
//               {heading}{" "}
//               <span className="text-[var(--text-titulos)] text-xs sm:text-sm md:text-base lg:text-3xl">
//                 {" "}
//                 Explora nuestra colección de soluciones innovadoras y
//                 tecnologías de vanguardia diseñadas para potenciar tu negocio.
//               </span>
//             </h3>
//           </div>

//           <div className="flex gap-2 mt-2 md:mt-0">
//             <Button
//               variant="outline"
//               size="icon"
//               onClick={() => setIndex(index - 1)}
//               disabled={!canScrollPrev}
//               className="h-9 w-9 sm:h-10 sm:w-10 rounded-full text-[var(--primary-general)] border-[var(--border)] hover:bg-[var(--primary)] hover:text-white transition-colors cursor-pointer"
//             >
//               <ChevronLeft className="h-4 w-4" />
//             </Button>
//             <Button
//               variant="outline"
//               size="icon"
//               onClick={() => setIndex(index + 1)}
//               disabled={!canScrollNext}
//               className="h-9 w-9 sm:h-10 sm:w-10 rounded-full text-[var(--primary-general)] border-[var(--border)] hover:bg-[var(--primary)] hover:text-white transition-colors cursor-pointer"
//             >
//               <ChevronRight className="h-4 w-4" />
//             </Button>
//           </div>
//         </div>

//         <div className="w-full max-w-full">
//           <Carousel
//             index={index}
//             onIndexChange={setIndex}
//             className="relative w-full max-w-full"
//           >
//             <CarouselContent className="hide-scrollbar w-full max-w-full -md:ml-10 md:-mr-4">
//               {items.map((item) => (
//                 <CarouselItem
//                   key={item.id}
//                   className="ml-3 sm:ml-5 max-w-[260px] sm:max-w-[300px] md:max-w-[350px]"
//                 >
//                   <Link
//                     href={item.url}
//                     className="group block relative w-full h-[240px] sm:h-[280px] md:h-[350px]"
//                   >
//                     <Card className="overflow-hidden h-full w-full rounded-2xl sm:rounded-3xl border border-img-frame shadow-sm">
//                       {/* Image */}
//                       <div className="relative h-full w-full transition-all duration-300 group-hover:h-1/2 will-change-[height]">
//                         <Image
//                           width={400}
//                           height={300}
//                           src={item.image}
//                           alt={item.title}
//                           className="h-full w-full object-cover object-center will-change-transform"
//                         />
//                         {/* Fade overlay at bottom */}
//                         <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                       </div>

//                       {/* Text Section */}
//                       <div className="absolute bottom-0 left-0 w-full px-3 sm:px-4 transition-all duration-300 group-hover:h-1/2 group-hover:flex flex-col justify-center bg-background/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 will-change-[height,opacity]">
//                         <h3 className="text-base sm:text-lg font-medium md:text-xl text-[var(--primary-general)]">
//                           {item.title}
//                         </h3>
//                         <p className="text-[var(--primary-color-text)] text-xs sm:text-sm md:text-base line-clamp-2">
//                           {item.summary}
//                         </p>
//                         <Button
//                           variant="outline"
//                           size="icon"
//                           className="absolute bottom-2 right-2 border-[var(--border)] bg-transparent hover:bg-[var(--primary)] hover:text-white hover:-rotate-45 transition-all duration-500 rounded-full mt-2 px-0 flex items-center gap-1 text-[var(--primary)] cursor-pointer"
//                         >
//                           <ArrowRight className="size-4" />
//                         </Button>
//                       </div>
//                     </Card>
//                   </Link>
//                 </CarouselItem>
//               ))}
//             </CarouselContent>
//           </Carousel>
//         </div>
//       </div>
//     </section>
//   );
// }
