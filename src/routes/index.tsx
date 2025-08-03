import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <h1 className="text-[360px] font-extrabold">VERSUS</h1>
    </div>
  );
}
