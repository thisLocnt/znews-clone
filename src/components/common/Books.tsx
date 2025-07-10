"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { BasicNews } from "@/interfaces/front-news";
import HeadLine from "@/components/elements/Headline";

const ThumbnailCard = ({ altText, href, imageUrl, title }: BasicNews) => {
  return (
    <Link
      href={href}
      className="flex flex-col gap-4 hover:text-cyan-700 border border-black/10 h-full pb-4"
    >
      <div className="relative aspect-4/3">
        <Image
          src={imageUrl}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          alt={altText}
        />
      </div>
      <div className="font-bold text-sm px-4">{title}</div>
    </Link>
  );
};

export default function Books({ data }: { data: BasicNews[] }) {
  return (
    <>
      <HeadLine label="BOOKS" />

      <div className="relative mt-4">
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={2}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            992: {
              slidesPerView: 5,
            },
            768: {
              slidesPerView: 3,
            },
          }}
        >
          {data?.map((news) => (
            <SwiperSlide key={news.id}>
              <ThumbnailCard
                altText={news.altText}
                href={news.href}
                imageUrl={news.imageUrl}
                title={news.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute top-2/4 -translate-y-2/4 -left-5 z-[2]">
          <button className="block bg-white p-2 rounded-full cursor-pointer border border-black/20 swiper-button-prev">
            <ChevronLeft />
          </button>
        </div>

        <div className="absolute top-2/4 -translate-y-2/4 -right-5 z-[2]">
          <button className="block bg-white p-2 rounded-full cursor-pointer border border-black/20 swiper-button-next">
            <ChevronRight />
          </button>
        </div>
      </div>
    </>
  );
}
