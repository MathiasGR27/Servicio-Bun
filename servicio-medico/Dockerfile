FROM oven/bun
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install
COPY . .
EXPOSE 3002
CMD ["bun", "index.ts"]