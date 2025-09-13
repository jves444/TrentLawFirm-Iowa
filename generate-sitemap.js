// generate-sitemap.js
const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

// Your website’s base URL
const hostname = 'https://www.yourlawfirm.com';

// Define the URLs you want in the sitemap !!!! NEEDS TO UPDATE URLS
const urls = [
  { url: '/', changefreq: 'monthly', priority: 1.0 },
  { url: '/practice-areas/family-law', changefreq: 'monthly', priority: 0.8 },
  { url: '/practice-areas/criminal-defense', changefreq: 'monthly', priority: 0.8 },
  { url: '/attorneys/john-doe', changefreq: 'yearly', priority: 0.5 },
  { url: '/contact', changefreq: 'yearly', priority: 0.5 }
];

(async () => {
  // Create the sitemap stream
  const sitemapStream = new SitemapStream({ hostname });

  // Write all URLs to it
  urls.forEach((item) => sitemapStream.write(item));

  sitemapStream.end();

  // Save it to the public folder
  const data = await streamToPromise(sitemapStream);
  createWriteStream('./public/sitemap.xml').write(data);

  console.log('✅ Sitemap generated at public/sitemap.xml');
})();
