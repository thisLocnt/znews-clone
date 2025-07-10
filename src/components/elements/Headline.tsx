interface HeadlineProps {
  label: string;
}

export default function HeadLine({ label }: HeadlineProps) {
  return (
    <div className="font-bold text-2xl py-2 border-b border-black/20 relative pl-6">
      <div className="absolute left-1 top-2.5 h-2/4 -skew-x-16 w-1.5 bg-orange-600"></div>
      {label}
    </div>
  );
}
