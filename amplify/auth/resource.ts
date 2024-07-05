import { defineAuth, secret  } from "@aws-amplify/backend";

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    externalProviders: {
      google: {
        clientId: secret('GOOGLE_CLIENT_ID'),
        clientSecret: secret('GOOGLE_CLIENT_SECRET'),
        scopes: ['email'],
      },
      callbackUrls: [
        'http://localhost:3000/', 'https://main.d3k27ywis1zirg.amplifyapp.com/'
      ],
      logoutUrls: ['http://localhost:3000/', 'https://main.d3k27ywis1zirg.amplifyapp.com/'],
    },
    email: true,
  },
});
