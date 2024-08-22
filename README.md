# Klang Challenge

This project is a Next.js application that demonstrates various rendering methods including Static Site Generation (SSG), Server-Side Rendering (SSR), and Incremental Static Regeneration (ISR). The project also includes an API route that generates a random string and a page that consumes it and displays the created string. Unit tests are in place for the API route plus the page that displays its returned value aswell as for the static page. It also contains a Cypress test suite for end-to-end testing for all pages and navigation except the random-string page (explained later), especially for the ISR and SSR pages, since they were hard to test with Jest due to their async nature by default (more on that later).

## Table of Contents

- [Project Setup](#project-setup)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Rendering Methods](#rendering-methods)
  - [Static Generation (SSG)](#static-generation-ssg)
  - [Server-Side Rendering (SSR)](#server-side-rendering-ssr)
  - [Incremental Static Regeneration (ISR)](#incremental-static-regeneration-isr)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Deployment](#deployment)
- [Known Issues](#known-issues)

## Project Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (v6 or later) or [Yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/johannesjones/klang-challenge.git
    cd klang-coding-challenge
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

    or if you are using Yarn:

    ```bash
    yarn install
    ```

## Running the Project

### Development

To start the development server:

```bash
npm run dev
```

This will start the Next.js development server on http://localhost:3000.

### Build

To build the project for production:

```bash
npm run build
```

### Start

To start the production server after building:

```bash
npm start
```

## Project Structure

- __test__ : Contains the tests for the api-route, the random-string page and the static page.
- app/: Contains the application's main pages and components.
- app/api/random-string/route.ts: API route to generate random strings.
- app/isr/page.tsx: Incremental Static Regeneration (ISR) page.
- app/random-string/page.tsx: A page that consumes the api-route and displays a random string.
- app/ssr/page.tsx: Server-Side Rendering (SSR) page.
- app/staticp/page.tsx: Static Generation (SSG) page.
- cypress/: Contains Cypress tests for end-to-end testing.

## Rendering Methods

### Static Generation (SSG)

The Static Generation page is pre-rendered at build time. Ideal for content that doesn't change frequently. Located at app/static-page.

### Server-Side Rendering (SSR)

The Server-Side Rendering page is rendered on the server at request time. It fetches data dynamically on each request. Located at app/ssr.

### Incremental Static Regeneration (ISR)

The Incremental Static Regeneration page allows updating static pages after the site is built. It regenerates the page at runtime based on a specified revalidation time. Located at app/isr.

## API Endpoints

### Random String API

- Endpoint: /api/random-string
- Method: GET
- Description: Generates a random string and returns it as a JSON response.

Example response:
```code
{
  "randomString": "f3p2ms"
}
```

### Testing
- Unit-tests are written using Jest.
- End-to-end tests are written using Cypress.

## Running Tests

To run the Unit-tests in Jest:

```bash
npm test
```

To run the Cypress tests:

```bash
npm run dev
npx cypress open
npx cypress run
```

### Deployment

The App is deployed on Vercel: https://klang-challenge.vercel.app/

### Known Issues

As mentioned in the introduction, both sever-side rendered pages isr and ssr are covered with e2e tests (the e2e test for the random-string page wasn't working on GitHubActions only, that's why it's skipped) as it was hard to test them with Jest due to their asynchronous nature. (I left both failed unit tests in the repo though). The official documentation recommends the use of e2e tests for default SSR pages (as of Next.js 13 with the introduction of the App Router) instead, since they are quite new and not supported, yet.
