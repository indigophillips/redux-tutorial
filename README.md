# React Redux Stories

User stories for practicing React & Redux.


## Setup

Clone [`boilerplate-react-redux`](https://github.com/dev-academy-challenges/boilerplate-react-redux) and install the dependencies.

[assistance]

Enter the commands below in your terminal:

```shell
git clone https://github.com/dev-academy-challenges/boilerplate-react-redux
mv boilerplate-react-redux redux-practice
cd redux-practice
npm install
npm start
```

If you would like to push changes back to your own repository, you'll need to create an empty repository in your GitHub and [change](https://help.github.com/articles/changing-a-remote-s-url/) the `origin` remote to point to that repo:

```shell
git remote set-url origin https://github.com/YOUR-USERNAME/redux-practice
```


## User stories

### _As a user, I want to enter a word or phrase and have it displayed in a list so that I can keep track of all my words._

[assistance]

 + This one is done for you! But take a look at the code anyway. Make sure you understand how it works. Here are some questions to test your understanding:
   - What's the name of the only _action creator_? [answer] `addWord`
   - What's the name of the only _reducer_? [answer] `words`
   - Is Redux used in the _containers_ or the _components_? [answer] containers
   - Which function in `containers/AddWord.jsx` is dispatching the action? [answer] `submitWord`, which is the event handler

### _As a user, I want to enter the URL of an image and have it display as an image on the page so that I can save all my cute animal pictures._

[assistance]

 + Here's an opportunity to practice everything in the previous user story. You'll need to:
   - create a new action creator in `actions/index.js`
   - create a new reducer in `reducers/images.js`
   - add the reducer to the `combineReducers` call in `reducers/index.js`
   - create `Images` and `Image` components
   - create an `ImageContainer` container
   - create an `AddImage` component to enter the URL


### _As a user, I want to click a button next to any word and delete it from the list so that I can remove any mistakes I make._

 - You'll need a new action creator and a modified reducer
 - You'll probably need to add `mapDispatchToProps` in `WordContainer`. Look at the [Redux Basics Tutorial](http://redux.js.org/docs/basics/UsageWithReact.html) if you get stuck.

### _As a user, I want to click a button next to any image and delete it from the list so that I can get rid of pics that just aren't cute anymore._


### _As a user, I want to filter words based on letters I type so that I can find the word I'm looking for._

### _As a user, I want to attach a description to each image so that I can... describe it._

### _As a user, I want to attach meta information in the form of one-word tags to each image so that I can classify it._

### _As a user, I want to filter the list of images by tag so that I can see only some of my gallery at a time._
