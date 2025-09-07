// import { useRef, type ReactNode } from 'react';

// export interface ScrollSection {
//   id: string;
//   content: ReactNode;
//   className?: string;
// }

// interface ScrollSnapPageProps {
//   sections: ScrollSection[];
// }

// export function ScrollSnapPage({ sections }: ScrollSnapPageProps) {
//   const containerRef = useRef<HTMLDivElement | null>(null);

//   return (
//     <div className="relative h-screen ">
//       <div
//         ref={containerRef}
//         className="h-full overflow-y-scroll snap-y snap-mandatory scroll-smooth  [&::-webkit-scrollbar]:hidden [&scrollbar-width:none] [&-ms-overflow-style:none]"
//       >
//         {sections.map((s) => (
//           <section
//             key={s.id}
//             id={s.id}
//             className={`h-screen snap-start flex items-center justify-center ${s.className ?? ''}`}
//           >
//             {s.content}
//           </section>
//         ))}
//       </div>
//     </div>
//   );
// }

import { useRef, type ReactNode, useState, useEffect } from 'react';

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
    <div className="relative h-screen flex">
      {/* Sidebar nav */}
      <div className=" flex flex-col space-y-3 z-10 h-full justify-start items-center bg-background w-[16rem]">
        {sections.map((s) => (
          <div className="flex">
            <button
              key={s.id}
              onClick={() => handleScrollTo(s.id)}
              // className={`w-3 h-3 rounded-full transition-colors ${
              //   activeId === s.id ? 'bg-white' : 'bg-gray-400'
              // }`}
              className="flex text-4xl font-extrabold"
              aria-label={s.label ?? s.id}
            >
              {activeId === s.id && (
                <p className="text-yellow-400 text-4xl font-extrabold mr-6">_</p>
              )}
              {s.name}
            </button>
          </div>
        ))}
      </div>
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
