import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import famif from "@/assets/Famif.png";
import slider2 from "@/assets/Slider 2.png";
import slider3 from "@/assets/Slider 3.png";
import slider4 from "@/assets/Slider 4.png";

const Slider = () => {
  const slides = [
    {
      image: famif,
      alt: "Famif"
    },
    {
      image: slider2,
      alt: "imagem aleatói"
    },
    {
      image: slider3,
      alt: "Projetos de desenvolvimento"
    },
    {
      image: slider4,
      alt: "Família IF Baiano 2"
    }
  ];

  return (
    <section className="relative">
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          pagination={{ 
            clickable: true,
            bulletClass: 'swiper-pagination-bullet bg-white/50',
            bulletActiveClass: 'swiper-pagination-bullet-active bg-white'
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="h-96 rounded-lg overflow-hidden"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <img 
                src={slide.image} 
                alt={slide.alt} 
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        
        <Button 
          variant="ghost" 
          className="swiper-button-prev-custom absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:bg-white/20"
        >
          <ChevronLeft className="w-8 h-8" />
        </Button>
        
        <Button 
          variant="ghost" 
          className="swiper-button-next-custom absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:bg-white/20"
        >
          <ChevronRight className="w-8 h-8" />
        </Button>
      </div>
    </section>
  );
};

export default Slider;