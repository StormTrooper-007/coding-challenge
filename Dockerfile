FROM node:21-alpine AS BUILD_IMAGE

WORKDIR /app

COPY package*.json ./


RUN npm install

COPY . .

RUN npm run build


FROM node:21-alpine AS PRODUCTION_IMAGE

WORKDIR /app

COPY --from=BUILD_IMAGE /app/dist/ /app/dist/
EXPOSE 5173 

COPY package*.json ./
COPY vite.config.ts .

RUN npm install typescript 

CMD ["npm", "run", "preview"]