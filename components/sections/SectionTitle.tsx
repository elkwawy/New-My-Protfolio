import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface SectionTitleProps {
  title: string;
  viewAll?: string;
  to?: string;
}

export default function SectionTitle({
  title,
  viewAll,
  to,
}: SectionTitleProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12">
      <h2 className="heading-lg">{title}</h2>

      {viewAll && (
        <Link
          href={`/${to}`}
          className="text-primary font-medium flex items-center gap-1 group hover:underline"
        >
          {viewAll}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  );
}
