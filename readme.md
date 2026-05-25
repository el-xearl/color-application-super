# Chromora — Full Stack Palette Generator

Modern cinematic color palette generation platform built with React, TypeScript, Express.js and MongoDB.

---

## Features

- Cinematic palette generation
- Gradient generation system
- 30-60-10 design rule preview
- Dynamic color variations
- CSS / Tailwind / JSON export
- Save palettes to MongoDB
- Delete saved palettes
- Component-based architecture
- Full-stack REST API

---

## Tech Stack

### Frontend
- React
- TypeScript
- TailwindCSS
- Framer Motion
- Chroma.js
- Axios
- Lucide React

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

---

## Project Structure

```txt
client/
server/
```

---

# Installation

## Frontend

```bash
cd client
npm install
npm run dev
```

## Backend

```bash
cd server
npm install
npm run dev
```

---

## Environment Variables

Create `.env` inside `server`:

```env
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret
```

---

## API Endpoints

### Get palettes

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

---

## Author

Serhat Özdamar