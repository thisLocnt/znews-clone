"use client";
import Image from "next/image";
import Link from "next/link";
import { Tv } from "lucide-react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { Magazine } from "@/interfaces/front-news";
import HeadLine from "@/components/elements/Headline";

const MagazineCard = ({ imageUrl, label, link, title }: Magazine) => {
  return (
    <Link
      href={link}
      className="relative block group min-h-[500px] rounded-md overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/50 z-[2]"></div>
      <Image
        src={imageUrl}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        alt={label}
        className="object-cover"
      />
      <div className="absolute z-[3] left-2/4 -translate-x-2/4 top-0 px-4 py-1 font-bold rounded-b-sm text-xs bg-amber-300">
        {label}
      </div>
      <div className="absolute z-[3] top-2/4 left-2/4 -translate-2/4 text-white text-center w-full px-8 text-2xl font-bold group-hover:text-yellow-300">
        {title}
      </div>
      <div className="absolute z-[3] bottom-[10%] left-2/4 -translate-x-2/4 text-yellow-300 group-hover:bg-yellow-300 group-hover:text-black rounded-full p-4">
        <Tv />
      </div>
    </Link>
  );
};

export default function MagazineBlock({ data }: { data: Magazine[] }) {
  return (
    <>
      <HeadLine label="MAGAZINE" />

      <div className="relative mt-4">
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          navigation={{
            nextEl: ".mz-button-next",
            prevEl: ".mz-button-prev",
          }}
          breakpoints={{
            1024: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 2,
            },
          }}
        >
          {data.map((mz) => (
            <SwiperSlide key={mz.id}>
              <MagazineCard {...mz} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute top-2/4 -translate-y-2/4 -left-5 z-[2]">
          <button className="block bg-white p-2 rounded-full cursor-pointer border border-black/20 mz-button-prev">
            <ChevronLeft />
          </button>
        </div>

        <div className="absolute top-2/4 -translate-y-2/4 -right-5 z-[2]">
          <button className="block bg-white p-2 rounded-full cursor-pointer border border-black/20 mz-button-next">
            <ChevronRight />
          </button>
        </div>
      </div>
    </>
  );
}
