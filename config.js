module.exports = {
  pathPrefix: '',
  siteUrl: 'https://abdulqudus.com',
  siteTitle: 'Jide Abdul-Qudus',
  siteDescription: 'Portfolio of Jide Abdul-Qudus',
  author: 'Jide Abdul-Qudus',
  postsForArchivePage: 3,
  defaultLanguage: 'en',
  disqusScript: process.env.DISQUS_SCRIPT || 'https://rolwinreevan.disqus.com/embed.js',
  pages: {
    home: '/',
    blog: 'blog',
    contact: 'contact',
    resume: 'resume',
    tag: 'tags',
  },
  social: {
    github: 'https://github.com/jideabdqudus',
    facebook: 'https://www.facebook.com/qudusini',
    twitter: 'https://twitter.com/jideabdqudus',
    instagram: 'https://www.instagram.com/theqoder/',
    rss: '/rss.xml',
  },
  contactFormUrl: process.env.CONTACT_FORM_ENDPOINT || 'https://getform.io/f/09a3066f-c638-40db-ad59-05e4ed71e451',
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || '',
  tags: {
    tracker: {
      name: 'tracker',
      description: 'A general purpose programming language that is widely used for developing various applications.',
      color: '#f9c646',
      href:"https://google.com",
    },

  },
};
