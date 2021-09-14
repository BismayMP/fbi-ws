# Sweettech WebSockets

To make the test easy the .env file will be in the repository, this is not good practice but since
this is a test and there is no sensitive information in the file I'll share it in git, is valid to say that
the API still needs a lot of validations to avoid errors and handle the ones who may appear

# Getting Started
 
 To install all the dependencies in the root of the project run ``` npm run install ```
 Then run ``` npm run dev ``` for running the development envairoment
 If you want to run run the app for production ``` npm run prod ``` this command will build 
 the app and start the production server

## Docker
In order to run the app in a docker container, you will have to previously have docker installed.
First, you need to build the image with the following command ``` docker build . -t [image-name] ```
after the builds completes use the ``` docker run -p 80:80 [image-name] ``` to run the image in a 
new container, then you can start making request to localhost:80

## WebSocket

The API is configure to add as much parameters as it recive as json to the fbi api, examples of goo request are:


```# still works if you remove fields
 
 {
   "page": 1,
   "field_offices": "miami", 
   "sex": "male" 
 }

```

```#Use the @id value is also available, here is an example 
 {
    "id": "https://api.fbi.gov/@wanted-person/4c1eb3132d364884be9252f0091088d6"
 }
```


## Caching

Will improve the response time by caching the fbi api response. An option for that can be [https://www.npmjs.com/package/node-fetch-cache]

## Security

Adding authentication will be a way to protect some of the services, a third-party service can be used (firebase, cognito, fusionauth, etc) or 
setting up a local auth system, using some tool for that like passport or do it manually with encrypted tokens, jwt stuff like that,
other option depending on the control you have over the customers who use those services is making an IP whitelist for that.

## Logging

I like the way pm2 [https://pm2.keymetrics.io/] works, I'll configure it to keep track of the logs (this tool let you set up 
what you want to log and where), I'll definitely want to keep track of errors, the console can be helpful as well.
