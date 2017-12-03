# github-flow

> Simple responsive web app with a 3 step form.

![](https://i.imgur.com/o2760Lm.jpg)

## What came up from the assignment?

Based on the task - a workflow with 3 steps, fetching Gihub data - I came up with the idea of an web app to help developers to apply to Homeday open positions (so [Inception](https://is.gd/nKha1M), right?). This ideia delivered the context I needed to complete the task.

> Most of the used content came from the actual [jobs page](https://www.homeday.de/en/jobs/).

The page structure has been designed as follows:

**1. Intro**

It opens with a beautiful photo. It delivers `webp` or `jpg` depending on the browser capabilities. Then, two simple text paragraphs.

**2. Topics**

To make this section more dynamic, I've included four random topics, mixing icons and text.

**3. Workflow**

A three step form. It starts asking the Github username. As the API delivers the user fullname, it made sense to move it before anything else.

I came up with an animation upon Github's Octocat based on old 30s cartoons characters (inspired by [Cuphead](https://www.youtube.com/watch?v=ujkFlNkXMu4) game) when they are stuck in a position, waiting for something to happen. Simple, but friendly.

![](https://i.imgur.com/eafFbzN.gif)

There's a debounce method to fetch the data automatically, when the user stops writing. If it got something, a 3D flip animation reveils the real person's avatar and then, the user is allowed to go on.

The first and last name are filled automatically based on Github's API response. The user is allowed to edit this information, though. It continues with a simple e-mail validation and a checkbox, as requested.

> Every input field has inline validation. It's a feature of the `<smart-input>` component that I developed. It also has those nice floating labels, from Material Design. For this project, I designed a exclusive custom checkbox component, `<check-input>` that works like a charm.

![](https://i.imgur.com/OjAYsGH.png)

For validation purposes, a tooltip shows up present the first error found. It fires when the user tries to go to the next step.

If we got everything we need, a simple success message is presented at the final step.

> The workflow has different animations for desktop and mobile. On mobile, it moves like a carousel. On desktop, the avatar moves denoting which of the three steps is active.

## Technology

This assignment has been developed with [Vue.js](https://vuejs.org/) and [Nuxt.js](https://nuxtjs.org/). I'm been using these frameworks for quite a while and I'm very confortable with them. [Vuex](https://vuex.vuejs.org/en/index.html) has been used to manage the application's state.

Used open source libraries:

- **axios** for API requests.
- **vue-text-mask** (part of smart-input component).

About styles:

- **Sass** (with several helpers stylesheets).
- Developed for **mobile first**.
- Colors, fonts and icons based on current Homeday website to match its visual identity..

Worth mentioning that I've...

- Used ES6 on the whole project.
- Broke down everything into small components so it would be easier to maintain.
- Wrote down all assignment requirements in a [Kanban board](https://github.com/josantana/github-flow/projects) to ease my development process.

![](https://i.imgur.com/TJPAi4R.png)

## How to install

``` bash
# clone this repository
$ git clone https://github.com/josantana/github-flow.git

# go to project's folder
$ cd ./github-flow

# install dependencies
$ npm install # or yarn install
```

## Usage

``` bash
# serve this project locally with hot reload
$ npm run dev # or yarn dev
```

Open [localhost:3000](http://localhost:3000) on your browser.
