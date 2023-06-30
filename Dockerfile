FROM node:slim

WORKDIR app

RUN npm install -g pnpm

COPY . /app/

RUN pnpm i

RUN pnpm build

EXPOSE 7744

CMD ["pnpm", "start"]