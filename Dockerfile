# 构建阶段
FROM node:18.17.0-alpine AS builder

WORKDIR /app

# 复制依赖文件
COPY package*.json ./
COPY tsconfig.json ./
COPY next.config.mjs ./
COPY postcss.config.mjs ./
COPY tailwind.config.js ./
COPY components.json ./

# 安装依赖
RUN npm install

# 复制源代码
COPY app ./app
COPY components ./components
COPY lib ./lib
COPY hooks ./hooks
COPY public ./public
COPY styles ./styles

# 构建应用
RUN npm run build

# 运行阶段
FROM node:18.17.0-alpine AS runner

WORKDIR /app

# 从构建阶段复制必要文件
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.mjs ./

# 仅安装生产环境依赖
RUN npm install --production

# 设置环境变量
ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

# 启动应用
CMD ["npm", "start"]