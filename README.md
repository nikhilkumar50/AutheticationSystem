Welcome to Authentication System

User Interface

1.Login Page

![Screenshot 2024-03-29 013222](https://github.com/nikhilkumar50/AutheticationSystem/assets/118098709/5bbacd8f-395e-4a5d-84ca-a04fb7a4ff60)


2.SignUP Page

![Screenshot 2024-03-29 013254](https://github.com/nikhilkumar50/AutheticationSystem/assets/118098709/bad20288-f3ca-49eb-8fe5-520fcca3f9c1)


3.Home Page

![Screenshot 2024-03-29 013334](https://github.com/nikhilkumar50/AutheticationSystem/assets/118098709/da2763dc-3fce-4cd0-9bca-13f9a8cfead6)

Technologies User-
Frontend-React.js, TailwindCss, Redux
Backend- Node.js ,Express.js ,MongoDB

## Cloning the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/nikhilkumar50/AutheticationSystem

```
## Backend Configuration

1. **Environment Files**: Navigate to the `backend` folder and the do `npm install ` create two files: `.env` . Add the following contents to both files:

    ```plaintext
   
   MONGO_URI=
   JWT_SECRET=
   
    ```
 2. **MongoDB Setup**: 
    - Sign up for an account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
    - Create a new cluster and follow the instructions to set up a new database.
    - Once set up, obtain your MongoDB connection string and add it to the ` MONGO_URI` variable in your `.env` files.
   
3. **JWT_SECRET_KEY**:
    - This just needs to be any long, random string. You can google "secret key generator".

**Frontend**:
   - Open a new terminal and navigate to the `frontend` directory.
   - Install dependencies: `npm install`.
   - Start the frontend application: `npm run dev`.
