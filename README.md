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
