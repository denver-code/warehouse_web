This is our ZITADEL [Next.js](https://nextjs.org/) template. It shows how to authenticate as a user and retrieve user information from the OIDC endpoint.

## Deploy your own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fzitadel%2Fzitadel-nextjs&env=NEXTAUTH_URL,ZITADEL_CLIENT_ID,ZITADEL_CLIENT_SECRET,ZITADEL_ISSUER,NEXTAUTH_SECRET&envDescription=Navigate%20to%20your%20ZITADEL%20cloud%20application%20and%20copy%20the%20required%20information.%20Provide%20a%20random%20value%20for%20ZITADEL_CLIENT_SECRET%20and%20NEXTAUTH_SECRET&project-name=zitadel-nextjs&repo-name=zitadel-nextjs&redirect-url=https%3A%2F%2Fzitadel.cloud)

## Getting Started

First, to install the dependencies run:

```bash
yarn install
```

then create a file `.env` in the root of the project and add the following keys to it.
You can find your Issuer Url on the application detail page in console.

```
NEXTAUTH_URL=http://localhost:3000
ZITADEL_ISSUER=[yourIssuerUrl]
ZITADEL_CLIENT_ID=[yourClientId]
ZITADEL_CLIENT_SECRET=[randomvalue]
NEXTAUTH_SECRET=[randomvalue]
```

next-auth requires a secret for all providers, so just define a random value here.
then open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
