# Trella Shipments Task

[Live Demo Here](https://trella-shipments.web.app)

This documentation covers

- Get Started
- File Structure
- Stack
- App Features
- Redux Design Pattern
- Theming
- UI Design
  - Design Philosophy
  - Responsiveness
  - Wireframes

## Get Started

To get started you can run the app in development

```sh
git clone https://github.com/ahmsalah/Trella.git
cd Trella
yarn
yarn start
```

Launch the test runner

```sh
yarn test
```

## File Structure

📦src  
 ┣ 📂assets  
 ┣ 📂components  
 ┃ ┣ 📂Component  
 ┃ ┃ ┣ 📜Component.js  
 ┃ ┃ ┣ 📜Component .test.js  
 ┃ ┃ ┗ 📜styles.js  
 ┣ 📂config  
 ┃ ┣ 📜axiosConfig.js  
 ┃ ┗ 📜sentry.js  
 ┣ 📂pages  
 ┃ ┗ 📂Dashboard  
 ┃ ┃ ┗ 📜Dashboard.js  
 ┣ 📂redux  
 ┃ ┣ 📂features  
 ┃ ┃ ┣ 📜index.js  
 ┃ ┃ ┣ 📜shipments.feature.js  
 ┃ ┃ ┗ 📜shipments.feature.test.js  
 ┃ ┗ 📜store.js  
 ┣ 📂routes  
 ┣ 📂theme  
 ┣ 📂utils  
 ┃ ┣ 📂helperFns  
 ┃ ┣ 📂hooks  
 ┃ ┣ 📜ErrorBoundary.js  
 ┃ ┣ 📜NoConnection.js  
 ┃ ┗ 📜snackbar.js  
 ┣ 📜App.js  
 ┣ 📜index.js

- `assets`
  images, fonts, ...etc
- `components`
  All components should be in one folder, with no nesting!
  Each component has its own folder, it contains the jsx component itself as well as styles, tests, storybook, ...etc.
- `config`
  Configuration for axios, sentry, firebase, aws, other sdks, ...etc
- `routes`
  The index file should render all the routes, a paths file could be added as well as a privateRoute wrapper.
- `pages`
  A page is what simply what get passed to routes, each page folder should be same as a component folder
- `theme`
  Scroll below for more details about theming
- `utils`
  Error boundaries, offline internet connection detection, snackbar utilities
  - `hooks`
  - `helperFns`
    utils also includes 2 other folders (custom hooks, and pure helper functions)
- `redux`
  Scroll below for more details about how redux is structured in this project

## Stack

This app is built with React.js, Redux , Redux-saga, Material-UI, Css-in-js, React-Testing-Library & Jest for testing.

## Features

- View all available shipments and assign each one to a driver
- Each shipment card includes
  - Commodity
  - Truck Type
  - Number Of Bids
  - Pickup & destination addresses and their cutoff time & distance on a map
- Filter shipments by location using google maps

## Redux design pattern

┣ 📂redux  
 ┃ ┣ 📂features  
 ┃ ┃ ┣ 📜index.js  
 ┃ ┃ ┣ 📜shipments.feature.js  
 ┃ ┃ ┗ 📜shipments.feature.test.js  
 ┃ ┗ 📜store.js

The way how redux store is structured here is by using the ducks pattern recommended by [redux style guide](https://redux.js.org/style-guide/style-guide#structure-files-as-feature-folders-or-ducks).

> _Co-locating logic for a given feature in one place typically makes it easier to maintain that code. Because of this, **we recommend that most applications should structure files using a "feature folder" approach** (all files for a feature in the same folder) **or the ["ducks" pattern](https://github.com/erikras/ducks-modular-redux)** (all Redux logic for a feature in a single file), rather than splitting logic across separate folders by "type" of code (reducers, actions, etc)_

The project's redux folder includes the store configuration and all the logic (api calls, actions, reducers and sagas) grouped by feature.

## Theming

┣ 📂theme  
 ┃ ┣ 📜generic.theme.js  
 ┃ ┣ 📜index.js  
 ┃ ┣ 📜mixins.theme.js  
 ┃ ┣ 📜muiDefaultProps.theme.js  
 ┃ ┣ 📜muiStylesOverrides.theme.js  
 ┃ ┣ 📜palette.theme.js  
 ┃ ┗ 📜typography.theme.js

Allows for keeping consistency and easy customization for all design aspects of the app.

Imagine that you have to update the border-radius of over a 100 components, instead it should be done with a single line of code.

Material-UI provides a greate api `ThemeProvider`, for customizing its own components or even changing their default props.

Customization here includes palette, typography, mixins, animation keyframes/transitions, shadows, spacing, breakpoints, border-radius and z-index. (This could be done without material-ui as well).

## UI Design

This app is built following [Material Design](https://material.io/design/introduction) Specifications.

And is completely responsive and adapts well to all viewports.

![shipments-phone](https://i.imgur.com/tyus0Em.png 'shipments-phone')

![filter-by-location](https://i.imgur.com/Jts0oSo.png 'filter-by-location')

![shipments-list](https://i.imgur.com/S8I7ote.png 'shipments-list')
