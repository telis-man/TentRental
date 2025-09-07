import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

interface ImageDialogProps {
  thumbnail: string;
  full: string;
  alt?: string;
  className?: string; // optional styling for the thumbnail
}

export function ImageDialog({ thumbnail, full, alt = '', className }: ImageDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <img
          src={thumbnail}
          alt={alt}
          className={`cursor-pointer rounded-md hover:opacity-80 ${className ?? ''}`}
        />
      </DialogTrigger>

      <DialogContent className="max-w-5xl p-0 bg-transparent border-none shadow-none">
        <img src={full} alt={alt} className="w-full h-auto rounded-lg" />
      </DialogContent>
    </Dialog>
  );
}
