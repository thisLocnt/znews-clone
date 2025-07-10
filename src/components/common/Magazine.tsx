'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Tv } from 'lucide-react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import { Magazine } from '@/interfaces/front-news';
import Headline from '@/components/elements/Headline';

const MagazineCard = ({ imageUrl, label, link, title }: Magazine) => {
  return (
    <Link
      href={link}
      className="relative block group min-h-[500px] rounded-md overflow-hidden"
      aria-label={title}>
      <div className="absolute inset-0 bg-gray-900/40 z-10 group-hover:bg-gray-900/50 transition-colors"></div>
      <Image
        src={imageUrl}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        alt={label}
        className="object-cover"
      />
      <div className="absolute z-20 left-1/2 -translate-x-1/2 top-0 px-4 py-1 font-bold rounded-b-sm text-xs bg-amber-300 text-center text-gray-900">
        {label}
      </div>
      <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center w-full px-8 text-2xl font-bold group-hover:text-yellow-300">
        {title}
      </div>
      <div className="absolute z-20 bottom-10 left-1/2 -translate-x-1/2 text-yellow-300 group-hover:bg-yellow-300 group-hover:text-gray-900 rounded-full p-4 transition-colors">
        <Tv />
      </div>
    </Link>
  );
};

export default function MagazineBlock({ data }: { data: Magazine[] }) {
  return (
    <section>
      <Headline label="MAGAZINE" />
      <div className="relative mt-4">
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          navigation={{
            nextEl: '.mz-button-next',
            prevEl: '.mz-button-prev',
          }}
          breakpoints={{
            1024: { slidesPerView: 4 },
            768: { slidesPerView: 2 },
          }}>
          {data.map((mz) => (
            <SwiperSlide key={mz.id}>
              <MagazineCard {...mz} />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className="absolute top-1/2 -translate-y-1/2 -left-5 z-10 bg-white p-2 rounded-full border border-gray-200 hover:bg-gray-100 mz-button-prev"
          aria-label="Previous Slide">
          <ChevronLeft />
        </button>
        <button
          className="absolute top-1/2 -translate-y-1/2 -right-5 z-10 bg-white p-2 rounded-full border border-gray-200 hover:bg-gray-100 mz-button-next"
          aria-label="Next Slide">
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}
