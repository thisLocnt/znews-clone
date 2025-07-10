import Image from "next/image";
import Link from "next/link";
import { FeaturedNews } from "@/interfaces/front-news";

const FeaturedNewsCard = ({
  altText,
  description,
  href,
  imageUrl,
  title,
}: FeaturedNews) => {
  return (
    <Link href={href} className="gap-4 hover:text-cyan-700 grid grid-cols-12">
      <div className="relative aspect-4/3 col-span-full sm:col-span-5 md:col-span-3">
        <Image
          src={imageUrl}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          alt={altText}
        />
      </div>
      <div className="col-span-full sm:col-span-7 md:col-span-9">
        <div className="text-xl lg:text-3xl font-bold">{title}</div>
        <div
          className="text-gray-500 text-sm mt-2"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
      </div>
    </Link>
  );
};

export default function FeaturedNewsBlocks({ data }: { data: FeaturedNews[] }) {
  return (
    <div className="grid grid-cols-12 gap-4 mt-4">
      {data.map((news) => (
        <div className="col-span-full" key={news.id}>
          <FeaturedNewsCard
            altText={news.altText}
            title={news.title}
            href={news.href}
            imageUrl={news.imageUrl}
            description={news.description}
          />
        </div>
      ))}
    </div>
  );
}
