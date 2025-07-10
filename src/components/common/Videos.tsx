"use client";
import Link from "next/link";
import { videos } from "@/data/dummy-data";
import HeadLine from "@/components/elements/Headline";

const VideoEmbed = ({ url }: { url: string }) => {
  return (
    <div className="relative h-full overflow-hidden">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={url}
        title="React JS Swiper Slider Carousel Tutorial"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default function Videos() {
  return (
    <>
      <HeadLine label="VIDEO" />

      <div className="mt-4">
        <div className="grid grid-cols-12 gap-y-4">
          <div className="col-span-8">
            <VideoEmbed url="https://www.youtube.com/embed/B9VRvOKKwfs" />
          </div>

          <div className="col-span-4 bg-gray-500/30 p-4 h-[500px] overflow-y-auto">
            {videos.map((v) => (
              <div className="flex gap-4 mb-4" key={v.id}>
                <div className="flex-[0_0_35%]">
                  <VideoEmbed url={v.youtube} />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-bold hover:text-cyan-500">
                    <Link href={v.href}>{v.title}</Link>
                  </div>
                  <div className="text-gray-500 text-xs mt-4 hover:text-cyan-500">
                    <Link href={v.categoryLink}>{v.category}</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
