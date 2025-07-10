import Image from "next/image";
import Link from "next/link";
import { BasicNews, FeaturedNews } from "@/interfaces/front-news";
import HeadLine from "@/components/elements/Headline";

interface Props {
  title: string;
  featured: FeaturedNews;
  tile: BasicNews[];
  thumb: BasicNews[];
}

const TileCard = ({
  href,
  imageUrl = "https://placehold.co/600x400",
  title,
  altText = "sample",
}: BasicNews) => {
  return (
    <Link href={href} className="hover:text-cyan-700">
      <div className="relative aspect-4/3 col-span-2">
        <Image
          src={imageUrl}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          alt={altText}
        />
      </div>
      <div className="font-semibold col-span-3 mt-4">{title}</div>
    </Link>
  );
};

const FeaturedCard = ({
  altText,
  description,
  href,
  imageUrl,
  title,
}: FeaturedNews) => {
  return (
    <Link href={href} className="flex flex-col gap-4 group">
      <div className="relative aspect-4/3">
        <Image
          src={imageUrl}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          alt={altText}
        />
      </div>
      <div className="text-3xl font-bold group-hover:text-cyan-700">
        {title}
      </div>
      <div
        className="text-gray-500"
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
    </Link>
  );
};

const ThumbnailCard = ({ altText, href, imageUrl, title }: BasicNews) => {
  return (
    <Link href={href} className="flex gap-4 hover:text-cyan-700">
      <div className="font-bold text-sm flex-1">{title}</div>
      <div className="relative flex-[0_0_30%] aspect-square">
        <Image
          src={imageUrl}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          alt={altText}
        />
      </div>
    </Link>
  );
};

export default function ThreeColumnNews({
  title,
  featured,
  thumb,
  tile,
}: Props) {
  return (
    <div>
      <HeadLine label={title} />

      <div className="mt-4">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-full lg:col-span-6">
            <FeaturedCard
              key={featured.id}
              href={featured.href}
              title={featured.title}
              altText={featured.altText}
              imageUrl={featured.imageUrl}
              description={featured.description}
            />
          </div>
          <div className="col-span-full sm:col-span-6 lg:col-span-3 flex flex-col gap-4">
            {tile.map((news) => (
              <TileCard
                key={news.id}
                href={news.href}
                title={news.title}
                altText={news.altText}
                imageUrl={news.imageUrl}
              />
            ))}
          </div>
          <div className="col-span-full sm:col-span-6 lg:col-span-3 flex flex-col gap-4">
            {thumb.map((news) => (
              <ThumbnailCard
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
    </div>
  );
}
