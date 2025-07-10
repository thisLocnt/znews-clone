interface HeadlineProps {
  label: string;
}

export default function Headline({ label }: HeadlineProps) {
  return (
    <div className="relative pl-6 py-2 border-b border-gray-200 font-bold text-2xl text-gray-900">
      <span className="absolute left-1 top-2.5 h-3/4 w-1.5 bg-orange-600 -skew-x-16"></span>
      {label}
    </div>
  );
}
