import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
}

export default function SEO({
  title = "Akshat Sharma | Full Stack Web Developer",
  description = "Portfolio of Akshat Sharma, a premium Full Stack Web Developer based in India, designing and building scalable digital products that solve real-world problems.",
  keywords = [
    "Akshat Sharma",
    "Full Stack Developer",
    "Software Engineer",
    "React Developer",
    "Tailwind CSS",
    "Lucknow",
    "India",
    "IoT",
    "Smart waste management",
    "AgroGuardian"
  ],
  image = "/profile-placeholder.png",
  url = "https://akshatsharma.dev" // Placeholder URL
}: SEOProps) {
  useEffect(() => {
    // 1. Title
    document.title = title;

    // 2. Meta Helper function
    const updateOrCreateMeta = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Standard Meta Tags
    updateOrCreateMeta("description", description);
    updateOrCreateMeta("keywords", keywords.join(", "));
    updateOrCreateMeta("author", "Akshat Sharma");
    updateOrCreateMeta("robots", "index, follow");

    // Open Graph / Facebook
    updateOrCreateMeta("og:type", "website", true);
    updateOrCreateMeta("og:title", title, true);
    updateOrCreateMeta("og:description", description, true);
    updateOrCreateMeta("og:image", image, true);
    updateOrCreateMeta("og:url", url, true);
    updateOrCreateMeta("og:site_name", "Akshat Sharma Portfolio", true);

    // Twitter
    updateOrCreateMeta("twitter:card", "summary_large_image");
    updateOrCreateMeta("twitter:title", title);
    updateOrCreateMeta("twitter:description", description);
    updateOrCreateMeta("twitter:image", image);

    // 3. Structured Data Schema (JSON-LD)
    let schemaScript = document.getElementById("structured-data-schema");
    if (!schemaScript) {
      schemaScript = document.createElement("script");
      schemaScript.id = "structured-data-schema";
      schemaScript.setAttribute("type", "application/ld+json");
      document.head.appendChild(schemaScript);
    }

    const personSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Akshat Sharma",
      "jobTitle": "Full Stack Web Developer",
      "url": url,
      "image": `${url}${image}`,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lucknow",
        "addressRegion": "Uttar Pradesh",
        "addressCountry": "India"
      },
      "email": "akshatsharma00025@gmail.com",
      "telephone": "+91-7307227072",
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "National PG College"
      },
      "sameAs": [
        "https://github.com/akshatsharma", // Placeholder
        "https://linkedin.com/in/akshatsharma", // Placeholder
        "https://twitter.com/akshatsharma" // Placeholder
      ]
    };

    schemaScript.innerHTML = JSON.stringify(personSchema, null, 2);

    return () => {
      // Cleanup schema script on unmount
      const existingSchema = document.getElementById("structured-data-schema");
      if (existingSchema) {
        existingSchema.remove();
      }
    };
  }, [title, description, keywords, image, url]);

  return null;
}
