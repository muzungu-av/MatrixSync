FROM node:18.19-alpine AS back-api-img

RUN mkdir -p /app
WORKDIR /app/

COPY ./backend-api/dist/ ./dist
COPY ./backend-api/node_modules/ ./node_modules

# Перекомпилируем bcrypt для обеспечения совместимости с Alpine
# RUN npm rebuild bcrypt --build-from-source \
#     && apk del python3 make g++
# RUN yarn global add ts-node
# RUN mkdir -p /app/shared_volume \
#     && ts-node /app/dist/auth/init-user.mjs > /app/shared_volume/hashed_pass.txt

EXPOSE 4001
CMD node dist/main