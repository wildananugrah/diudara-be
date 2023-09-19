FROM oven/bun
# FROM node:18-alpine

WORKDIR /app
COPY ./ .
RUN bun install
EXPOSE 3000
CMD ["bun", "--hot", "run" ,"index.js"]
# CMD ["npm", "run" ,"dev"]