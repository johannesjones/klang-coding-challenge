# Klang Coding Challenge

This project is a Next.js application that demonstrates various rendering methods including Static Generation (SSG), Server-Side Rendering (SSR), and Incremental Static Regeneration (ISR). The project also includes an API route that generates random strings, and a Cypress test suite for end-to-end testing.

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
- [Contributing](#contributing)
- [License](#license)

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

- app/: Contains the application's main pages and components.
- app/static-page/: Static Generation (SSG) page.
- app/ssr/: Server-Side Rendering (SSR) page.
- app/isr/: Incremental Static Regeneration (ISR) page.
- app/api/random-string/route.ts: API route to generate random strings.
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
