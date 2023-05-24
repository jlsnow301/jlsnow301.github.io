import defaultImage from './assets/images/default.png';

const CONFIG = {
  name: 'Portfolio - Jeremiah S',

  origin: 'https://jlsnow301.github.io/',
  basePathname: '/',
  trailingSlash: false,

  title: 'Portfolio',
  description: 'Portfolio for Jeremiah Snow, a Seattle based software engineer.',
  defaultImage: defaultImage,

  defaultTheme: 'system', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

  language: 'en',
  textDirection: 'ltr',

  dateFormatter: new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }),
};

export const SITE = { ...CONFIG, blog: undefined };
export const BLOG = CONFIG.blog;
export const DATE_FORMATTER = CONFIG.dateFormatter;
