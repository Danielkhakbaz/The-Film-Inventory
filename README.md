# The Film Inventory

<img src="https://github.com/Danielkhakbaz/Danielo-Portfolio/blob/master/public/images/projects/the-film-inventory/screen-shot.png" alt="The screen-shot of the film inventory" />

A comprehensive web application for managing and showcasing a collection of films, built with [Next.js](https://nextjs.org/). **The Film Inventory** allows users to explore film collections with user authentication, personalized recommendations, and seamless navigation, making it a valuable resource for movie enthusiasts and database administrators.

## Project Overview

This platform enables users to store, categorize, and search through an extensive film inventory. Designed with a clean UI and powered by a robust backend, it supports easy maintenance and scalability. The project also uses Prisma for database management, ensuring efficient and secure data handling.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Development Scripts](#development-scripts)
- [Folder Structure](#folder-structure)

## Features

- **Authentication**: Secure user login with session management using `next-auth` and Prisma.
- **Film Management**: Allows users to add, edit, and remove films in the inventory.
- **Categorization & Search**: Quickly find films by genre, release date, and other tags.
- **Responsive Design**: Optimized for desktop and mobile devices.
- **Interactive Animations**: Smooth and dynamic interactions with Framer Motion.

## Technologies Used

- **[Next.js](https://nextjs.org/)** - React framework for server-side rendering and static site generation.
- **[React](https://reactjs.org/)** - JavaScript library for building user interfaces.
- **[Prisma](https://www.prisma.io/)** - ORM for database modeling and management.
- **[NextAuth.js](https://next-auth.js.org/)** - Authentication library for Next.js.
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework for designing modern web layouts.
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library for React components.
- **[DaisyUI](https://daisyui.com/)** - Tailwind CSS-based component library for rapid UI development.

## Folder Structure

Here's an overview of the project structure:

```plaintext
the-film-inventory/
├── public/                    # Public assets like images and icons
│
├── prisma/                    # Prisma schema and migration files
│
├── app/                       # Source directory for components and pages
│
├── auth/                      # Everything about authentication
│
├── components/                # Reusable UI components and shared widgets
│
├── layout/                    # Layout components for structuring pages
│
├── providers/                 # Context providers for managing global state and data
│
├── theme/                     # Theme settings for design consistency (colors, typography, etc.)
│
├── utils/                     # Utility functions
│
├── app/                       
│   ├── api/                   # APIs written in JS for my full-stack next.js app
│   ├── about/                 # About section (page for blog posts)
│   └── movies/                # Movies section (page for blog posts)
│
├── .eslintrc.json             # ESLint configuration for code quality
├── .prettierrc                # Prettier configuration for code formatting
├── next.config.js             # Next.js configuration for app settings
├── package.json               # Project metadata, scripts, and dependencies
└── README.md                  # Documentation for project setup and usage
```

## Installation

To set up this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/danielo-portfolio.git
   cd danielo-portfolio

2. **Install dependencies**:
   ```tsx
   yarn

3. **Run the development server**:
   ```tsx
   yarn dev

4. **Open http://localhost:3000 in your browser to see the project**.

## Development Scripts

Here are some helpful scripts to assist in the development and maintenance of this project:

```dev```: Runs the app in development mode. <br/><br/>
```build```: Compiles the app for production. <br/><br/>
```start```: Starts the production server. <br/><br/>
```lint```: Lints and fixes files using ESLint. <br/><br/>
```fix```: Formats files using Prettier. <br/><br/>
```check-prettier```: Checks the code format without making changes.
