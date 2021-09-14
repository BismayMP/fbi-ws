FROM node:14-alpine3.14 as build
WORKDIR /usr/src/app
ENV PORT 80
COPY package.json ./
COPY tsconfig.json ./
COPY . .
RUN npm install
RUN npm run build
## this is stage two , where the app actually runs
FROM node:14-alpine3.14
ENV NODE_ENV production
ENV PORT 80
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install --only=production
COPY --from=build /usr/src/app/build ./build
EXPOSE 80
CMD [ "node", "./build/index.js" ]