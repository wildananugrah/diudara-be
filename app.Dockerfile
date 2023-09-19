FROM oven/bun
# FROM node:18-alpine

WORKDIR /app
COPY ./ .
RUN bun install
RUN bun prisma generate
RUN bun prisma migrate dev --name user_email_unique
EXPOSE 3000
CMD ["bun", "--hot", "run" ,"index.js"]
# CMD ["npm", "run" ,"dev"]