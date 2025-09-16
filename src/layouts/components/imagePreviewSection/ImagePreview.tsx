// import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';
import { Link } from '@tanstack/react-router';
import { useInView } from '@/layouts/hooks/useInView';
import { useImagesPreview } from '@/layouts/hooks/useImagesPreview';

export default function ImagePreview() {
  // const { t } = useTranslation();
  const { ref, inView } = useInView({ threshold: 0.3 });
  const { data } = useImagesPreview();

  return (
    <div
      ref={ref}
      className="h-full w-full flex flex-col gap-12 items-start justify-center px-42 pt-26 pb-12"
    >
      <div className="flex flex-col gap-4 mt-14 max-w-1/3">
        <h1 className={`text-[6rem] leading-none font-semibold ${inView && 'text-reveal'} `}>
          <Trans i18nKey="image_prieview_title" components={{ italic: <i /> }} />{' '}
        </h1>
        <p
          className={`text-4xl text-justify ${inView && 'text-reveal [animation-delay:0.4s!important]'}`}
        >
          <Trans
            i18nKey="image_preview_subtitle"
            components={[<Link to="/gallery" className=" hover:underline italic underline" />]}
          />
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6 flex-1 w-full items-center relative overflow-hidden">
        <div className={`overflow-hidden bg-red-700 w-full h-full`}>
          <img className="object-cover h-full hover-lift" src={data.img1.url}></img>
        </div>
        <div className={`overflow-hidden bg-red-700 h-full w-full`}>
          <img className=" object-cover h-full hover-lift" src={data.img2.url}></img>
        </div>
        <div className={`overflow-hidden bg-red-700 h-full w-full`}>
          <img className=" object-cover h-full hover-lift" src={data.img3.url}></img>
        </div>
      </div>
    </div>
  );
}
