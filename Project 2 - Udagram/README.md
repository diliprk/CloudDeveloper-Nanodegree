# Udagram Image Filtering Microservice

## Development

You'll need to create a new node server. Open a new terminal within the project directory and run:

1. Initialize a new project: `npm i`
2. Run the development server with `npm run dev`
3. Verify changes by running the test suite `npm test`

Changes are made to *development* branch and then merged back into *master*

## Deployment

A production build is created under folder /www and this is configured
in `.elasticbeanstalk/config.yml` under the `deploy.artifact` property

```sh
npm run clean
npm run build
eb deploy
```

## Additions

I've introduced some extra features into this project

### Tests

Mocha/Chai test cases have been setup to test the `/filteredimage` endpoint
and are also configured to use TypeScript

### Custom Domain Name

Uses an AWS domain name of ```udaimagefilter```
