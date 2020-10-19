### Install MongoDB on Mac

- Install Homebrew form `brew.sh`
- Install MongoDB using Homebrew

        brew install mongodb

- Create a directory for MongoDB to store its data

        mkdir -p /data/db

- Set the permission for the data directory you created

        sudo chown -R `id -un` /data/db

**_In Mac OS Catalina the root folder is no longer writable. So, changed the directory to `/System/Volumes/Data/data/db` and run MongoDB daemon as `mongod --dbpath=/Users/user/data/db`_**

### To check the status of mongodb in the shell use

        mongo

### Start MongoDB server on mac

        brew services start mongodb-community

### Using MongoDB

https://zellwk.com/blog/install-mongodb/

### MongoDB Compass

- Client application to connect to a MongoDB server
- Install it from mongodb.com

mongod --dbpath=/Users/zahid/data/db

### Import data into a MongoDB database

    - To import JSON data

        mongoimport --db databaseName --collection collectionName --file fileName --jsonArray
