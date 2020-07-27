---
title: Setting up Redux with React
tags: [javascript, redux, react, state]
date: 2020-07-27T05:25:44.226Z
path: blog/react-redux
cover: ./1.png
excerpt: Explaining how you can use Redux for state management with React.
---

A lot of React developers deal with state management while building there Applications, while some manage the states right on the App component, when building medium or large scale applications it's a better practice to use a State management system like Context or Redux.

This guide shows how to setup and use Redux while dealing with state management in your react application.

# What is Redux?

Redux is a predictable state container for JavaScript apps.

It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.

In layman's term `It's a state management system for javascript apps.`

I personally recommend redux for medium/large scale applications and context for small applications.

# How does Redux work?

1. It has a single source of truth called `store`. The global state of your application is stored in an object tree within a single store. This makes it easy to create universal apps, as the state from your server can be serialized and hydrated into the client with no extra coding effort.
   <br/> <br/>

2. State is read only, hence, the only way to change the state is to emit an `action`, an object describing what happened.
   <br/><br/>

3. To specify how the state tree is transformed by actions, you write pure `reducers`.

# Getting our codes running

- First step is installing our dependencies.
  <br/> <br/>
  `npm i redux react-redux redux-thunk redux-devtools-extension`
  <br/> <br/>

- Create `store.js` file in src folder

```html
<script>
  import { applyMiddleware, createStore } from 'redux'
  import { composeWithDevTools } from 'redux-devtools-extension'
  import thunk from 'redux-thunk'
  import rootReducer from './reducers'

  const initialState = {}
  const middleware = [thunk]
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  )
  export default store
</script>
```

<br/><br/>

- Update `App.js` with your store file

```html
<script>
  import { Provider } from 'react-redux'
  import store from './store'

  const App = () => {
    return (
      <Provider store={store}>
        <Fragment>
          <Home />
        </Fragment>
      </Provider>
    )
  }
</script>
```

- Create a reducers folder with file `index.js`

```html
<script>
  import { combineReducers } from 'redux'
  import profileReducer from './profileReducer'

  export default combineReducers({ profileReducer: profileReducer })
</script>
```

All subsequent reducers would be created in the reducers folder and added to combineReducers

- Create Actions folder in src

- Create `Types.js` file in Actions folder

```html
<script>
  export const ADD_PROFILE = 'ADD_PROFILE'
</script>
```

- Create `profileActions.js` file in Actions folder (profileActions because we are trying to create an action that updates a profile form)

```html
<script>
  import { ADD_PROFILE } from './Types'

  export const addProfile = edit => {
    return {
      type: ADD_PROFILE,
      payload: edit,
    }
  }
</script>
```

- Create `profileReducer.js` file in reducers folder

```html
<script>
  import { ADD_PROFILE } from '../actions/Types'

    const initialState = {
        users:[
            {
                id:1,
                name:"John Doe"
            }
        ]
    }

    export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROFILE:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }

</script>
```

