# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies before copying application code to leverage Docker cache
COPY package*.json ./
RUN npm ci

# Copy the rest of the app and build
COPY . ./
RUN npm run build

# Runtime stage
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/app ./app
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/tsconfig.json ./
COPY --from=builder /app/next-env.d.ts ./

EXPOSE 4444
CMD ["npm", "start"]
