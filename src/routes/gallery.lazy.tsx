import { ImageItem } from '@/features/ImageItem';
import { useGalleryImages } from '@/layouts/hooks/useGalleryImages';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/gallery')({
  component: RouteComponent,
});

function RouteComponent() {
  const { data } = useGalleryImages();
  console.log('data', data);

  return (
    <div className="grid grid-cols-3 gap-6 p-4 mt-32">
      {data.map((img) => (
        <ImageItem
          key={img.hash}
          url={img.url}
          blurhash={img.hash}
          width={img.width}
          height={img.height}
        />
      ))}
    </div>
  );
}

// <div className="relative flex items-center justify-start h-full w-4/5 object-cover overflow-hidden">
//   {!loaded && (
//     <BlurhashCanvas
//       hash={data.blurHash}
//       punch={1}
//       className="absolute top-0 left-0 w-full h-full"
//     />
//   )}
//   {inView && (
//     <img
//       className={`w-full transition-opacity duration-500 ${
//         loaded ? 'opacity-100' : 'opacity-0'
//       }`}
//       src={data.imageUrl}
//       alt="About us"
//       onLoad={() => setLoaded(true)}
//     />
//   )}
// </div>
