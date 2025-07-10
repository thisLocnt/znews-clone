import { TBasicNews, TFeaturedNews } from '@/interfaces/common.type';
import { FrontNewsData } from '@/interfaces/news.type';
import Image from 'next/image';
import Link from 'next/link';

const FrontTitleCard = ({
  href,
  imageUrl = 'https://placehold.co/600x400',
  title,
  altText = 'sample',
}: TBasicNews) => {
  return (
    <Link href={href} className="grid grid-cols-5 gap-4 hover:text-cyan-700">
      <div className="relative col-span-2 aspect-4/3">
        <Image src={imageUrl} fill sizes="(max-width: 768px) 100vw, 50vw" alt={altText} />
      </div>
      <div className="col-span-3 pt-1 text-sm font-semibold">{title}</div>
    </Link>
  );
};

const FrontFeatureCard = ({ altText, description, href, imageUrl, title }: TFeaturedNews) => {
  return (
    <Link href={href} className="flex flex-col gap-4 group">
      <div className="relative aspect-4/3">
        <Image src={imageUrl} fill sizes="(max-width: 768px) 100vw, 50vw" alt={altText} />
      </div>
      <div className="text-3xl font-bold group-hover:text-cyan-700">{title}</div>
      <div dangerouslySetInnerHTML={{ __html: description }}></div>
    </Link>
  );
};

const FrontThumbnailCard = ({ altText, href, imageUrl, title }: TBasicNews) => {
  return (
    <Link href={href} className="flex flex-col gap-4 hover:text-cyan-700">
      <div className="relative aspect-4/3">
        <Image src={imageUrl} fill sizes="(max-width: 768px) 100vw, 50vw" alt={altText} />
      </div>
      <div className="text-sm font-bold">{title}</div>
    </Link>
  );
};

export default function FrontNews({ featured, thumb, tile }: FrontNewsData) {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="order-last col-span-full md:col-span-3 md:order-none">
        <div className="flex flex-col gap-4">
          {tile.map((news) => (
            <FrontTitleCard
              key={news.id}
              href={news.href}
              title={news.title}
              altText={news.altText}
              imageUrl={news.imageUrl}
            />
          ))}
        </div>
      </div>
      <div className="order-1 col-span-full md:col-span-7 md:order-none">
        <div>
          {featured.map((news) => (
            <FrontFeatureCard
              key={news.id}
              href={news.href}
              title={news.title}
              altText={news.altText}
              imageUrl={news.imageUrl}
              description={news.description}
            />
          ))}
        </div>
      </div>
      <div className="order-2 col-span-full md:col-span-2 md:order-none">
        <div className="flex flex-col gap-8">
          {thumb.map((news) => (
            <FrontThumbnailCard
              key={news.id}
              href={news.href}
              title={news.title}
              altText={news.altText}
              imageUrl={news.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
