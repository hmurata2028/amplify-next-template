import { defineAuth, secret  } from "@aws-amplify/backend";

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    externalProviders: {
      google: {
        clientId: secret('22995177481-auud11boss9hvtchq22tdp5g66jg2mog.apps.googleusercontent.com'),
        clientSecret: secret('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'),
      },
      callbackUrls: [
        'http://localhost:3000/', 'https://main.d3k27ywis1zirg.amplifyapp.com/'
      ],
      logoutUrls: ['http://localhost:3000/', 'https://main.d3k27ywis1zirg.amplifyapp.com/'],
    },
    email: true,
  },
});
