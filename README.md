# Textual Fractals

This is a web-based GUI application designed to aid in the visualization of [structural scriptural interpretation](https://web.archive.org/web/20221127082627/https://thesymbolicworld.com/articles/the-cosmic-chiasmus/).

## Local Development

To develop this software locally, you will need:

-   [Node.js 18](https://nodejs.org/en/)
-   [PNPM](https://pnpm.io)
-   [Git](https://git-scm.com/)

You should also have general familiarity with the languages and libraries used, such as [Typescript](https://www.typescriptlang.org/) and [React](https://reactjs.org/).

Other important libraries used include:

-   [Vite](https://vitejs.dev/)
-   [TailwindCSS](https://tailwindcss.com/)
-   [Framer Motion](https://www.framer.com/motion/)
-   [Prettier](https://prettier.io/)
-   [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## Testing and Validation

The repository includes a number of scripts to ensure that code quality meets certain standards.

-   Linting: `pnpm lint`
-   Testing: `pnpm test`

These scripts will run automatically on pushes or pull requests to the `master` branch via [Github Actions](https://docs.github.com/en/actions).

## Deployment

Pushes to the repository will be automatically deployed to [Vercel](https://vercel.com). The `master` branch corresponds to production, while other branches will have a preview deployment.

## Contribution Workflow

To contribute to this repository, please follow the [Git flow](https://docs.github.com/en/get-started/quickstart/github-flow) by creating a descriptive branch, and a pull request with your changes so that they can be reviewed and validated before merging.

## License

AGPLv3
