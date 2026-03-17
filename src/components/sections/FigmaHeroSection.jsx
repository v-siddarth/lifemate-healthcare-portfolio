import heroDoctor from '../../assets/hero-doctor.png';

const FigmaHeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-[#F7FBFD] lg:h-[900px]" aria-label="Hero section">
      <div className="relative w-full">
        <div className="pointer-events-none absolute left-0 top-0 z-10 hidden h-[176.96px] w-[111.61px] rounded-br-[48px] bg-[#0E5A8A] lg:block" />

        <div className="pointer-events-none absolute right-0 top-0 hidden h-[700px] w-[604.15px] bg-[#0E5A8A] lg:block" />

        <div className="pointer-events-none absolute right-[35px] top-[60px] hidden h-[760px] w-[625px] items-start justify-center lg:flex">
          <img src={heroDoctor} alt="Doctor" className="h-full w-full object-contain object-top" />
        </div>
      </div>

      <div className="relative z-20 w-full px-4 pb-16 pt-[110px] sm:px-8 lg:px-[197px] lg:pb-0 lg:pt-[190px]">
        <div className="flex flex-col">
          <div className="flex items-center gap-[30px]">
            <div className="w-full max-w-[599px]">
              <p className="text-[16px] font-bold leading-6 tracking-[0.1px] text-[#1D9BF0]">
                LifeMate Healthcare Pvt Ltd
              </p>
              <h1 className="mt-5 max-w-[700px] text-[30px] font-bold leading-[1.14] tracking-[0.2px] text-[#0F172A] sm:text-[44px] sm:leading-[1.1] lg:text-[64px] lg:leading-[72px]">
                <span className="sm:whitespace-nowrap">Trusted Healthcare.</span> Built for Every Community.
              </h1>
              <p className="mt-5 max-w-[590px] text-[16px] font-normal leading-[30px] tracking-[0.2px] text-[#475569] sm:text-[20px]">
                LifeMate Healthcare Pvt Ltd operates a growing network including LifeMate Clinic and Dr Mate Hospitals,
                focused on accessible, quality patient care.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#hospitals"
                  className="rounded-[5px] bg-[#1D9BF0] px-10 py-[15px] text-[14px] font-bold leading-[22px] tracking-[0.2px] text-white transition hover:bg-[#0E5A8A]"
                >
                  Explore Hospitals
                </a>
                <a
                  href="#contact"
                  className="rounded-[5px] border border-[#1D9BF0] px-10 py-[15px] text-[14px] font-bold leading-[22px] tracking-[0.2px] text-[#1D9BF0] transition hover:bg-[#EAF4FB]"
                >
                  Contact Leadership
                </a>
              </div>
            </div>

            <div className="hidden h-[220px] w-[415px] lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FigmaHeroSection;
