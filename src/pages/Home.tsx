import BannerContent from '@/layouts/components/banner/BannerContent';

export default function Home() {
  return (
    <div>
      <BannerContent />

      {/* <section className="relative z-10 text-white p-12">
        <h1 className="text-4xl font-bold">Welcome to the Homepage</h1>
        <p>Scroll down for more</p>
      </section> */}
      <section className="w-full text-right pr-16 text-[4rem] leading-tight font-extrabold flex flex-col text-white ">
        <h1>IŠSKIRTINEI ŠVEITEI -</h1>
        <h1>KOMFORTABILIAM POILSIUI -</h1>
        <h1>NEPAKARTOJAMAM NUOTYKIUI -</h1>
      </section>
      <section className="w-full text-center">
        <h1 className="font-extrabold text-[24rem] text-white tracking-widest ">GLAMPIS</h1>
      </section>
    </div>
  );
}
