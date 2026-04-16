import logo from '../../assets/logo.png';

const featureLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Hospitals', href: '#hospitals' },
  { label: 'About Us', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact Us', href: '#contact' },
];

const FigmaFooterSection = () => {
  return (
    <footer className="bg-[#F7FBFD]" aria-label="Footer">
      <div className="bg-white">
        <div className="mx-auto w-[min(1120px,95vw)] py-[50px]">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-4 lg:grid-cols-[1.4fr_0.86fr_0.9fr] lg:gap-2">
            <div>
              <a href="#home" className="inline-flex items-center gap-3" aria-label="LifeMate Healthcare home">
                <img src={logo} alt="LifeMate Healthcare logo" className="h-10 w-auto object-contain" />
                <span className="flex flex-col leading-none">
                  <span className="text-[24px] font-bold leading-[1] tracking-[0.1px] text-[#0E5A8A]">
                    LifeMate Healthcare
                    <sup className="ml-1 align-super text-[11px] font-bold text-[#0E5A8A]/70">TM</sup>
                  </span>
                  <span className="mt-1 text-[11px] font-semibold uppercase tracking-[1.5px] text-[#0E5A8A]">
                    Pvt Ltd
                  </span>
                </span>
              </a>
              <p className="mt-5 max-w-[470px] text-[14px] font-medium leading-7 tracking-[0.2px] text-[#475569]">
                Trusted healthcare network focused on patient-first care, hospital excellence, and future-ready health
                innovation.
              </p>
            </div>

            <div>
              <h3 className="text-[16px] font-bold leading-6 tracking-[0.1px] text-[#0F172A]">Features</h3>
              <ul className="mt-5 space-y-[6px]">
                {featureLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-[14px] font-bold leading-6 tracking-[0.2px] text-[#475569] transition-colors hover:text-[#1D9BF0]"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[16px] font-bold leading-6 tracking-[0.1px] text-[#0F172A]">Get In Touch</h3>
              <ul className="mt-5 space-y-[10px]">
                <li className="text-[14px] font-bold leading-6 tracking-[0.2px] text-[#475569]">
                  <span className="text-[#0E5A8A]">Clinic Mobile:</span> +91 84596 12363
                </li>
                <li className="text-[14px] font-bold leading-6 tracking-[0.2px] text-[#475569]">
                  <span className="text-[#0E5A8A]">Clinic Landline:</span> +91 20 2997 2423
                </li>
                <li className="text-[14px] font-bold leading-6 tracking-[0.2px] text-[#475569]">
                  <span className="text-[#0E5A8A]">Email:</span> lifematehealthcare@gmail.com
                </li>
                <li className="text-[14px] font-bold leading-6 tracking-[0.2px] text-[#475569]">
                  <span className="text-[#0E5A8A]">Address:</span> Near ST Bus Stand, Narayangaon, Pune, Maharashtra
                  410504
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#D9E6EE] bg-[#F7FBFD]">
        <div className="mx-auto w-[min(1120px,95vw)] py-[20px] text-center">
          <p className="text-[14px] font-bold leading-6 tracking-[0.2px] text-[#475569]">
            © 2026 LifeMate Healthcare Pvt Ltd. All rights reserved.
          </p>
          <p className="mt-1 text-[14px] font-bold leading-6 tracking-[0.2px] text-[#475569]">
            Developed and maintained by{' '}
            <a
              href="https://20sdevelopers.com/"
              target="_blank"
              rel="noreferrer"
              className="text-[14px] font-bold leading-6 tracking-[0.2px] text-[#1D9BF0] transition-colors hover:text-[#0E5A8A]"
            >
              20s Developers
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FigmaFooterSection;
