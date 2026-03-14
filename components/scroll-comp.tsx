// "use client";

// import { useRef } from "react";
// import Image from "next/image";

// import { cn } from "@/lib/utils";
// import StackingCards, { StackingCardItem } from "@/components/ui/stasy-cards";

// const cards = [
//   {
//     bgColor: "bg-[#d1dada]",
//     title: "The Guiding Light",
//     description:
//       "Lighthouses have stood as beacons of hope for centuries, guiding sailors safely through treacherous waters. Their glowing light and towering presence serve as a reminder of humanity’s connection to the sea.",
//     image:
//       "https://plus.unsplash.com/premium_vector-1739262161806-d954eb02427c?w=800&auto=format&fit=crop&q=60",
//   },
//   {
//     bgColor: "bg-[#88c0b5]",
//     title: "Life Beneath the Waves",
//     description:
//       "From shimmering schools of fish to solitary hunters, the ocean is home to an incredible variety of marine life.",
//     image:
//       "https://plus.unsplash.com/premium_vector-1739200616200-69a138d91627?w=800&auto=format&fit=crop&q=60",
//   },
//   {
//     bgColor: "bg-[#d2c984]",
//     title: "Alone on the Open Sea",
//     description:
//       "Drifting across the endless horizon, traveling alone on the sea is a test of courage and resilience.",
//     image:
//       "https://plus.unsplash.com/premium_vector-1738597190290-a3b571590b9e?w=800&auto=format&fit=crop&q=60",
//   },
//   {
//     bgColor: "bg-[#d9ced1]",
//     title: "The Art of Sailing",
//     description:
//       "Harnessing the power of the wind, sailing is both a skill and an adventure.",
//     image:
//       "https://plus.unsplash.com/premium_vector-1738935247245-97940c74cced?w=800&auto=format&fit=crop&q=60",
//   },
//   {
//     bgColor: "bg-[#8dbba6]",
//     title: "The Era of Whaling",
//     description:
//       "Once a thriving industry, whale hunting shaped economies and cultures across the world.",
//     image:
//       "https://plus.unsplash.com/premium_vector-1738935247692-1c2f2c924fd8?w=800&auto=format&fit=crop&q=60",
//   },
// ];

// export default function StackingCardsDemo() {
//   const container = useRef<HTMLDivElement>(null);

//   return (
//     <section className="relative h-[120vh] bg-background">
      
//       {/* CONTENEDOR STICKY */}
//       <div className="sticky top-0 h-screen flex items-center">

//         <div
//           ref={container}
//           className="h-[800px] w-full bg-background overflow-auto text-white"
//         >
//           <StackingCards
//             totalCards={cards.length}
//             scrollOptions={{ container: container }}
//           >
            
//             {/* TITULO */}
//             <div className="text-left pt-20 pb-10 max-w-7xl mx-auto">
//               <h2 className="text-5xl font-bold text-primary">
//                 Explore the Ocean
//               </h2>
//             </div>

//             {cards.map(({ bgColor, description, image, title }, index) => {
//               return (
//                 <StackingCardItem key={index} index={index} className="h-[620px]">
                  
//                   <div
//                     className={cn(
//                       bgColor,
//                       "h-[80%] sm:h-[80%] flex-col sm:flex-row aspect-video px-8 py-0 flex w-11/12 rounded-2xl mx-auto relative"
//                     )}
//                   >
                    
//                     {/* TEXTO */}
//                     <div className="flex-1 flex flex-col justify-center">
//                       <h3 className="font-bold text-4xl mb-6 text-black">{title}</h3>
//                       <p className="text-base opacity-90 text-black">{description}</p>
//                     </div>

//                     {/* IMAGEN */}
// <div className="w-full sm:w-1/2 rounded-xl aspect-video relative overflow-hidden sm:translate-x-8">                      <Image
//                         src={image}
//                         alt={title}
//                         fill
//                         className="object-cover"
//                       />
//                     </div>

//                   </div>

//                 </StackingCardItem>
//               );
//             })}

//           </StackingCards>
//         </div>

//       </div>

//     </section>
//   );
// }