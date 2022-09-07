# Spread Eagle

☞ [Figure Skating Score Sheet 2022-2023](https://spread-eagle.vercel.app/2022-2023)

## How to develop

### Requires

- [Node.js](https://nodejs.org/) (version ☞ [.node-version](.node-version))
- [Yarn](https://yarnpkg.com/)

### Installation

Run `yarn install` to install dependencies.

### Start

Run `yarn dev` to start the development server on localhost:3000.

### Other commands

- `yarn lint` - to find problems
- `yarn fix` - to fix problems
- `yarn test` - to test
- `yarn checkall` - to run `yarn lint` and `yarn test`

## How to track page views in Google Analytics (GA4)

1. Set the Google Analytics measurement ID to the environment variable `NEXT_PUBLIC_GA_MEASUREMENT_ID`.
1. Disable the "Page changes based on browser history events" option in the Google Analytics console.
