import { LoaderCircle } from 'lucide-react';

type LoaderProps = {
  loaderSize?: number;
};

export default function Loader({ loaderSize = 8 }: LoaderProps) {
  return <LoaderCircle className="animate-spin text-stone-500" size={loaderSize} />;
}
