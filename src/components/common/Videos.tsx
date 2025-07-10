'use client';

import Link from 'next/link';
import { videos } from '@/data/dummy-data';
import Headline from '@/components/elements/Headline';

const VideoEmbed = ({ url, title }: { url: string; title?: string }) => {
  return (
    <div className="relative h-full overflow-hidden">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={url}
        title={title || 'Video Content'}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen></iframe>
    </div>
  );
};

export default function Videos() {
  return (
    <section>
      <Headline label="VIDEO" />
      <div className="mt-4 grid grid-cols-12 gap-x-4 gap-y-4">
        <div className="col-span-12 lg:col-span-8">
          <VideoEmbed
            url="https://www.youtube.com/embed/mZqY7Iwiu6s"
            title="Featured Sample Video"
          />
        </div>
        <div className="col-span-12 lg:col-span-4 bg-gray-100 p-4 h-[500px] overflow-y-auto">
          {videos.map((v) => (
            <div className="flex gap-4 mb-4" key={v.id}>
              <div className="flex-[0_0_35%]">
                <VideoEmbed url={v.youtube} title={v.title} />
              </div>
              <div className="flex-1">
                <Link href={v.href} className="text-sm font-bold text-gray-900 hover:text-cyan-500">
                  {v.title}
                </Link>
                <Link
                  href={v.categoryLink}
                  className="text-xs text-gray-500 mt-4 hover:text-cyan-500 block">
                  {v.category}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
