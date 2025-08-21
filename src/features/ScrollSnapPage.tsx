import { useRef, type ReactNode } from 'react';

export interface ScrollSection {
  id: string;
  content: ReactNode;
  className?: string;
}

interface ScrollSnapPageProps {
  sections: ScrollSection[];
}

export function ScrollSnapPage({ sections }: ScrollSnapPageProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="relative h-screen">
      <div
        ref={containerRef}
        className="h-full overflow-y-scroll snap-y snap-mandatory scroll-smooth"
      >
        {sections.map((s) => (
          <section
            key={s.id}
            id={s.id}
            className={`h-screen snap-start flex items-center justify-center ${s.className ?? ''}`}
          >
            {s.content}
          </section>
        ))}
      </div>
    </div>
  );
}
