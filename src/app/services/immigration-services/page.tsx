import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import Image from 'next/image';

export default function ImmigrationServices() {
  return (
    <>
      <Navbar withBackground />

      <main>
        {/* Hero */}
        <section className='relative h-[700px] w-full overflow-hidden'>
          {/* Layer 1 - Background Image */}
          <Image
            src='/assets/image/immigrationServices.jpg'
            alt='Immigration Services'
            fill
            priority
            className='object-cover object-[center_50%]'
          />

          {/* Layer 2 - Gradient */}
          <div className='absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent' />

          {/* Layer 3 - Text */}
          <div className='relative z-10 flex h-full items-end'>
            <div className='w-full px-6 pb-10 lg:px-20 lg:pb-10'>
              <h1 className='mx-auto max-w-3xl text-left lg:text-center font-heading text-5xl font-bold text-white lg:text-6xl'>
                Immigration Services
              </h1>
            </div>
          </div>
        </section>

        {/* Hero Content */}
        <div className='w-full px-15 lg:px-20 py-15'>
          <p className='mx-auto max-w-3xl text-center leading-loose text-[20px]'>
            Providing professional and comprehensive immigration support for
            individuals, investors, and businesses navigating Indonesia’s
            regulatory requirements, with a focus on clear guidance, regulatory
            compliance, and efficient solutions tailored to each client’s needs.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
