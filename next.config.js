/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate-plugin');

module.exports = nextTranslate(
  {
    images: {
      minimumCacheTTL: 31536000,
    },
  },
  { turbopack: true }
);
