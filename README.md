# Spread Eagle

☞ [Figure Skating Score Sheet 2022-2023](https://spread-eagle.vercel.app/2022-2023)
☞ [Figure Skating Score Sheet 2023-2024](https://spread-eagle.vercel.app/2023-2024)

## How to develop

### Requires

- [Node.js](https://nodejs.org/) (version ☞ [.node-version](.node-version))

### Installation

Run `npm ci` to install dependencies.

### Start

Run `npm run dev` to start the development server on localhost:3000.

### Other commands

- `npm run lint` - to find problems
- `npm run fix` - to fix problems
- `npm run test` - to test
- `npm run checkall` - to run `npm run lint` and `npm run test`

## How to track page views in Google Analytics (GA4)

1. Set the Google Analytics measurement ID to the environment variable `NEXT_PUBLIC_GA_MEASUREMENT_ID`.
1. Disable the "Page changes based on browser history events" option in the Google Analytics console.
