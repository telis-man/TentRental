import { useRef, type ReactNode, useState, useEffect } from 'react';
import { SideBar } from './SideBar';

export interface ScrollSection {
  id: string;
  content: ReactNode;
  name: string;
  className?: string;
  label?: string; // optional label for sidebar
}

interface ScrollSnapPageProps {
  sections: ScrollSection[];
}

export function ScrollSnapPage({ sections }: ScrollSnapPageProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? '');

  // Track active section
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        root: container,
        threshold: 0.6, // section should be at least 60% visible to count
      }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  // Scroll to section
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="h-screen flex">
      {/* Sidebar nav */}

      <SideBar activeId={activeId} handleScrollTo={handleScrollTo} sections={sections} />

      {/* Scroll container */}
      <div
        ref={containerRef}
        className="h-full overflow-y-scroll snap-y snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [&scrollbar-width:none] [&-ms-overflow-style:none]"
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
