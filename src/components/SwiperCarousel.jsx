import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    type: "video",
    src: "/videos/GRIDMAN(DUB)1.mp4",
    title: "Episode 1",
    description: "Introduction to the first episode of Gridman.",
  },
  {
    type: "video",
    src: "/videos/GRIDMAN(DUB)2.mp4",
    title: "Episode 2",
    description: "Understanding what Gridman is about.",
  },
  {
    type: "video",
    src: "/videos/GRIDMAN(DUB)4.mp4",
    title: "Episode 4",
    description: "Alias on who the real culprit is.",
  },
  {
    type: "video",
    src: "/videos/GRIDMAN(DUB)6.mp4",
    title: "Episode 6",
    description: "Our classmate is the antagonist of our world.",
  },
];

export default function SwiperCarousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
      speed={1800}
      loop
      className="w-full h-screen"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-screen overflow-hidden">
            <video
              src={slide.src}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-screen object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

            <div className="absolute left-6 md:left-16 bottom-16 md:bottom-24 text-white z-10">
              <h1 className="text-4xl md:text-7xl font-extrabold">
                {slide.title}
              </h1>

              <p className="mt-4 max-w-2xl text-lg md:text-2xl">
                {slide.description}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}