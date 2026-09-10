import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import Image from 'next/image';

export default function CorporateCompliance() {
  return (
    <>
      <Navbar withBackground />

      <main>
        {/* Hero */}
        <section className='relative h-[700px] w-full overflow-hidden'>
          {/* Layer 1 - Background Image */}
          <Image
            src='/assets/image/corporateCompliance.jpg'
            alt='Corporate Compliance'
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
                Corporate Compliance
              </h1>
            </div>
          </div>
        </section>

        {/* Hero Content */}
        <div className='w-full px-15 lg:px-20 py-15'>
          <p className='mx-auto max-w-3xl text-center leading-loose text-[20px]'>
            Ongoing legal and regulatory support to ensure your business remains
            aligned with applicable requirements, effectively manages compliance
            obligations, and is well-positioned to pursue sustainable growth and
            long-term business objectives.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
