
# Udagram Image Filtering Microservice

## Local Development

You'll need to create a new node server. Open a new terminal within the project directory and run:

1. Initialize a new project: `npm i`
2. Run the development server with `npm run dev`
3. Build the app for deployment using `npm run build`

Changes are made to *dev* branch and then merged back into *master*

## AWS Elastic Beanstalk Deployment
A production build `Archive.zip` is created under folder `/www` which is configured in `.elasticbeanstalk/config.yml` under the `deploy.artifact` property. The elastic bean stalk app was first initialized using `eb init` and a new environment was created using the `eb create` command and finally, subsequent modifications to the application code during development were deployed  using `eb deploy`.<br>
**URL**: http://udagram-diliprk-dev.eu-central-1.elasticbeanstalk.com/

Try the following query commands to see the various responses:
1.) ```http://udagram-diliprk-dev.eu-central-1.elasticbeanstalk.com/filteredimage?image_url=https://img.theweek.in/content/dam/week/review/automobiles/2017/image/ducati_super_sport.jpg```<br>
2.) ```http://udagram-diliprk-dev.eu-central-1.elasticbeanstalk.com/filteredimage?image_url=www.google.com```<br>
3.) ```http://udagram-diliprk-dev.eu-central-1.elasticbeanstalk.com/filteredimage```
