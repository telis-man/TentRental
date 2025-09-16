import type { ScrollSection } from './ScrollSnapPage';

interface SideBarProps {
  activeId: string;
  handleScrollTo: (id: string) => void;
  sections: ScrollSection[];
}

export function SideBar({ activeId, handleScrollTo, sections }: SideBarProps) {
  return (
    <div
      className={`absolute z-10 h-full bg-background animate-sidebar-appear transition-all duration-800 bg-background/80
                ${activeId === 'hero' ? 'w-2/7' : 'w-20'}
          `}
    >
      <div
        className={`w-full transition-all duration-800 space-y-6 absolute bottom-0 right-0 p-8
              `}
      >
        {sections.map((s) => (
          <div key={s.id} className="flex">
            <button
              key={s.id}
              onClick={() => handleScrollTo(s.id)}
              className="flex text-7xl font-extrabold cursor-pointer opacity-90 hover:opacity-100"
              aria-label={s.label ?? s.id}
            >
              <div className="transition-all duration-800  h-full flex items-end mr-4">
                <div
                  className={`transition-all duration-800 w-16 h-4 rounded ${activeId !== 'hero' && 'h-4 '} ${activeId === s.id ? 'bg-yellow-400' : `${activeId === 'hero' ? 'w-0' : 'bg-foreground'}`}`}
                />
              </div>
              <p
                className={`w-auto transition-all duration-800 leading-13 text-end whitespace-nowrap origin-left  ${activeId !== 'hero' && 'scale-x-0'}`}
              >
                {s.name}
              </p>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
