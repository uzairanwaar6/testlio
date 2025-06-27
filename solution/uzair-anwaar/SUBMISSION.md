# Setup Instructions

Follow the steps below to run the application successfully.

---

## 📦 Install Packages

Run the following command to install all the required packages:

```bash
npm install
```

---

## 🛢️ Create Database

Create a new MySQL database in your MySQL Server. You can choose any name you prefer.

---

## ⚙️ Configure Environment Variables

Update the `.env` file with your database configuration. Specifically, adjust all fields prefixed with `DB_` according to your local setup:

```env
DB_HOST=localhost
DB_PORT=3306
DB_NAME=your_database_name
DB_USER=your_username
DB_PASSWORD=your_password
```

---

## 🛠️ Run Migrations

Execute the following command to create all the required database tables:

```bash
npm run migrate
```

---

## 🌱 Run Seeders

There are two seeders included to populate some initial demo data. Run:

```bash
npm run seed
```

---

## 🧪 Seed Additional Data (Optional)

To insert additional test data (related to issues), you can run the SQL script found in the `docs` folder:

- File: `docs/data.sql`

This script will generate dummy issues for testing purposes.

---

## 🚀 Start the Application

Start the application using:

```bash
npm run start
```

Visit [http://localhost:8080/docs](http://localhost:8080/docs) to access the Swagger documentation for the API.

---

## 🧪 API Testing with Postman

### 🔁 Import Collection & Environment

Import the following files from the `docs` folder into Postman:

- API collection file
- Postman environment file

### ⚙️ Configure Postman Environment

After importing:

1. Set the `BaseUrl` variable’s **Current Value** to:

   ```
   http://localhost:8080/
   ```

   > ⚠️ **Note:** Keep the trailing slash `/` to avoid 404 errors.

2. Set the `clientId` variable with a valid value from the `client_id` column in the `clients` table.

### 🔐 Authenticate

Call the **Login API** under the **User** folder. This will retrieve a JWT token from the API.

After that, you can call any other API — the token and `X-Client-ID` will be passed automatically in requests.

---

## ✅ You're Ready!

Your environment is now ready to explore the API.