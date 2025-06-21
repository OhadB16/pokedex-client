# Pokédex Client

This is a client-side application for a Pokédex, a digital encyclopedia of Pokémon. It allows users to browse, filter, capture and view Pokémon.

## Features

- **Browse Pokémon:** View a grid of Pokémon with their images and names.
- **Filter and Sort:** Filter Pokémon by type and sort them by number. (with client side cache)
- **Dark Mode:** Switch between light and dark themes for comfortable viewing.
- **Capture Pokémon:** Mark Pokémon as "captured".

## Tech Stack

- **React:** A JavaScript library for building user interfaces.
- **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
- **Material-UI (MUI):** A popular React UI framework for faster and easier web development.
- **Vite:** A fast build tool that provides a quicker and leaner development experience for modern web projects.
- **TanStack Query:** For fetching, caching, and managing server state.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) (version 18 or higher) and `npm` installed on your machine.

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/OhadB16/pokedex-client.git
    cd pokedex-client
    ```


2.  **Install dependencies:**
    Make sure you're using **Node.js v20**:
    
    ```sh
    # Install Node.js v20 using nvm (Node Version Manager)
    nvm install 20
    nvm use 20
    
    # Confirm the version
    node -v   # should output something like: v20.x.x

    Use `npm i` to install the project dependencies.
    ```sh
    npm install
    ```

4.  **Run the development server:**
    This command will start the Vite development server.
    ```sh
    npm run dev
    ```

    Open your browser and navigate to `http://localhost:5173` / `http://localhost:3000/` (or the URL provided in your terminal) to see the application.
