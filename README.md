⛷️ Ski Resorts Mini-Site
This repository contains both the frontend (Next.js) and the backend API (C#) for the Ski Resorts Mini-Site.

💻 How to Run Locally
Follow these steps to get both the API and the web application running on your local machine.

1. Prerequisites
You must have the following installed:

* **Node.js** (v18+)
* **.NET SDK** (v7.0 or v8.0)
* **Git**

2. Clone the Repository
 Clone the project and navigate into the root directory:

```bash or your cli
  git clone https://github.com/diegobusr/Ski-Resorts-Mini-Site.git
  cd Ski-Resorts-Mini-Site 
```

3. Run the C# API (Backend)
The API runs on port 5000.

Bash
# Navigate to the API project folder
```
cd api
```

# Restore project dependencies
```
dotnet restore
```

# Run the application
```
dotnet run
```
The API should now be running, typically accessible at http://localhost:5000.

or Navigate to the api folder within the cloned repository.

Double-click the .sln (Solution) file (e.g., SkiResorts.sln). Remember to restore nugget packages and start the project.

4. Run the Next.js Web App (Frontend)
The frontend runs on port 3000.

Bash

# Navigate back to the root and then into the web project folder
```
cd ..
cd web
```

# Install dependencies (using npm, adjust if you use yarn/pnpm)
```
npm install
```

# Start the development server
```
npm run dev
```
The web application should now be accessible at http://localhost:3000.

🏗️ Brief Architecture Overview & Trade-offs
The project uses a standard two-tier (Frontend/Backend) architecture. The frontend built with Next.js, provides a dynamic user interface and handles all the client and server (Nextjs) rending.
The app follows a fairly standard modern Next.js 13+ “app router” setup: high-level layout and metadata live in src/app, while feature-specific server components sit under route segments (src/app/resorts/[slug], etc.), and all reusable UI lives in src/components (with client components flagged by 'use client' for interactivity like the ResortsGrid filters and favorites). Shared logic is split cleanly into src/lib for data fetching and helpers, plus src/types for TypeScript contracts. This separation keeps build-time server rendering fast and lets the mostly static resort details be fetched once on the server, but the app still leans on client-side state for filters/favorites, which increases bundle size and requires careful localStorage handling. Overall it’s a simple, maintainable structure, though pushing more state to the server or consolidating the Swiper UI helpers could reduce duplication and improve initial load performance.

The backend, a C# Web API, serves as the data layer, handling requests for ski resort information and managing any business logic.
The API follows a conventional layered architecture—controllers expose HTTP endpoints, services contain business logic, and repositories. This separation keeps responsibilities clear and makes testing and maintenance straightforward.

A possible trade-off of this setup is the increased initial complexity compared to an all-in-one framework, as it requires managing two separate servers, build processes and deployment pipelines. This modularity is beneficial for future growth, as it allows either the frontend to be swapped out (for example a mobile app) or the backend to be integrated with different clients without requiring a full system remake.

📊 Where the Data Came From + Attribution
The data used for the ski resort information (names, locations, prices, stats) was manually compile from https://www.ski.com/ .

📈 What We Would Improve with More Time
Given additional time and resources, the following improvements would be prioritized:

Web
- Components: There are a few cases where I would choose to make a new component of something in order to improve modularity but I did't have enough time for that.
- Error handling: There a few cases were error are not handled correctly, example: No name on a ski resort from the DB.
- Loading states: The app needs skeleton usage for the loading states.
- Accesibility: Need to check the whole code to improve all the accesibility of the elements in the app.
- Metadata: Could be improved as well.
- Styling: Could be improved A LOT.
- Testing: add testing.

Api
- API Validation and Error Handling: Add comprehensive input validation to the C# API endpoints and implement a more robust, standardized error response structure.
- Write code in a more standard way.
- The api is not secured.

<img width="473" height="1126" alt="image" src="https://github.com/user-attachments/assets/52f415a1-4702-4d34-8154-50d633d38f05" />
