---
title: Fetching data in React - Quick guide
tags: [javascript, react, axios, fetch]
date: 2021-04-27T05:25:44.226Z
path: blog/fetch-data-with-react
cover: ./1.jpg
excerpt: Fetching data from an API either from an external source or from the Backend of your application.
---

Fetching data from an API either from an external source or from the Backend of your application can be done in many ways.

In this Quick guide, I would show you how to fetch data in a react app by making an HTTP request to a REST API using 4 different patterns.

Before I begin, let's have a refresher on what REST APIs are:

# What is a REST API?

A [REST API](https://restfulapi.net/) (also known as RESTful API) is an application programming interface (API or web API) that conforms to the constraints of REST architectural style and allows for interaction with RESTful web services. REST stands for "REpresentational State Transfer".

In this guide, we would be making use of the [Github REST API](https://docs.github.com/en/rest) and its sample response looks like this:

```html
<script>
    {
  "login": "jideabdqudus",
  "id": 45945474,
  "node_id": "MDQ6VXNlcjQ1OTQ1NDc0",
  "avatar_url": "https://avatars.githubusercontent.com/u/45945474?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/jideabdqudus",
  "html_url": "https://github.com/jideabdqudus",
  "followers_url": "https://api.github.com/users/jideabdqudus/followers",
  "following_url": "https://api.github.com/users/jideabdqudus/following{/other_user}",
  "gists_url": "https://api.github.com/users/jideabdqudus/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/jideabdqudus/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/jideabdqudus/subscriptions",
  "organizations_url": "https://api.github.com/users/jideabdqudus/orgs",
  "repos_url": "https://api.github.com/users/jideabdqudus/repos",
  "events_url": "https://api.github.com/users/jideabdqudus/events{/privacy}",
  "received_events_url": "https://api.github.com/users/jideabdqudus/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Jide Abdul-Qudus.",
  "company": null,
  "blog": "www.abdulqudus.com",
  "location": "Lagos, Nigeria.",
  "email": null,
  "hireable": true,
  "bio": "Software Engineer.",
  "twitter_username": null,
  "public_repos": 57,
  "public_gists": 0,
  "followers": 12,
  "following": 0,
  "created_at": "2018-12-17T15:57:35Z",
  "updated_at": "2021-04-06T20:48:07Z"
  }
</script>
```

Whenever a GET request is made to this (https://api.github.com/users/jideabdqudus) endpoint it returns this Javascript Object as its response & we can decide to use this data in our application.

# Fetching data using the Fetch API

The Fetch API is an inbuilt JavaScript method for getting resources from a server or an API endpoint. It s a tool that's built into most modern browsers on the window object `(window.fetch)` and enables us to make HTTP requests very easily using JavaScript promises.

To make a simple GET request with fetch we just need to include the URL endpoint which is a compulsory argument. It returns a promise that points to the response from the request. We want to make this request once our React component has mounted hence we would be making use of a Hook called useEffect for functional-based components or componentDidMount for class-based components.
<br/><br/>

```html
<script>
  import React, { useState, useEffect } from 'react'
  export default function App() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
      fetch('https://api.github.com/users/jideabdqudus')
        .then(response => {
          if (response.ok) {
            return response.json()
          }
          throw response
        })
        .then(data => {
          setData(data)
        })
        .catch(error => {
          console.error('Error fetching data: ', error)
          setError(error)
        })
        .finally(() => {
          setLoading(false)
        })
    }, [])

    if (loading) return 'Loading...'
    if (error) return 'Error!'
    return (
      <div style={{ textAlign: 'center' }}>
        <img src={data.avatar_url} alt="Avatar" height="100" />
        <p>Name: {data.name}</p>
        <p>Bio: {data.bio}</p>
        <p>Username: {data.login}</p>
        <p>Location: {data.location}</p>
        <p>Public Repos: {data.public_repos}</p>
      </div>
    )
  }
</script>
```

In the code above, we have created a very simple functional component that makes a fetch request once the component gets mounted and sends back the response to us in the data state.

Within the useEffect we declare the API endpoint inside of our fetch function, the `.then()` callback, was used to see if the response was okay (`response.ok`). We call back a response as JSON data if the response is ok.

If it's not an okay response, we assume there was an error making the request. Using `fetch`, for us to handle the errors, we throw response as an error for it to handled by our catch callback.

Here in our example, we are putting our error data in state with `setError`. If there's an error we return the text "Error!".

The `.finally()` callback is a function that is called when our promise has resolved successfully or not. In it, we set loading to false, so that we no longer see our `loading` text.

Instead we see either our data on the page if the request was made successfully, or that there was an error in making the request if not.

# How to Fetch Data in React Using Axios

The second pattern is by making use of Axios. Axios is an easy to use promise-based HTTP client for the browser and node.js. With Axios, we get the ability to intercept and cancel request, it also has a built-in feature that provides client-side protection against cross-site request forgery.

Axios is a React/Javascript library, so for us to use it in our app we would need to install it first:

`npm install axios or yarn add axios`


After which we import it at the top of the component that it would be used in. Making HTTP request with Axios is quite easy, and it's one of the most popular ways of fetching data in React. We would be converting the previous Fetch example to an axios request.

```html
<script>
  import React, { useState, useEffect } from 'react'
  import axios from 'axios'
  export default function App() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
      axios('https://api.github.com/users/jideabdqudus')
        .then(response => {
          setData(response.data)
        })
        .catch(error => {
          console.error('Error fetching data: ', error)
          setError(error)
        })
        .finally(() => {
          setLoading(false)
        })
    }, [])

    if (loading) return 'Loading...'
    if (error) return 'Error!'
    return (
      <div style={{ textAlign: 'center' }}>
        <img src={data.avatar_url} alt="Avatar" height="100" />
        <p>Name: {data.name}</p>
        <p>Bio: {data.bio}</p>
        <p>Username: {data.login}</p>
        <p>Location: {data.location}</p>
        <p>Public Repos: {data.public_repos}</p>
      </div>
    )
  }
</script>
```

What Axios enables us to do is to use the exact same promise syntax as fetch - but instead of using our first then callback to manually determine whether the response is okay and throw an error, Axios takes care of that for us.

# Fetch Data in React Using async / await syntax

In ES7, it became possible to resolve promises using the `async / await` syntax. Async/await is a relatively new way to write asynchronous code in Javascript.

The benefit of this is that it enables us to remove our `.then()`, `.catch()`, and `.finally()` callbacks, promises andsimply get back our asynchronously resolved data as if we were writing synchronous code without promises altogether.

Why `async/await` ? Well, simply put, async/await allows us to write asynchronous code in a synchronous manner. The one thing you need to know about async functions is that; they always returns a promise.

We have to be aware of the fact that when we use `useEffect` the effect function (the first argument) cannot be made an `async` function.

To create an `async` function all we need to do is add the async keyword before the function definition, we would be converting our previous example to an async/await syntax:

```html
<script>
  import React, { useState, useEffect } from 'react'
  import axios from 'axios'
  export default function App() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
      getData()
    }, [])

    async function getData() {
      await axios('https://api.github.com/users/jideabdqudus')
        .then(response => {
          setData(response.data)
        })
        .catch(error => {
          console.error('Error fetching data: ', error)
          setError(error)
        })
        .finally(() => {
          setLoading(false)
        })
    }

    if (loading) return 'Loading...'
    if (error) return 'Error!'
    return (
      <div style={{ textAlign: 'center' }}>
        <img src={data.avatar_url} alt="Avatar" height="100" />
        <p>Name: {data.name}</p>
        <p>Bio: {data.bio}</p>
        <p>Username: {data.login}</p>
        <p>Location: {data.location}</p>
        <p>Public Repos: {data.public_repos}</p>
      </div>
    )
  }
</script>
```

In summary, `async/await` is a cleaner syntax to write asynchronous Javascript code. It enhances readability and flow of your code.

Things to keep in mind while using `async/await`:

- Async functions return a promise.
- Await can only be used inside an async block.
- Await waits until the function("promise") resolves or rejects.


# How to Fetch Data in React Using a Custom React Hook (useFetch)

Over time, you may realize that it gets a bit tedious and time-consuming to keep writing the useEffect hook with all of its boilerplate within every component in which you want to fetch data.

To cut down on our reused code, we can use a custom hook as a special abstraction, which we can write ourselves from a third party library (like we are here, using the library `react-fetch-hook`). 

useFetch is an isomorphic fetch hook. That means it works with SSR (server side rendering).

A custom hook that makes our HTTP request allows us to make our components much more concise. All we have to do is call our hook at the top of our component.

```html
<script>
  import React from "react";
import useFetch from "react-fetch-hook"

export default function App() {
  const { isLoading, error, data } = useFetch("https://api.github.com/users/jideabdqudus");
  if (isLoading) return "Loading...";
  if (error) return "Error!";

  return (
    <div style={{ textAlign: "center" }}>
      <img src={data.avatar_url} alt="Avatar" height="100" />
      <p>Name: {data.name}</p>
      <p>Bio: {data.bio}</p>
      <p>Username: {data.login}</p>
      <p>Location: {data.location}</p>
      <p>Public Repos: {data.public_repos}</p>
    </div>
  );
}
</script>
```

# Conclusion

The 4 different patterns shown above are great ways of consuming APIs but fetch is mainly used when building relatively small applications and Axios/useFetch when building large applications for scalability reasons. 

I hope you enjoyed reading this guide, I'll be happy to answer any comment or questions you leave down below!

Check out more articles on my [medium page](https://medium.com/@abdulqudusao)