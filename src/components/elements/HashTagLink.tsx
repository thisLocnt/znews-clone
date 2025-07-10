import Link from "next/link";

interface HashTagLinkProps {
  href: string;
  label: string;
}

export default function HashTagLink({ href, label }: HashTagLinkProps) {
  return (
    <Link
      href={href}
      className="bg-black/10 px-2 py-1 rounded-full text-sm block hover:text-white hover:bg-green-500"
    >
      # {label}
    </Link>
  );
}
