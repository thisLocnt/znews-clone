import Image from 'next/image';
import Link from 'next/link';
import { TBasicNews, TFeaturedNews } from '@/interfaces/common.type';
import clsx from 'clsx';

export const TileCard = ({
  href,
  imageUrl = 'https://placehold.co/600x400',
  title,
  altText = 'News Image',
}: TBasicNews) => {
  return (
    <Link href={href} className="flex flex-col gap-4 hover:text-cyan-500" aria-label={title}>
      <div className="relative aspect-4/3">
        <Image
          src={imageUrl}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          alt={altText}
          className="object-cover"
        />
      </div>
      <div className="pt-1 text-sm font-semibold text-gray-900">{title}</div>
    </Link>
  );
};

export const ThumbnailCard = ({
  altText,
  href,
  imageUrl,
  title,
  isReverse = false,
}: TBasicNews) => {
  return (
    <Link href={href} className="grid grid-cols-5 gap-3 hover:text-cyan-500" aria-label={title}>
      <div className={clsx(isReverse && 'hidden', 'font-bold text-sm col-span-3')}>{title}</div>
      <div
        className={clsx(
          isReverse ? 'relative aspect-4/3 col-span-2' : 'relative aspect-square col-span-2',
        )}
      >
        <Image
          src={imageUrl}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          alt={altText}
          className="object-cover"
        />
      </div>
      <div className={clsx(isReverse ? 'block' : 'hidden', 'font-bold text-sm col-span-3')}>
        {title}
      </div>
    </Link>
  );
};

export const FeaturedCard = ({ altText, description, href, imageUrl, title }: TFeaturedNews) => {
  return (
    <Link href={href} className="flex flex-col gap-4 group" aria-label={title}>
      <div className="relative aspect-4/3">
        <Image
          src={imageUrl}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          alt={altText}
          className="object-cover"
        />
      </div>
      <div className="text-2xl font-bold text-gray-900 lg:text-3xl group-hover:text-cyan-500">
        {title}
      </div>
      <div className="text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: description }} />
    </Link>
  );
};
