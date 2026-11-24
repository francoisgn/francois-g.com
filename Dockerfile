# Dev and test container for the site (OrbStack / Docker on the Mac): `docker compose up dev` then
# http://localhost:4321, or `docker compose run --rm check` for the same checks as CI.
# node:24-bookworm-slim (LTS); bump the tag and digest together.
FROM node:25-bookworm-slim
WORKDIR /site
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund
COPY . .
USER 1000:1000
EXPOSE 4321
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
