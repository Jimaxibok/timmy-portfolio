module.exports = {
  pathPrefix: '',
  siteUrl: 'https://abdulqudus.com',
  siteTitle: 'Ayantunji TImilehin',
  siteDescription: 'Portfolio of Ayantunji Timilehin',
  author: 'Ayantunji Timilehin',
  postsForArchivePage: 3,
  defaultLanguage: 'en',
  disqusScript:
    process.env.DISQUS_SCRIPT || 'https://abulqudus-com.disqus.com/embed.js',
  pages: {
    home: '/',
    blog: 'blog',
    contact: 'contact',
    resume: 'resume',
    tag: 'tags',
  },
  social: {
    github: 'https://github.com/timmy471',

    instagram: 'https://www.instagram.com/timmy471/',
    rss: '/rss.xml',
  },
  contactFormUrl:
    process.env.CONTACT_FORM_ENDPOINT ||
    'https://getform.io/f/a04d39f8-1f64-4680-984d-c2f9585b91d4',
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || 'UA-164323935-1',
  tags: {
    crowdyvest: {
      name: 'crowdyvest',
      projectName: 'Crowdyvest Website',
      description:
        'A website built for a financial institution, UI adapted from already hosted website',
      color: '#000',
      website: 'https://crowdyvest-theqoder.netlify.app',
      github: 'https://github.com/jideabdqudus',
    },
    indicina: {
      name: 'indicina',
      projectName: 'Indicina Website',
      description:
        'A fully responsive React built website for Indicina, UI adapted from already hosted website',
      color: '#fed304',
      website: 'https://indicina-theqoder.netlify.app',
      github: 'https://github.com/jideabdqudus',
    },
    originate: {
      name: 'originate',
      projectName: 'Originate Application',
      description:
        'A dashboard system for a Financial Institution built using React and Antd  [Front End only]',
      color: '#00373e7',
      website: 'https://originate-theqoder.netlify.app',
      github: 'https://github.com/jideabdqudus',
    },
    moneyvest: {
      name: 'moneyvest',
      projectName: 'Moneyvest',
      description:
        'A financial web application, built using ReactJS, Redux. Consists of a Website and User Dashboard',
      color: '#000',
      website: 'https://moneyvestjide.netlify.app',
      github: 'https://github.com/jideabdqudus',
    },
    nsure: {
      name: 'nsure',
      projectName: 'Nsure-HRM',
      description:
        'Dashboard Management System, built for a Human Resource Management Company.',
      color: '#0b8c3f',
      website: 'https://interkelhr.com.ng/',
      github: 'https://interkelhr.com.ng/',
    },
    postify: {
      name: 'postify',
      projectName: 'Postify',
      description:
        'Postify is a social web app, poised to look and operate like Twitter. Built using ReactJS and Redux.',
      color: '#ec1025',
      website: 'https://github.com/jideabdqudus/postify',
      github: 'https://github.com/jideabdqudus/postify',
    },
    pss: {
      name: 'pss',
      projectName: 'Paysmosmo',
      description:
        'E-Commerce website, containing admin dashboard, user dashboard systems.',
      color: '#055663',
      website: 'https://paysmosmo.com',
      github: 'https://paysmosmo.com',
    },
    tracker: {
      name: 'tracker',
      projectName: 'COVID-19 Tracker',
      description:
        'An App tracking Numbers of Death, Infected and Recovered COVID-19 patients in all 186 countries.',
      color: '#202388',
      website: 'https://covid19trackerviruins2020.netlify.app/',
      github: 'https://github.com/jideabdqudus/covid-tracker',
    },
    contactkeeper: {
      name: 'contactkeeper',
      projectName: 'Contact-Keeper',
      description:
        'A general purpose programming language that is widely used for developing various applications.',
      color: '#c79505',
      website: 'https://ancient-dusk-53017.herokuapp.com/',
      github: 'https://github.com/jideabdqudus/contact-keeper',
    },
    hireme: {
      name: 'hireme',
      projectName: 'Hire Me',
      description:
        'Online Business Directory that helps create connections between service professionals and businesses.',
      color: '#4cef23',
      website: 'https://github.com/jideabdqudus/hire-me',
      github: 'https://github.com/jideabdqudus/hire-me',
    },
    itmanager: {
      name: 'itmanager',
      projectName: 'IT Manager',
      description:
        'An App built for the IT Department of a company, allows Complaints status review by a Super Admin.',
      color: '#f9c646',
      website: 'https://kind-bassi-289025.netlify.app/',
      github: 'https://github.com/jideabdqudus/logger',
    },
    farmmanager: {
      name: 'farmmanager',
      projectName: 'Farm Manger',
      description:
        'A Dashboard Management System for a Farm, tracksnumber of Items in the inventory and daily produce.',
      color: '#d923ef',
      website: 'https://github.com/jideabdqudus/blackdash',
      github: 'https://github.com/jideabdqudus/blackdash',
    },
    githubfinder: {
      name: 'githubfinder',
      projectName: 'Github Finder',
      description:
        'An application that allows user to search for Github Users, tapping out there Profile details.',
      color: '#333',
      website: 'https://vigorous-yonath-bb0546.netlify.app/',
      github: 'https://github.com/jideabdqudus/github-finder',
    },
    thesimpsons: {
      name: 'thesimpsons',
      projectName: 'The Simpsons Quotes',
      description:
        'A React web application that auto generates quotes from the Simpsons series',
      color: '#fed304',
      website: 'https://agitated-swanson-d0d5c5.netlify.app/',
      github: 'https://github.com/jideabdqudus/quote-generator',
    },
    restaurant: {
      name: 'restaurant',
      projectName: 'Restaurant Mobile',
      description:
        'A React-Native mobile application that allows user search for top rated restaurants',
      color: '#fbca02',
      website: 'https://github.com/jideabdqudus/restaurant-native',
      github: 'https://github.com/jideabdqudus/restaurant-native',
    },
    imageprocessing: {
      name: 'imageprocessing',
      projectName: 'Image Processing Software',
      description:
        'A python application using the PIL library allows you to filter, crop and process high resolution images for your app as well as conversion from JPG to PNG and vice versa',
      color: '#013444',
      website: 'https://github.com/jideabdqudus/Image-Processing',
      github: 'https://github.com/jideabdqudus/Image-Processing',
    },
    passwordkeeper: {
      name: 'passwordkeeper',
      projectName: 'Pwned Passowrd Checker',
      description:
        'Similar to "haveibeenpwned.com" this Software checks if your password has been hacked by using an hash algorithm as well as python libraries',
      color: '#C78056',
      website: 'https://github.com/jideabdqudus/Password_Verf',
      github: 'https://github.com/jideabdqudus/Password_Verf',
    },
    pygame: {
      name: 'pygame',
      projectName: 'PyGame',
      description:
        'Exciting repositiory containing a collection of real world projects and games built using python which includes Blackjack, Snake, Pong, etc.',
      color: '#EB6365',
      website: 'https://github.com/jideabdqudus/python101',
      github: 'https://github.com/jideabdqudus/python101',
    },
    pymail: {
      name: 'pymail',
      projectName: 'PyMail',
      description:
        'Pymail allows you send email to one or more people outside of your mail host provider app, similar to "Mailchimp". Send websites, or plain texts with dynamic contents.',
      color: '#EB6365',
      website: 'https://github.com/jideabdqudus/Python_Mails',
      github: 'https://github.com/jideabdqudus/Python_Mails',
    },
    trail: {
      name: 'trail',
      projectName: 'Trail',
      description:
        'A digital tool for organizations to monitor and evaluate projects. Commonly referred to as a Monitoring and Evaluation tool.',
      color: '#EB6365',
      website: 'https://mytrail.io',
      github: 'https://github.com/jideabdqudus/trail-v2',
    },
    datastudio: {
      name: 'datastudio',
      projectName: 'Datastudio',
      description:
        'The datastudio is a  Crypto-Trade application with tickers and information for more than 400 coins and dynamic tracking ',
      color: '#fed309',
      website: 'https://datastudio-theqoder.netlify.app/',
      github: 'https://github.com/jideabdqudus/DataStudio',
    },
    signals: {
      name: 'signals',
      projectName: 'Signals',
      description:
        'Signals is a Key Performance Indicator Management System, for tracking and evaluate viable systems in a company or organization.',
      color: '#fed309',
      website: 'https://signalsv2-web.staging.vggdev.com/',
      github: 'https://signalsv2-web.staging.vggdev.com/',
    },
    guessmynumber: {
      name: 'guessmynumber',
      projectName: 'Guess my number',
      description:
        'Guess my number is an interactive game, built with html, css and javascript for interaction.',
      color: '#fed309',
      website: 'https://guess-my-number-theqoder.netlify.app/',
      github: 'https://github.com/jideabdqudus/Guess-my-Number',
    },
  },
}
