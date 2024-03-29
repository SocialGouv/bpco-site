FROM node:16-alpine as builder

RUN chown -R 1000:1000 /home/node && \
  chmod -R 755 /home/node && \
  chown 1000:1000 /tmp && \
  chmod 1777 /tmp && \
  mkdir /app && \
  chown 1000:1000 /app

RUN apk add --no-cache gcc autoconf automake build-base libpng-dev nasm

USER 1000
WORKDIR /app

COPY yarn.lock .yarnrc.yml ./
COPY --chown=1000:1000 .yarn .yarn
RUN yarn fetch --immutable && yarn cache clean

COPY --chown=1000:1000 . .

ARG NEXT_PUBLIC_MATOMO_SITE_ID
ENV NEXT_PUBLIC_MATOMO_SITE_ID=$NEXT_PUBLIC_MATOMO_SITE_ID

ARG NEXT_PUBLIC_MATOMO_URL
ENV NEXT_PUBLIC_MATOMO_URL=$NEXT_PUBLIC_MATOMO_URL

ENV NODE_ENV=production

RUN yarn build-static

FROM ghcr.io/socialgouv/docker/nginx:8.0.2

COPY --from=builder /app/out /usr/share/nginx/html
