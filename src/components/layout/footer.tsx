import { Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <section className='w-full bg-primary py-12 text-white'>
      <div className='mx-auto max-w-7xl px-5 lg:px-10'>
        {/* Top */}
        <div className='grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-[1.3fr_1fr_1.2fr]'>
          {/* Left */}
          <div className='flex flex-col gap-5'>
            <img
              src='/assets/logo/logoSTKWhite.png'
              alt='Sena Tama Konsultindo'
              className='w-52 lg:w-64'
            />

            <p className='max-w-sm text-sm leading-7 text-gray-200'>
              Professional legal and business consulting services for local and
              international companies.
            </p>
          </div>

          {/* Center */}
          <div className='flex flex-col gap-5'>
            <h3 className='text-lg font-semibold'>Quick Links</h3>

            <nav>
              <ul className='flex flex-col gap-3'>
                <li>
                  <Link
                    href='/#home'
                    className='transition-colors hover:text-secondary'
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    href='/#about'
                    className='transition-colors hover:text-secondary'
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    href='/#services'
                    className='transition-colors hover:text-secondary'
                  >
                    Services
                  </Link>
                </li>

                <li>
                  <Link
                    href='/#testimonial'
                    className='transition-colors hover:text-secondary'
                  >
                    Testimonial
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Right */}
          <div className='flex flex-col gap-6'>
            <h3 className='text-lg font-semibold'>Contact Us</h3>

            <div className='flex gap-4'>
              <Mail className='mt-1 h-5 w-5 shrink-0' />

              <p className='break-all text-sm leading-7'>
                konsulwithsenatama@gmail.com
              </p>
            </div>

            <div className='flex gap-4'>
              <MapPin className='mt-1 h-5 w-5 shrink-0' />

              <p className='text-sm leading-7'>
                Soho Capital Podomoro City Lt. 25 Unit 2508
                <br />
                Jl. Letjen S. Parman Kav. 28,
                <br />
                Grogol Petamburan,
                <br />
                Jakarta Barat 11470
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className='mt-12 border-t border-white/20 pt-6 text-center'>
          <p className='text-sm text-gray-300'>
            © 2026 Sena Tama Konsultindo. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
