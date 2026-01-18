# CampusMart - Campus Marketplace

## Project Description

A simple marketplace web application where students can browse items and post new items for sale. Built with Next.js, Express.js, and MongoDB.

## Setup & Installation Instructions

### Backend Setup

1. Navigate to backend directory:

   ```bash
   cd CampusMart-Server
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create `.env.local` file:

   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. Start server:
   ```bash
   node index.js
   ```

### Frontend Setup

1. Navigate to frontend directory:

   ```bash
   cd CampusMart-Client
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create `.env.local` file:

   ```
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_secret_key
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   ```

4. Start development server:
   ```bash
   npm run dev
   ```

## Route Summary

### Public Routes

- `/` - Landing page
- `/login` - Login page
- `/items` - Browse all items
- `/items/[id]` - Item details page

### Protected Routes

- `/items/add-item` - Add new item (requires authentication)

## List of Implemented Features

1. Authentication (Google OAuth and Credential Login)
2. Landing Page with Navbar and Footer
3. Items List Page
4. Item Details Page
5. Add Item Page (Protected)

## Brief Explanation of Features

**Authentication**: Users can log in using Google OAuth or email/password credentials. NextAuth.js manages sessions and proxy.js protects authenticated routes.

**Landing Page**: Home page with navigation to Items and Login pages. Includes responsive Navbar and Footer components.

**Items List Page**: Displays all items in a responsive grid. Each item card shows name, description, price (in Taka), and image. Users can click "View Details" to see more information.

**Item Details Page**: Shows complete item information including image, name, price, category, condition, description, seller, and listed date. Includes back navigation to items list.

**Add Item Page**: Protected page where authenticated users can add new items. Form includes fields for name, description, price, image URL, category, and condition. Automatically captures seller email from session.
