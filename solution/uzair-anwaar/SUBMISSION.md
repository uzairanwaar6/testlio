Setup Instructions
Please follow the instructions below to run the application.

Install Packages
Run the following command to install all the required pacakges.
npm i

Create Database
Create MySQL database in MySQL Server. You can provide any name you like.

Modify .env file
You need to adjust the DB configuration in the .env file. Please open .env file and adjust all the fields that are prefixed with DB with respect to DB configuration.

Run Migration
Run the following command. This will create all the DB tables required.
npm run migrate

Run Seeder
There are 2 seeders to create some initial data for Demo purposes. Please run the following command.
npm run seed

Seed additional data
If you want some other data for your testing purposes, you can use the data.sql file provided in the docs folder. The script will create some dummy data for testing purposes. The data is related to issues only.

Start the Application
Run the following command to start the application.
npm run start
You can now visit to the "http://localhost:8080/docs" url to see the swagger documentation for the API

Start testing using Postman
The Postman collection for the API and the Postman environment files are provided in the docs folder. Import the collection and environment files into Postman.

After the import you need to adjust the "BaseUrl" variable in the environment. Please set the Current Value field as "http://localhost:8080/". Please keep the forward slash at the end  of the URL to avoid 404 issue during api calls. You can adjust the port as needed.

You will also need to set value for the "clientId" variable. The clientId is passed in every request. You can get the clientId from the client_id column of the clients table.

Once you are done, you just need to call the Login api under User folder. This will retrieve the auth token form the API. After that you can call any API. The auth token and client_id will be passed automatically.