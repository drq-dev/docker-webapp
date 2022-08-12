FROM node:18.7.0-alpine

USER node
WORKDIR /home/node

COPY --chown=node:node ./package.json ./package.json
COPY --chown=node:node ./package-lock.json ./package-lock.json

RUN npm install --production

COPY --chown=node:node . .
CMD [ "node", "src/app.js" ]