development: 
			cd client && npm start
			cd server/src && nodemon server.js


staging_client: 
			cd client && npm install && npm run build

staging_server:
			cd server/src && npm install && node server.js

