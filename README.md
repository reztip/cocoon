# Cocoon

Cocoon is a reddit-like app for kids and young adults. It will be using [Clarifai](www.clarifai.com) to moderate images and videos when users are posting.

# Development Set Up

1. Clone repo
2. Create an account with Clarifai and get an API Key
3. Create a `.env.development` and `.env.production` file in the root directory
4. In those two `.env` files, add a `CLARIFAI_KEY=<YOUR API KEY>` where <YOUR API KEY> is the key provided to you from Clarifai.
5. For creating tables and modifying data, use the [Hasura console](https://cocoon-app.herokuapp.com/console/) to work with database.
6. In the terminal, run the command `gastby develop`
