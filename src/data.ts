export const headerData = {
  links: [
    {
      text: 'Skills',
      href: '#skills',
    },
    {
      text: 'About',
      href: '#about',
    },
    {
      text: 'Contributions',
      href: '#work',
    },
  ],
};

export const footerData = {
  links: [],

  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/jlsnow301' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/jlsnow301' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm bg-[url(/favico.ico)]"></span>
    Made in <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://github.com/withastro/astro"> Astro</a>
  `,
};
