import { Swiper, SwiperSlide} from "Swiper/react";
import { Navigation,Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slide = [
       
       {
              type: "video",
              src:"/videos/GRIDMAN(DUB)1.mp4",
              title:"Episode 1",
              description:"introduction to the first episode of Gridman",
                            },
              {
                     type:"video",
                     src:"/videos/GRIDMAN(DUB)2.mp4",
                     title:"Episode 2",
                     description:"Understanding what gridman is bout",
                     },
              {
                     type:"video",
                     src: "/videos/GRIDMAN(DUB)4.mp4",
                     title:"Episode 4",
                     description:"Alias on who the real culprit is.",
                            },
              {
                     type:"video",
                     src:"/videos/GRIDMAN(DUB)6.mp4", 
                     title:"Episode 6",
                     description:"Our classmate is the antagonist of outr world.",
                     },
       
];

export default function SwiperCarousel(){
       return(
              <Swiper
              modules={[Navigation, Pagination,Autoplay]}
              pagination={{clickable: true}}
              autoplay={{delay:6000}}
              speed={1800}
              loop={true}
              >
              {slide.map((slide,index) =>(
                     
                     <SwiperSlide key={index}>
                            <div className="relative w-full h-[screen]">

                                   <video
                                   src={slide.src}
                                   autoPlay
                                   muted
                                   loop
                                   playsInline
                                   className="w-full h-[screen] object-cover"
                                   />
                                   
                     <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-black/80 to-transparent"></div>


                     <div className="absolute left-16 bottom-24 text-white">
                            <h1 className="text-7xl md:text-8xl font-extrabold text-white">
                                   {slide.title}
                            </h1>

                            <p className="mt-4 text-xl md:text-2xl max-w-2xl">
                                   {slide.description}
                            </p>
                     </div>
                     </div>

                     </SwiperSlide>
              ))}
                     </Swiper>
       );
}
