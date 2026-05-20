import { useGalleryImages } from '@/layouts/hooks/useGalleryImages';

export default function Gallery() {
    const { data } = useGalleryImages();
    console.log(data)
    return (
        <div className="grid grid-cols-3 gap-4">
            {data?.map((image) => {
                return (
                    <img
                        key={image.hash}
                        src={image.url}
                        className=" object-cover"
                    />
                );
            })}
        </div>
    );
}