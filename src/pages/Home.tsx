import BannerContent from '@/layouts/components/banner/BannerContent';
import { Suspense } from 'react';

export default function Home() {
  return (
    <div>
      {/* <div className="relative min-h-screen overflow-hidden"> */}
      <Suspense fallback={'loading...'}>
        <BannerContent />
      </Suspense>
      <section className="relative z-10 text-white p-12">
        <h1 className="text-4xl font-bold">Welcome to the Homepage</h1>
        <p>Scroll down for more</p>
      </section>
      <section className="relative z-10 text-white p-12">
        <h1 className="text-4xl font-bold">Welcome to the Homepage</h1>
        <p>Scroll down for more</p>
      </section>{' '}
      <section className="relative z-10 text-white p-12">
        <h1 className="text-4xl font-bold">Welcome to the Homepage</h1>
        <p>Scroll down for more</p>
      </section>{' '}
      <section className="relative z-10 text-white p-12">
        <h1 className="text-4xl font-bold">Welcome to the Homepage</h1>
        <p>Scroll down for more</p>
      </section>{' '}
      <section className="relative z-10 text-white p-12">
        <h1 className="text-4xl font-bold">Welcome to the Homepage</h1>
        <p>Scroll down for more</p>
      </section>{' '}
      <section className="relative z-10 text-white p-12">
        <h1 className="text-4xl font-bold">Welcome to the Homepage</h1>
        <p>Scroll down for more</p>
      </section>{' '}
      <section className="relative z-10 text-white p-12">
        <h1 className="text-4xl font-bold">Welcome to the Homepage</h1>
        <p>Scroll down for more</p>
      </section>
      {/* </div> */}
    </div>
  );
}
