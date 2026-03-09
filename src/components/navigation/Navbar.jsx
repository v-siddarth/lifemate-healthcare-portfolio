import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const mainNavItems = [
  { label: 'Home', path: '#home' },
  { label: 'Hospitals', path: '#hospitals' },
  { label: 'About Us', path: '#about' },
  { label: 'Testimonials', path: '#testimonials' },
];

const mobileNavItems = [
  { label: 'Home', path: '#home' },
  { label: 'Hospitals', path: '#hospitals' },
  { label: 'About Us', path: '#about' },
  { label: 'Testimonials', path: '#testimonials' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-transparent">
      <div className="flex h-[88px] w-full items-center justify-between px-4 sm:h-[104px] sm:px-8 lg:h-[112px] lg:pl-[172px] lg:pr-[74px]">
        <div className="flex items-center gap-6 lg:gap-10">
          <Link
            to="/"
            className="group inline-flex shrink-0 items-center gap-2 sm:gap-3"
            aria-label="LifeMate Healthcare home"
          >
            <img
              src={logo}
              alt="LifeMate Healthcare logo"
              className="h-8 w-auto object-contain sm:h-10 lg:h-14 xl:h-16"
            />
            <span className="flex flex-col leading-none">
              <span className="text-[16px] font-extrabold tracking-[0.2px] text-[#0E5A8A] sm:text-[24px] lg:text-[26px]">
                LifeMate Healthcare
                <sup className="ml-1 align-super text-[10px] font-bold text-[#0E5A8A]/70 sm:text-[12px]">TM</sup>
              </span>
              <span className="mt-1 hidden text-[12px] font-semibold uppercase tracking-[1.8px] text-[#0E5A8A] sm:block">
                Pvt Ltd
              </span>
            </span>
          </Link>

          <nav className="ml-2 hidden items-center gap-7 xl:ml-6 xl:gap-8 lg:flex" aria-label="Primary">
            {mainNavItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className="text-[15px] font-bold leading-6 tracking-[0.2px] text-[#475569] transition-colors duration-200 hover:text-[#0F172A]"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="hidden items-center lg:flex">
          <a
            href="#contact"
            className="inline-flex h-[52px] min-w-[214px] items-center justify-center gap-[15px] rounded-[5px] bg-[#1D9BF0] px-[25px] py-[15px] text-[14px] font-bold leading-[22px] tracking-[0.2px] text-white transition-colors hover:bg-[#0E5A8A]"
          >
            CONTACT US
            <span className="text-sm" aria-hidden>
              →
            </span>
          </a>
        </div>

        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-[#D9E6EE] bg-white/80 text-[#0F172A] lg:hidden"
        >
          {isMenuOpen ? '×' : '☰'}
        </button>
      </div>

      {isMenuOpen ? (
        <div className="mx-4 rounded-xl border border-[#D9E6EE] bg-white p-4 shadow-xl lg:hidden">
          <nav className="space-y-2" aria-label="Mobile primary">
            {mobileNavItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-lg px-4 py-3 text-sm font-semibold text-[#475569] transition-colors hover:bg-[#EAF4FB] hover:text-[#0F172A]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-[#1D9BF0] px-4 py-3 text-sm font-semibold text-white"
            >
              CONTACT US
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
