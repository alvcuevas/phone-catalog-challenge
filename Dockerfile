FROM node:14 AS client
WORKDIR /usr/src/app
COPY client/ ./client/
RUN cd client && npm install && npm run build

FROM node:10 AS server
WORKDIR /root/
COPY --from=client /usr/src/app/client/build ./client/build
COPY server/ ./server/
RUN cd server && npm install

EXPOSE 5000

CMD ["node", "./server/index.js"]
