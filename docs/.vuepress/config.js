module.exports = {
  title: "🍲 ",
  description: "🍲 ",
  head: [
    ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.6.0/iframeResizer.min.js' }],
    ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/vanilla-lazyload/10.14.0/lazyload.min.js' }],
    ['script', { src: 'https://unpkg.com/interactjs@1.3.3/dist/interact.min.js' }],
    ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.14.0/prism.min.js' }],
    ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.14.0/components/prism-markup-templating.js' }],
    ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.7.5/beautify-html.min.js' }],
    ['meta', { name: 'robots', content: 'noindex' }],
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
  ],
  themeConfig: {
    lastUpdated: '',
    nav: [
      { text: "🍲 .🍲", link: "https://🍲 .🍲 " }
    ],
    sidebar: [
      {
        title: 'Templates',
        collapsible: true,
        children: [
          ['templates/', 'Templates']
        ]
      },
      {
        title: 'Components',
        collapsible: true,
        children: [
          ['components/', 'Components']
        ]
      }
    ]
  }
};