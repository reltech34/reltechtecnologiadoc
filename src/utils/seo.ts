export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  structuredData?: any;
}

export const seoData: Record<string, SEOData> = {
  '/': {
    title: 'Segurança Eletrônica em Guarulhos | Rel-Tech Tecnologia do Brasil',
    description: 'Instalação de câmeras, alarmes e fechaduras digitais Intelbras e Hikvision em Guarulhos. Rel-Tech: segurança eletrônica residencial e comercial.',
    keywords: 'segurança eletrônica Guarulhos, câmeras Intelbras Guarulhos, câmeras Hikvision Guarulhos, alarmes Guarulhos, fechaduras digitais Guarulhos, monitoramento Guarulhos, empresa de segurança Guarulhos, Rel-Tech',
    canonical: `${import.meta.env.VITE_SITE_URL}/`,
    ogTitle: 'Segurança Eletrônica em Guarulhos | Rel-Tech Tecnologia do Brasil',
    ogDescription: 'Câmeras, alarmes e fechaduras Intelbras e Hikvision em Guarulhos. Proteja sua casa e empresa com a Rel-Tech.',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Rel-Tech Tecnologia do Brasil",
      "image": "https://www.rel-tech.com.br/imagens/logo.png",
      "@id": import.meta.env.VITE_SITE_URL,
      "url": import.meta.env.VITE_SITE_URL,
      "telephone": "+55 11 97194-3263",
      "email": "comercial@rel-tech.com.br",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Av. Paulo Faccini, 1890 - Loja 192, Vila Lanzara",
        "addressLocality": "Guarulhos",
        "addressRegion": "SP",
        "postalCode": "16400-050",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -23.4546,
        "longitude": -46.5333
      },
      "areaServed": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": -23.4546,
          "longitude": -46.5333
        },
        "geoRadius": 50000
      },
      "sameAs": [
        "https://www.instagram.com/reltechbrasil",
        "https://www.facebook.com/reltechbrasil"
      ],
      "openingHours": "Mo-Fr 08:00-18:00",
      "brand": [
        {
          "@type": "Brand",
          "name": "Intelbras"
        },
        {
          "@type": "Brand",
          "name": "Hikvision"
        }
      ],
      "description": "A Rel-Tech atua em Guarulhos e região na instalação de câmeras de segurança, alarmes, fechaduras digitais e sistemas de monitoramento Intelbras e Hikvision."
    }
  },
  '/servicos': {
    title: 'Serviços de Segurança Eletrônica Intelbras e Hikvision em Guarulhos | Rel-Tech',
    description: 'Instalação de câmeras de segurança, alarmes, fechaduras digitais e monitoramento Intelbras e Hikvision em Guarulhos. Equipe técnica certificada.',
    keywords: 'serviços segurança eletrônica Guarulhos, instalação câmeras Intelbras, instalação câmeras Hikvision, alarmes residenciais Guarulhos, fechaduras digitais, monitoramento CFTV',
    canonical: `${import.meta.env.VITE_SITE_URL}/servicos`,
    ogTitle: 'Serviços de Segurança Eletrônica Intelbras e Hikvision em Guarulhos',
    ogDescription: 'Instalação profissional de câmeras, alarmes e fechaduras digitais Intelbras e Hikvision em Guarulhos e região.',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Serviços de Segurança Eletrônica Intelbras e Hikvision",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Rel-Tech Tecnologia do Brasil",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Av. Paulo Faccini, 1890 - Loja 192, Vila Lanzara",
          "addressLocality": "Guarulhos",
          "addressRegion": "SP",
          "addressCountry": "BR"
        }
      },
      "serviceType": "Segurança Eletrônica",
      "areaServed": "Guarulhos e região metropolitana",
      "description": "Instalação e manutenção de câmeras de segurança, alarmes, fechaduras digitais e sistemas de monitoramento Intelbras e Hikvision."
    }
  },
  '/projetos': {
    title: 'Projetos de Segurança Eletrônica Realizados em Guarulhos | Rel-Tech',
    description: 'Conheça nossos projetos de instalação de câmeras, alarmes e fechaduras Intelbras e Hikvision em residências e empresas de Guarulhos.',
    keywords: 'projetos segurança eletrônica Guarulhos, instalações Intelbras, instalações Hikvision, cases de sucesso, portfolio Rel-Tech',
    canonical: `${import.meta.env.VITE_SITE_URL}/projetos`,
    ogTitle: 'Projetos de Segurança Eletrônica Realizados em Guarulhos',
    ogDescription: 'Portfolio de projetos de segurança eletrônica com equipamentos Intelbras e Hikvision em Guarulhos e região.',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": "Projetos de Segurança Eletrônica Rel-Tech",
      "description": "Portfolio de projetos realizados pela Rel-Tech em Guarulhos",
      "creator": {
        "@type": "Organization",
        "name": "Rel-Tech Tecnologia do Brasil"
      }
    }
  },
  '/contato': {
    title: 'Contato Rel-Tech Guarulhos | Orçamento Segurança Eletrônica Intelbras e Hikvision',
    description: 'Entre em contato com a Rel-Tech em Guarulhos. Orçamento gratuito para instalação de câmeras, alarmes e fechaduras Intelbras e Hikvision.',
    keywords: 'contato Rel-Tech Guarulhos, orçamento segurança eletrônica, telefone Rel-Tech, endereço Guarulhos',
    canonical: `${import.meta.env.VITE_SITE_URL}/contato`,
    ogTitle: 'Contato Rel-Tech Guarulhos | Orçamento Segurança Eletrônica',
    ogDescription: 'Solicite seu orçamento gratuito para segurança eletrônica Intelbras e Hikvision em Guarulhos. Atendimento especializado.',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contato Rel-Tech",
      "description": "Entre em contato para orçamento de segurança eletrônica",
      "mainEntity": {
        "@type": "LocalBusiness",
        "name": "Rel-Tech Tecnologia do Brasil",
        "telephone": "+55 11 97194-3263",
        "email": "comercial@rel-tech.com.br",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Av. Paulo Faccini, 1890 - Loja 192, Vila Lanzara",
          "addressLocality": "Guarulhos",
          "addressRegion": "SP",
          "addressCountry": "BR"
        }
      }
    }
  }
};

export const updateSEO = (pathname: string) => {
  const data = seoData[pathname] || seoData['/'];
  
  document.title = data.title;
  
  updateMetaTag('description', data.description);
  if (data.keywords) updateMetaTag('keywords', data.keywords);
  
  updateLinkTag('canonical', data.canonical || `${import.meta.env.VITE_SITE_URL}${pathname}`);
  
  updateMetaProperty('og:title', data.ogTitle || data.title);
  updateMetaProperty('og:description', data.ogDescription || data.description);
  updateMetaProperty('og:url', data.canonical || `${import.meta.env.VITE_SITE_URL}${pathname}`);
  
  if (data.structuredData) {
    updateStructuredData(data.structuredData);
  }
};

const updateMetaTag = (name: string, content: string) => {
  let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
  if (!meta) {
    meta = document.createElement('meta');
    meta.name = name;
    document.head.appendChild(meta);
  }
  meta.content = content;
};

const updateMetaProperty = (property: string, content: string) => {
  let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('property', property);
    document.head.appendChild(meta);
  }
  meta.content = content;
};

const updateLinkTag = (rel: string, href: string) => {
  let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
  if (!link) {
    link = document.createElement('link');
    link.rel = rel;
    document.head.appendChild(link);
  }
  link.href = href;
};

const updateStructuredData = (data: any) => {
  const existing = document.querySelector('script[type="application/ld+json"]');
  if (existing) {
    existing.remove();
  }
  
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
};