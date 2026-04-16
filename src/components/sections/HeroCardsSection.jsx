const cards = [
  {
    title: 'Dr. Mate Hospital, Narayangaon',
    description:
      'Multi-specialty hospital care in Narayangaon with patient-focused treatment pathways and coordinated clinical support.',
    iconBg: '#1D9BF0',
    icon: '⚕',
    location: 'Narayangaon, Pune District',
    href: 'https://dr-hospital-website.vercel.app/',
  },
  {
    title: 'Dr. Mate Hospital, Belhe',
    description:
      'Community-connected healthcare services in Belhe, designed to improve access, continuity, and quality of medical care.',
    iconBg: '#14C94A',
    icon: '✚',
    location: 'Belhe, Pune District',
    href: 'https://dr-hospital-website.vercel.app/',
  },
  {
    title: 'LifeMate Clinic',
    description:
      'A modern consultation-led outpatient and preventive care approach ensuring early diagnosis, proactive follow-ups, and stronger long-term health outcomes.',
    iconBg: '#0E5A8A',
    icon: '❤',
    location: 'Pune',
    href: 'https://lifemate-clinic-bmxk.vercel.app/',
  },
];

const HeroCardsSection = () => {
  return (
    <section id="hospitals" className="relative z-30 bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FCFF_100%)]" aria-label="Healthcare service highlights">
      <div className="lm-container mt-8 pb-20 md:-mt-20 md:pb-24">
        <div className="grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {cards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              aria-label={`Open details for ${card.title}`}
              className="lm-card lm-card-hover flex h-full flex-col border border-[#D9E6EE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D9BF0]/40"
            >
              <div
                className="flex h-[76px] w-[72px] items-center justify-center rounded-xl text-[32px] text-white"
                style={{ backgroundColor: card.iconBg }}
                aria-hidden
              >
                {card.icon}
              </div>
              <p className="mb-2 mt-6 text-[12px] font-semibold uppercase tracking-[1.2px] text-[#0E5A8A]">{card.location}</p>
              <h3 className="lm-h3 mb-2 text-[#0F172A]">{card.title}</h3>
              <div className="mb-5 h-[2px] w-[50px] bg-[#DC2626]" />
              <p className="mt-auto text-sm leading-relaxed text-gray-500">{card.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCardsSection;
