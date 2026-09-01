# syntax=docker/dockerfile:1

# ---------- Build stage ----------
# Node version pinned to match the CI workflow (see .github/workflows/ci.yml).
# Not a dependency bump — just the container's own Node runtime.
FROM node:22-slim AS build

WORKDIR /app

# Install deps first so this layer caches across source-only changes.
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build:prod

# ---------- Serve stage ----------
FROM nginx:1.27-alpine AS serve

COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

# angular.json → architect.build.options.outputPath.base = "www"
COPY --from=build /app/www /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s CMD wget -qO- http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
