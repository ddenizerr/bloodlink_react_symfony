# BloodLink API & React Frontend

## 📝 **Project Overview**

BloodLink is a web application designed for managing blood donations and donor requests. It uses **Symfony 7** for the backend API, and **React** for the frontend to handle user authentication, token management, and displaying data.

## 📦 **Technologies Used**

### Backend (Symfony)
- **Symfony 7**: A PHP framework for building the backend API.
- **JWT Authentication**: JSON Web Tokens for secure authentication.
- **Doctrine ORM**: For database management.
- **LexikJWTAuthenticationBundle**: JWT authentication for Symfony.
- **MySQL**: The database to store user and donation information.

### Frontend (React)
- **React**: JavaScript library for building the frontend.
- **Axios**: For making HTTP requests to the backend API.
- **React Router**: For routing and navigation within the frontend.

## 🚀 **Getting Started**

### 1. **Clone the Repository**
Clone the project to your local machine:

```bash
git clone https://github.com/yourusername/bloodlink.git
cd bloodlink
```
### 2. Backend Setup (Symfony)
2.1 Install PHP Dependencies

Make sure you have PHP 8.2+ installed, and then install Symfony dependencies:

```bash
composer install
```

### 2.2 Set Up Environment Variables

Create a .env.local file for your environment variables:
```bash
cp .env .env.local
```

### 2.3 Set Up Database

Create the database and run migrations:

```bash 
php bin/console doctrine:database:create
php bin/console doctrine:migrations:migrate
```
2.4 Install JWT Bundle

```bash
composer require lexik/jwt-authentication-bundle
```

### 3. Frontend Setup (React)
   
### 3.1 Install Node.js and NPM Dependencies

Make sure you have Node.js installed, then install the frontend dependencies:

```bash 
npm install
```

### 3.2 Running the React Development Server

Start the React development server:

```bash
npm start
```
Your frontend will be available at http://localhost:3000.

## ⚡ Features to Add:

Blood Donation Management: API and frontend to manage donations.
Donor Request Management: Create, update, and delete donor requests.
User Profile: Allow users to manage their profile, including updating their donation history.
Search and Filter: Implement search and filtering capabilities for donations and requests.


## 🛠 Troubleshooting

JWT Token Issues:
Ensure the JWT keys are generated correctly.
If you encounter issues with expired tokens, implement token refresh logic.
CORS Issues:
Ensure your frontend can access the backend by adding the necessary CORS headers on the backend, especially during development.