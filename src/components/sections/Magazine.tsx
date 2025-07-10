'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Tv } from 'lucide-react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Navigation } from 'swiper/modules';
import { TMagazine } from '@/interfaces/common.type';
import Headline from '@/components/elements/Headline';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const MagazineCard = ({ imageUrl, label, link, title }: TMagazine) => {
  return (
    <Link
      href={link}
      className="relative block group min-h-[500px] rounded-md overflow-hidden"
      aria-label={title}
    >
      <div className="absolute inset-0 z-10 transition-colors bg-gray-900/40 group-hover:bg-gray-900/50"></div>
      <Image
        src={imageUrl}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        alt={label}
        className="object-cover"
      />
      <div className="absolute top-0 z-20 px-4 py-1 mx-auto text-xs font-bold text-center text-gray-900 -translate-x-1/2 rounded-b-sm left-1/2 bg-amber-300">
        {label}
      </div>
      <div className="absolute z-20 w-full px-8 text-2xl font-bold text-center text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 group-hover:text-yellow-300">
        {title}
      </div>
      <div className="absolute z-20 p-4 text-yellow-300 transition-colors -translate-x-1/2 rounded-full bottom-10 left-1/2 group-hover:bg-yellow-300 group-hover:text-gray-900">
        <Tv />
      </div>
    </Link>
  );
};

export default function MagazineBlock({ data }: { data: TMagazine[] }) {
  return (
    <>
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
          }}
        >
          {data.map((mz) => (
            <SwiperSlide key={mz.id}>
              <MagazineCard {...mz} />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className="absolute z-10 p-2 -translate-y-1/2 bg-white border border-gray-200 rounded-full top-1/2 -left-5 hover:bg-gray-100 mz-button-prev"
          aria-label="Previous Slide"
        >
          <ChevronLeft />
        </button>
        <button
          className="absolute z-10 p-2 -translate-y-1/2 bg-white border border-gray-200 rounded-full top-1/2 -right-5 hover:bg-gray-100 mz-button-next"
          aria-label="Next Slide"
        >
          <ChevronRight />
        </button>
      </div>
    </>
  );
}
