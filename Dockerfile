FROM node:20-alpine as base
WORKDIR /app
COPY . /app
RUN yarn install
RUN yarn build

FROM node:20-alpine as app
WORKDIR /app
COPY --from=base /app/dist ./dist
COPY --from=base /app /app
RUN yarn install --production --frozen-lockfile

EXPOSE 4442
CMD ["yarn", "start"]