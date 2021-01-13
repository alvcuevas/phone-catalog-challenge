## Phone Catalog Challenge

### Run application

1. Install client dependencies: 
    
    `cd client && npm install`

2. Install server dependencies: 

    `cd server && npm install`

3. Run app on browser: 

    `cd client && npm start`

### Run tests

1. Execute all client tests:

    `cd client && npm run test`
### Dockerize application

1. Build image

    `docker build -t phone-challenge-image .`

2. Run image on container

    `docker run -it -p 5000:5000 --name phone-challenge-app phone-challenge-image`

3. Run app on browser

    `http://localhost:5000`