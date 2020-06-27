---
title: Lag Mobile App (UI/UX Overview)
tags: [ app, ui, ux ]
date: 2020-01-10T05:25:44.226Z
path: blog/lag-mobile-app
cover: ./lag-01.jpeg
excerpt: While building a CMS for blogging, worpdress is the most commonly used platform. Gatsby has also topped the list recently. This article talk which one to go for and why I shifted from wordpress to gatsby. Is gatsby better than wordpress is the question I would be answering.  
---

## The Brief 

The `UI/UX` of this app is concentrated on the experiences of users of the `lag mobile app` available on the google play store.
The App is a mobile application that helps to solve the problems experienced with navigating constantly through the school's website. It offers university students an opportunity to get first-hand information and access to there database/portal.

## Project Brief

An interactive mobile application prototype that can solve the problem of searching, navigating, downloading and filtering information in a convenient way and analyze the UI/UX progress through iterations all along the design process through proper `design thinking` strategies.

## The Design Process ?

As this work serves as a personal project and away from my normal core software programming, I thought to create a good UX strategy based on knowledge sought around.


![](./lag-02.jpeg)

Gatsby has a lot of plugins that can be used for various other purposes. But you need to be a bit of a coding geek to work with `gatsby`.

## Why I migrated to gatsby?

1.  ### Performance in mind

    The first reason was keeping the performance of my web application in mind. Since gatsby is a single page application and serves mostly statically generated pages the performance is quite good with minimal deployment charges. Gatsby also optimizes the images that it serves. It also takes care of `prefetch` and `preload` of data.

2. ### Cost of deployment

    The cost of deploying a gatsby application is way cheaper than a WordPress application. `Netlify` provides a free deployment plan with `HTTPS` encryption. Suppose we are hosting a Wordpress application we need considerably a good server with a `MySql` database. So the cost will be a bit higher for this setup.

3. ### I'm a developer

    Since I'm a developer I could build the gatsby theme from scratch with a bit of `Javascript` coding. I automated the deployment process using `Netlify` and `Github`. So whenever I need to deploy some changes I just need to commit to my master branch and the deployment will be taken care of by the CI/CD setup of `Netlify`. I'm also comfortable writing the markdowns for my blog which is dynamic.

4. ### SEO is also taken care

    One important thing for me was branding my name `Rolwin Reevan` over the internet. For this all the factors of SEO had to be taken care which is a bit challenging. Since gatsby renders static pages the performance is good, which enhances the `SEO` as well. There are plugins for SEO in gatsby. Server-Side-Rendering (`SSR`) is also supported by gatsby.

5. ### Gatsby satisfies my use-case

    Most importantly gatsby was satisfying my use-case with minimal cost. My use-case before building my website was a static landing page and a dynamic blog. Even `Wordpress` satisfies this use-case very well, but like I told the cost of deployment is higher for WordPress than a gatsby application and moreover I didn't want all the features that WordPress provides.

## When to go for wordpress and when to go for gatsby?

So It depends on the use-case when to go for Gatsby and When to go for Wordpress

1. If you have a team of more than 5 non-technical people working for some content marketing company then going for WordPress will be a good idea because gatsby involves a bit of technical work. If you are a javascript developer or a full stack web developer who wants to just build his portfolio and have a blog then gatsby is a good idea if you are maintaining the website by yourself.

2. If cost is not much of your concern and ease of use is your concern then going for wordpress is a good idea. Because Wordpress involves a lot of plugins like wp-bakery, yoast, etc, that makes drag and drop functionality and SEO easier. If cost is your concern and you are ready for some little hard work you can go for Gatsby.

3. If you are planning for an online e-commerce application for small businesses with email marketing then Wordpress is probably a better solution than Gatsby I believe. The reason is you can build an e-commerce website easily with Wordpress. There are many plugins and themes that are available to set up an e-commerce website with Wordpress and you can easily keep track of your leads. The most commonly used Wordpress plugin for e-commerce application is `woocommerce`.

4. SEO and Performance in mind with minimal cost then `Gatsby` is the solution you can build a SPA and PWA applications easily with `Gatsby`. Even Wordpress has some cool plugins like `Yoast` for SEO and there are some very good flexibility while using Wordpress enhancing the SEO without much technical knowledge but you need a very good server to keep the performance of the `Wordpress` site up. If SEO is your concern then you should make sure that your site renders in less then 3 seconds.

## Building a Gatsby application

There are plenty of different ways to build gatsby websites. To start with you can look into official [gatsby docs](https://www.gatsbyjs.org/docs/) and the tutorials on their [site](https://www.gatsbyjs.org/tutorial/). There are also a list of [plugins](https://www.gatsbyjs.org/plugins/) that can help you to develop your site faster. For more comparision about Wordpress with Gatsby you can check this [link](https://www.gatsbyjs.org/features/cms/). You can go through the starters which are available over the internet. I have also open-sourced my website [Rolwin Reevan](https://rolwinreevan.com) on my [Github page](https://github.com/rolwin100/rolwinreevan_gatsby_blog). You can use this starter to build your portfolio. I have put in a lot of effort to build this starter. So please make sure you give a star for this repo.













