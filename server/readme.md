# Chromora Server

Backend API for the Chromora palette platform.

---

## Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

---

## Features

- REST API
- MongoDB integration
- Palette save system
- Palette delete system

---

## Run Server

```bash
npm install
npm run dev
```

---

## Environment Variables

Create `.env`:

```env
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret
```

---

## API Routes

### Get all palettes

```http
GET /api/palettes
```

### Create palette

```http
POST /api/palettes
```

### Delete palette

```http
DELETE /api/palettes/:id
```