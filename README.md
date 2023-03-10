# Proustibat website

[![Visit](https://img.shields.io/badge/visit-site-2fa4cf.svg)](https://proustibat.vercel.app/)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Prerequisites

Be sure [Node](https://nodejs.org/) and [NPM](https://www.npmjs.com/) are installed.

If you work on multiple projects I recommend to use [NVM](https://github.com/nvm-sh/nvm) to manage different node version.
Since this project has a `.nvmrc` file, you can just run `nvm use` to be sure to use the right version of Node.

## Installation

```$xslt
git clone git@github.com:proustibat/ntscf-mtrnt.git
cd ntscf-mtrnt
npm i
```

## Development

First, run the development server:

```bash
npm run dev
```

## Linting

I used Prettier in addition to Eslint. You can have a look on configuration files to know more about the applied rules.

```bash
# runs eslint with --fix option and prettier with --write option
npm run lint
```

## Production

### Build a production version

```bash
npm run build
```

This is what we are supposed to run on a CI/CD pipeline. It builds assets depending on pages (SSG, SSR...)

### Serve the production version

After you built the production version, you can serve it with the following npm script:

```bash
npm run start
```

## Deployment

### Project

The project is deployed at this url: [https://proustibat.vercel.app/](https://proustibat.vercel.app/).
I used the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) for that.

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---

## Learn More

The project uses Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
