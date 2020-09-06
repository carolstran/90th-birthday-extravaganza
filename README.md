# 90th Birthday Extravaganza 👴🏻

A little website that shows birthday messages from all around the globe to my Grandpa. He turned 90 earlier this month!

![Screenshot of the main page. Below the top-level navigation, you see a banner with the number of messages, the message content and a contact email. Underneath that is a Previous and Next button.](https://user-images.githubusercontent.com/26869552/92330534-c677d680-f06f-11ea-97dc-71e7ccf38d5f.png)

## What's in this README

- [Instructions for running locally](#instructions-for-running-locally)
- [Key features](#key-features)
- [What it's built with](#what-its-built-with)
- [Known (but requested) issues](#known-but-requested-issues)
- [Future improvements](#future-improvements)

## Instructions for running locally

To run this website locally, you first need to clone the project and move into it from your terminal:

```bash
git clone git@github.com:carolstran/90th-birthday-extravaganza.git
cd 90th-birthday-extravaganza
```

Next, install the dependencies:

```bash
yarn
```

> Note: I'm using [Yarn](https://yarnpkg.com/) as my primary package manager but you could also use [NPM](https://www.npmjs.com/).

Then execute the following command to launch the survey:

```bash
yarn start
```

Finally, if you visit `localhost:3000` - you should be able to see the birthday messages 🎊

## Key features

- Ability for my Grandpa to navigate between messages.
- Counter to show what message he's on and how many there are total.
- Email of the sender is displayed so he can get in touch and say thank you.
- Page with a recording of his birthday Zoom call with our family.
- Page with video messages that were sent in by family members.
- Top-level navigation to go between these pages.
- The entire experience ([with one exception](#known-but-requested-issues)) is WCAG 2.0 Level AA accessible.

## What it's built with

- [Create React App with TypeScript](https://create-react-app.dev/docs/adding-typescript/)
- [Reach router](https://reach.tech/router/)
- State management with [React Hooks](https://reactjs.org/docs/hooks-reference.html) and the [Context API](https://reactjs.org/docs/context.html)
- [Chakra-UI](https://chakra-ui.com/) design system with the default theme
- [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) for testing components
- [canvas confetti](https://github.com/catdad/canvas-confetti) for a little flare 🎉
- Deployed with [Netlify](https://www.netlify.com/) ([see the live site](https://happy-90th.netlify.app/))

_**Yes, it's over-engineered but I needed something to show in interviews 😆**_

## Known (but requested) issues

- Red color used for buttons doesn't meet Level AA contrast requirements (but my Grandpa chose it).
- There's no local storage implemented - so if you leave the page and come back, you'll start from the first message again. Apparently this is how he wanted it 🤷🏼‍♀️

## Future improvements

_Code quality:_

- [x] General clean up after adding the video page ([e10246e](https://github.com/carolstran/90th-birthday-extravaganza/commit/e10246e5e5aba5fff01c55c133db1067a4150f47)).
- [ ] Responsive video size.
- [ ] Move `confetti` function out of context.

_Testing:_

- [ ] Add more test cases, particularly that address state changes.
- [ ] Refactor testing setup so you don't need to import `@testing-library/jest-dom` into every file or wrap every component instance in `ThemeProvider`.
- [x] Update and add new tests for new video-related components ([d0a01e0](https://github.com/carolstran/90th-birthday-extravaganza/commit/d0a01e01d1dcc7c89ce09d955f0dac0427caaeda))
- [ ] Fix TypeError that occurs when testing elements using canvas-confetti.

_Accessibility:_

- [ ] Disable confetti when reduced motion preferences are set.
- [ ] Improve screen reader experience, including potentially changing the `Heading` elements in the `Message` component to `Text`.
- [x] Improve spacing on mobile navigation ([64d295d](https://github.com/carolstran/90th-birthday-extravaganza/commit/64d295dc8496fec9dbc54a1f4f3988d71b99ec54)).

_Data:_

- [ ] Anonymize data in the `birthdayMessages.js` file or hide completely.
- [ ] Use the Wix API to automatically fetch any new messages and add them to the beginning of the `birthdayMessages` array.
- [ ] Add a `New` badge to new messages he hasn't seen yet.
- [x] Disable search engine indexing ([e5dd92e](https://github.com/carolstran/90th-birthday-extravaganza/commit/e5dd92e84ef2f6076e90d0cacd29fbcb189051ae)).
- [ ] Make the site password protected.
