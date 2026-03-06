import { cn } from "@/lib/utils";

type SectionContainerProps = {
  children: React.ReactNode;
  rootClassName?: string;
  className?: string;
};

export default function SectionContainer({
  children,
  rootClassName,
  className,
}: SectionContainerProps) {
  return (
    <section className={cn("relative", rootClassName)}>
      <div className={cn("container mx-auto px-4 md:px-6 lg:px-10", className)}>
        {children}
      </div>
    </section>
  );
}
