import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navigation/Navbar';
import FigmaActivitySection from './components/sections/FigmaActivitySection';
import FigmaFooterSection from './components/sections/FigmaFooterSection';
import FigmaHeroSection from './components/sections/FigmaHeroSection';
import FigmaNewsletterSection from './components/sections/FigmaNewsletterSection';
import DirectorsSection from './components/sections/DirectorsSection';
import HeroCardsSection from './components/sections/HeroCardsSection';
import VisionGoalsSection from './components/sections/VisionGoalsSection';
import { usePageMeta } from './hooks/usePageMeta';

function App() {
  usePageMeta({
    title: 'LifeMate Healthcare Pvt Ltd | Multispeciality Hospitals & Patient-First Healthcare in Pune',
    description:
      'LifeMate Healthcare Pvt Ltd delivers accessible, affordable, and technology-driven healthcare through Dr. Mate Hospital Narayangaon, Dr. Mate Hospital Belhe, and LifeMate Clinic in Pune.',
    keywords:
      'LifeMate Healthcare Pvt Ltd, multispeciality hospital Pune, affordable healthcare Pune, Dr Mate Hospital Narayangaon, Dr Mate Hospital Belhe, LifeMate Clinic Pune, super speciality hospital, patient-first healthcare, rural healthcare Maharashtra, ethical healthcare India',
    canonicalUrl: 'https://lifemate-healthcare.com/',
    ogTitle: 'LifeMate Healthcare Pvt Ltd - Accessible, Affordable and Advanced Healthcare',
    ogImage: 'https://lifemate-healthcare.com/og-cover.png',
    ogUrl: 'https://lifemate-healthcare.com/',
    siteName: 'LifeMate Healthcare Pvt Ltd',
    locale: 'en_IN',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'MedicalOrganization',
        name: 'LifeMate Healthcare Pvt Ltd',
        url: 'https://lifemate-healthcare.com/',
        logo: 'https://lifemate-healthcare.com/og-cover.png',
        image: 'https://lifemate-healthcare.com/og-cover.png',
        description:
          'LifeMate Healthcare Pvt Ltd provides affordable, ethical, and technology-driven healthcare across rural and urban communities in Pune.',
        email: 'lifematehealthcare@gmail.com',
        telephone: '+91 84596 12363',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Narayangaon',
          addressRegion: 'Maharashtra',
          addressCountry: 'IN',
          postalCode: '410504',
          streetAddress: 'Near ST Bus Stand',
        },
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            telephone: '+91 84596 12363',
            email: 'lifematehealthcare@gmail.com',
            areaServed: 'IN',
            availableLanguage: ['en', 'mr', 'hi'],
          },
        ],
        subOrganization: [
          { '@type': 'MedicalClinic', name: 'LifeMate Clinic', areaServed: 'Pune' },
          { '@type': 'Hospital', name: 'Dr Mate Hospital, Narayangaon', areaServed: 'Pune District' },
          { '@type': 'Hospital', name: 'Dr Mate Hospital, Belhe', areaServed: 'Pune District' },
        ],
        knowsAbout: ['Multispeciality care', 'Rural healthcare access', 'Diagnostic services', 'Patient-first treatment'],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'LifeMate Healthcare Pvt Ltd',
        url: 'https://lifemate-healthcare.com/',
        inLanguage: 'en-IN',
        publisher: {
          '@type': 'Organization',
          name: 'LifeMate Healthcare Pvt Ltd',
        },
      },
    ],
  });

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-transparent">
        <Navbar />
        <FigmaHeroSection />
        <HeroCardsSection />
        <FigmaActivitySection />
        <VisionGoalsSection />
        <DirectorsSection />
        <FigmaNewsletterSection />
        <FigmaFooterSection />
      </div>
    </BrowserRouter>
  );
}

export default App;
