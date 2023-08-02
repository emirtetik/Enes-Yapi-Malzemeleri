const path = require('path');

module.exports = {
  i18n: {
    locales: ['tr'],
    defaultLocale: 'tr',
    localePath: path.resolve('./public/locales'),
  },
  images: {
    domains: ['images.unsplash.com'],
  },
};
