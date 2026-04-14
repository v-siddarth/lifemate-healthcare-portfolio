import heroDoctor from '../../assets/herodoctor.svg';

const FigmaHeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-[#F7FBFD] lg:h-[743px]" aria-label="Hero section">
      <div className="relative w-full">
        <div className="pointer-events-none absolute left-0 top-0 z-10 hidden h-[146px] w-[92px] rounded-br-[40px] bg-[#0E5A8A] lg:block" />

        <div className="pointer-events-none absolute right-0 top-0 hidden h-[578px] w-[498px] bg-[#0E5A8A] lg:block" />

        <div className="pointer-events-none absolute right-[29px] top-[72px] hidden h-[595px] w-[516px] lg:block">
          <div className="absolute right-[46px] top-[44px] h-[101px] w-[101px] rounded-full border-[13px] border-white/30" />
          <div className="absolute right-[11px] top-[130px] h-[156px] w-[156px] rounded-full border border-white/22" />
          <div className="absolute left-[37px] top-[139px] h-[315px] w-[315px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.06)_45%,rgba(255,255,255,0)_72%)]" />
          <div className="absolute left-[53px] top-[101px] h-[400px] w-[341px] rounded-[176px] border border-white/16 bg-[linear-gradient(180deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.02)_100%)]" />
          <div className="absolute left-[20px] top-[339px] h-[97px] w-[97px] rounded-full bg-[#14C94A]/18 blur-[2px]" />
          <div className="absolute left-[359px] top-[295px] h-[24px] w-[24px] rounded-full bg-white/55" />
          <div className="absolute left-[378px] top-[332px] h-[11px] w-[11px] rounded-full bg-[#14C94A]/75" />
          <div className="absolute left-[394px] top-[462px] h-[84px] w-[84px] rounded-full border-[11px] border-[#14C94A]/35" />
          <div className="absolute left-[334px] top-[499px] h-[15px] w-[75px] rounded-full bg-white/30" />
          <div className="absolute inset-[0_0_0_1.25%] overflow-hidden rounded-tl-[165px] rounded-br-[165px]">
            <img
              src={heroDoctor}
              alt="Doctor"
              className="h-full w-full scale-[1.045] object-cover object-center"
            />
          </div>
        </div>
      </div>

      <div className="relative z-20 w-full px-4 pb-[52px] pt-[106px] sm:px-7 lg:px-[163px] lg:pb-0 lg:pt-[157px]">
        <div className="flex flex-col">
          <div className="flex items-center gap-6">
            <div className="w-full max-w-[494px]">
              <p className="text-[13px] font-bold leading-5 tracking-[0.1px] text-[#1D9BF0]">
                LifeMate Healthcare Pvt Ltd
              </p>
              <h1 className="mt-[18px] max-w-[578px] text-[25px] font-bold leading-[1.14] tracking-[0.2px] text-[#0F172A] sm:text-[36px] sm:leading-[1.1] lg:text-[53px] lg:leading-[59px]">
                <span className="sm:whitespace-nowrap">Trusted Healthcare.</span> Built for Every Community.
              </h1>
              <p className="mt-[18px] max-w-[487px] text-[13px] font-normal leading-6 tracking-[0.2px] text-[#475569] sm:text-[17px]">
                LifeMate Healthcare Pvt Ltd operates a growing network including LifeMate Clinic and Dr Mate Hospitals, offering accessible, affordable, and quality healthcare services.
              </p>

              <div className="mt-7 flex flex-wrap gap-[13px]">
                <a
                  href="#hospitals"
                  className="rounded-[5px] bg-[#1D9BF0] px-[33px] py-3 text-[12px] font-bold leading-[18px] tracking-[0.2px] text-white transition hover:bg-[#0E5A8A]"
                >
                  Explore Hospitals
                </a>
                <a
                  href="#contact"
                  className="rounded-[5px] border border-[#1D9BF0] px-[33px] py-3 text-[12px] font-bold leading-[18px] tracking-[0.2px] text-[#1D9BF0] transition hover:bg-[#EAF4FB]"
                >
                  Contact Leadership
                </a>
              </div>
            </div>

            <div className="hidden h-[182px] w-[342px] lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FigmaHeroSection;
