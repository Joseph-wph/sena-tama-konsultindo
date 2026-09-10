'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface NavbarProps {
  withBackground?: boolean;
}

export default function Navbar({ withBackground = false }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumber = '6281807597477';

  const message =
    'Hello Sena Tama Konsultindo, I would like to ask about your services.';

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`absolute top-0 left-0 z-50 w-full transition-colors ${
        withBackground ? 'bg-white/50 backdrop-blur-sm shadow-sm' : ''
      }`}
    >
      <div className='mx-auto max-w-7xl px-5 lg:px-10'>
        <div className='flex h-24 items-center justify-between'>
          {/* Logo */}
          <Link href='/#home' className='shrink-0'>
            <Image
              src='/assets/logo/logoStk.png'
              alt='Sena Tama Konsultindo'
              width={224}
              height={80}
              className='h-auto w-44 xl:w-56'
            />
          </Link>

          {/* Desktop Menu */}
          <nav className='hidden lg:block'>
            <ul className='flex items-center gap-8 font-semibold text-primary xl:gap-12'>
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

          {/* Contact Button */}
          <a
            href={whatsappUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='hidden shrink-0 items-center justify-center rounded-full bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700 lg:inline-flex'
          >
            Contact Us
          </a>

          {/* Mobile Button */}
          <button
            type='button'
            onClick={() => setIsOpen(!isOpen)}
            className='text-primary lg:hidden'
            aria-label='Toggle menu'
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='bg-white shadow-lg lg:hidden'>
          <div className='mx-auto max-w-7xl px-5 py-6'>
            <ul className='flex flex-col gap-5 font-semibold text-primary'>
              <li>
                <Link href='/#home' onClick={closeMenu} className='block'>
                  Home
                </Link>
              </li>

              <li>
                <Link href='/#about' onClick={closeMenu} className='block'>
                  About
                </Link>
              </li>

              <li>
                <Link href='/#services' onClick={closeMenu} className='block'>
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href='/#testimonial'
                  onClick={closeMenu}
                  className='block'
                >
                  Testimonial
                </Link>
              </li>
            </ul>

            {/* Mobile Contact Button */}
            <a
              href={whatsappUrl}
              target='_blank'
              rel='noopener noreferrer'
              onClick={closeMenu}
              className='mt-6 flex items-center justify-center rounded-full bg-primary py-3 text-white transition-colors hover:bg-blue-700'
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
