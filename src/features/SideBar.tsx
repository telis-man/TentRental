import type { ScrollSection } from './ScrollSnapPage';

interface SideBarProps {
  activeId: string;
  handleScrollTo: (id: string) => void;
  sections: ScrollSection[];
}

export function SideBar({ activeId, handleScrollTo, sections }: SideBarProps) {
  return (
    <div
      className={`group absolute z-10 h-full animate-sidebar-appear transition-all
                ${activeId === 'hero' ? 'w-2/7' : 'w-20 hover:w-2/7 hover:bg-background/80 hover:text-foreground'}
          `}
    >
      <div
        className={`w-full transition-all space-y-6 absolute bottom-0 right-0 p-8 
              `}
      >
        {sections.map((s) => (
          <div key={s.id} className="flex">
            <button
              key={s.id}
              onClick={() => handleScrollTo(s.id)}
              className={`flex text-7xl ${activeId === 'hero' ? 'text-background' : 'text-foreground'} font-extrabold cursor-pointer`}
              aria-label={s.label ?? s.id}
            >
              <div className="transition-all h-full flex items-end mr-4">
                <div
                  className={`transition-all w-16 h-4 rounded ${activeId !== 'hero' && 'h-4 '} ${activeId === s.id ? 'bg-yellow-400' : `${activeId === 'hero' ? 'w-0' : 'bg-foreground'}`}`}
                />
              </div>
              <p
                className={`w-auto transition-all leading-13 text-end whitespace-nowrap origin-left ${
                  activeId !== 'hero' && 'scale-x-0 group-hover:scale-x-100'
                }`}
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
