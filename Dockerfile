FROM node:latest

WORKDIR /app

COPY . /app

RUN npm i -g pnpm@10.16.1 \
    && pnpm i --frozen-lockfile \
    && pnpm build

ENTRYPOINT ["pnpm", "start"]
