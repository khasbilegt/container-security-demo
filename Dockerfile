FROM node:alpine AS base

FROM base AS build
WORKDIR /app
COPY . /app
RUN npm i -g pnpm@10.16.1
RUN pnpm i --frozen-lockfile
RUN pnpm build

FROM base
WORKDIR /app
COPY --from=build /app/dist ./
EXPOSE 3000
USER node
ENV NODE_ENV=production
CMD ["node", "index.js"]
