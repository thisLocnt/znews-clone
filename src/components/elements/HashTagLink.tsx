import Link from 'next/link';

interface HashTagLinkProps {
  href: string;
  label: string;
}

export default function HashTagLink({ href, label }: HashTagLinkProps) {
  return (
    <Link
      href={href}
      className="inline-block px-2 py-1 rounded-full text-sm text-gray-900 bg-gray-200 hover:text-white hover:bg-gradient-to-r hover:from-green-500 hover:to-cyan-500"
      aria-label={`Hashtag ${label}`}>
      # {label}
    </Link>
  );
}
