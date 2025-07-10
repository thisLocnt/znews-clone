'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { TBasicNews } from '@/interfaces/common.type';
import Headline from '@/components/elements/Headline';

const BookThumbnailCard = ({ altText, href, imageUrl, title }: TBasicNews) => {
  return (
    <Link
      href={href}
      className="flex flex-col h-full gap-4 pb-4 border group hover:text-cyan-700 border-black/10">
      <div className="relative aspect-4/3">
        <Image src={imageUrl} fill sizes="(max-width: 768px) 100vw, 50vw" alt={altText} />
      </div>
      <div className="px-4 text-sm font-bold hover:text-cyan-700">{title}</div>
    </Link>
  );
};

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
              <BookThumbnailCard
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
