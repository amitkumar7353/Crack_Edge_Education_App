# Crack Edge Education App

## Setup

### 1. Backend
```bash
cd backend
npm install
```

Copy `.env.example` to `.env` and configure MongoDB.

Start MongoDB, then:
```bash
npm run seed
npm run dev
```

### 2. Frontend
```bash
cd frontend
npm install
npm run dev
```

Open the Vite URL shown in the terminal.

## Default Admin
Email: `admin@crackedge.com`
Password: `Admin123`

Change the admin password and JWT secret before production deployment.
