'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { TBasicNews } from '@/interfaces/common.type';
import { TitleCard } from '../elements/NewsCard';
import Headline from '@/components/elements/Headline';

export default function Books({ data }: { data: TBasicNews[] }) {
  return (
    <section>
      <Headline label="BOOKS" />
      <div className="relative mt-4">
        <Swiper
          modules={[Navigation]}
          initialSlide={0}
          spaceBetween={24}
          slidesPerView={2}
          loop={true}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          breakpoints={{
            1024: { slidesPerView: 5 },
            768: { slidesPerView: 3 },
          }}
          speed={1000}>
          {data?.map((news) => (
            <SwiperSlide key={news.id}>
              <TitleCard
                altText={news.altText}
                href={news.href}
                imageUrl={news.imageUrl}
                title={news.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className="absolute z-10 p-2 -translate-y-1/2 bg-white border border-gray-200 rounded-full top-1/2 -left-5 hover:bg-gray-100 swiper-button-prev"
          aria-label="Previous Slide">
          <ChevronLeft />
        </button>
        <button
          className="absolute z-10 p-2 -translate-y-1/2 bg-white border border-gray-200 rounded-full top-1/2 -right-5 hover:bg-gray-100 swiper-button-next"
          aria-label="Next Slide">
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}
