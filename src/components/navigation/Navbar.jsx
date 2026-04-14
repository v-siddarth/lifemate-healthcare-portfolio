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
      <div className="flex h-[73px] w-full items-center justify-between px-4 sm:h-[86px] sm:px-7 lg:h-[92px] lg:pl-[142px] lg:pr-[62px]">
        <div className="flex items-center gap-4 lg:gap-[33px]">
          <Link
            to="/"
            className="group inline-flex shrink-0 items-center gap-2 sm:gap-3"
            aria-label="LifeMate Healthcare home"
          >
            <img
              src={logo}
              alt="LifeMate Healthcare logo"
              className="h-7 w-auto object-contain sm:h-9 lg:h-12 xl:h-[53px]"
            />
            <span className="flex flex-col leading-none">
              <span className="text-[13px] font-extrabold tracking-[0.2px] text-[#0E5A8A] sm:text-[20px] lg:text-[22px]">
                LifeMate Healthcare
                <sup className="ml-1 align-super text-[8px] font-bold text-[#0E5A8A]/70 sm:text-[10px]">TM</sup>
              </span>
              <span className="mt-1 hidden text-[10px] font-semibold uppercase tracking-[1.5px] text-[#0E5A8A] sm:block">
                Pvt Ltd
              </span>
            </span>
          </Link>

          <nav className="ml-2 hidden items-center gap-[22px] xl:ml-5 xl:gap-[26px] lg:flex" aria-label="Primary">
            {mainNavItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className="text-[12px] font-bold leading-5 tracking-[0.2px] text-[#475569] transition-colors duration-200 hover:text-[#0F172A]"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="hidden items-center lg:flex">
          <a
            href="#contact"
            className="inline-flex h-[43px] min-w-[177px] items-center justify-center gap-3 rounded-[5px] bg-[#1D9BF0] px-[21px] py-3 text-[12px] font-bold leading-[18px] tracking-[0.2px] text-white transition-colors hover:bg-[#0E5A8A]"
          >
            CONTACT US
            <span className="text-[12px]" aria-hidden>
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
