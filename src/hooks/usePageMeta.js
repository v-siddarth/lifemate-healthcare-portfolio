import { useEffect } from 'react';

const upsertMeta = (selector, attrs) => {
  let tag = document.head.querySelector(selector);
  if (!tag) {
    tag = document.createElement('meta');
    Object.entries(attrs)
      .filter(([key]) => key !== 'content')
      .forEach(([key, value]) => tag.setAttribute(key, value));
    document.head.appendChild(tag);
  }
  if (attrs.content) {
    tag.setAttribute('content', attrs.content);
  }
};

const upsertLink = (selector, attrs) => {
  let tag = document.head.querySelector(selector);
  if (!tag) {
    tag = document.createElement('link');
    Object.entries(attrs)
      .filter(([key]) => key !== 'href')
      .forEach(([key, value]) => tag.setAttribute(key, value));
    document.head.appendChild(tag);
  }
  if (attrs.href) {
    tag.setAttribute('href', attrs.href);
  }
};

export const usePageMeta = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogTitle,
  ogImage,
  ogUrl,
  jsonLd,
  siteName = 'LifeMate Healthcare Pvt Ltd',
  robots = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  author = 'LifeMate Healthcare Pvt Ltd',
  locale = 'en_IN',
  ogType = 'website',
  twitterCard = 'summary_large_image',
}) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    if (description) {
      upsertMeta('meta[name="description"]', { name: 'description', content: description });
      upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description });
      upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description });
    }

    if (keywords) {
      upsertMeta('meta[name="keywords"]', { name: 'keywords', content: keywords });
    }

    upsertMeta('meta[name="robots"]', { name: 'robots', content: robots });
    upsertMeta('meta[name="author"]', { name: 'author', content: author });
    upsertMeta('meta[name="theme-color"]', { name: 'theme-color', content: '#0E5A8A' });
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: siteName });
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: ogType });
    upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: locale });
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: twitterCard });

    if (title || ogTitle) {
      upsertMeta('meta[property="og:title"]', { property: 'og:title', content: ogTitle || title });
      upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: ogTitle || title });
    }

    if (ogImage) {
      upsertMeta('meta[property="og:image"]', { property: 'og:image', content: ogImage });
      upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: ogImage });
      upsertMeta('meta[property="og:image:alt"]', {
        property: 'og:image:alt',
        content: `${ogTitle || title || siteName} cover image`,
      });
    }

    if (ogUrl || canonicalUrl) {
      upsertMeta('meta[property="og:url"]', { property: 'og:url', content: ogUrl || canonicalUrl });
    }

    if (canonicalUrl) {
      upsertLink('link[rel="canonical"]', { rel: 'canonical', href: canonicalUrl });
      upsertLink('link[rel="alternate"][hreflang="en-IN"]', {
        rel: 'alternate',
        hreflang: 'en-IN',
        href: canonicalUrl,
      });
      upsertLink('link[rel="alternate"][hreflang="x-default"]', {
        rel: 'alternate',
        hreflang: 'x-default',
        href: canonicalUrl,
      });
    }

    const jsonLdItems = (Array.isArray(jsonLd) ? jsonLd : [jsonLd]).filter(Boolean);
    const currentSchemaIds = new Set();

    jsonLdItems.forEach((entry, index) => {
      const schemaId = `lifemate-schema-${index}`;
      currentSchemaIds.add(schemaId);

      let schemaTag = document.getElementById(schemaId);
      if (!schemaTag) {
        schemaTag = document.createElement('script');
        schemaTag.type = 'application/ld+json';
        schemaTag.id = schemaId;
        document.head.appendChild(schemaTag);
      }
      schemaTag.textContent = JSON.stringify(entry);
    });

    document.querySelectorAll('script[id^="lifemate-schema-"]').forEach((tag) => {
      if (!currentSchemaIds.has(tag.id)) {
        tag.remove();
      }
    });
  }, [
    title,
    description,
    keywords,
    canonicalUrl,
    ogTitle,
    ogImage,
    ogUrl,
    jsonLd,
    siteName,
    robots,
    author,
    locale,
    ogType,
    twitterCard,
  ]);
};
