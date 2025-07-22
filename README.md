# alx-project-0x02-setup
Next.js Project Setup and Basics.

Project Description
This project is a comprehensive introduction to setting up and working with Next.js, TypeScript, and Tailwind CSS. It guides you through creating a modern web application with reusable components, routing, API integration, and proper project structure. The project covers fundamental concepts from initial setup to building interactive components and fetching data from external APIs.

Learning Objectives
By completing this project, you will:

Understand how to scaffold a Next.js application with TypeScript and Tailwind CSS
Learn to implement basic routing in Next.js using the Pages Router
Create reusable components with TypeScript interfaces
Implement interactive UI elements like modals and buttons
Fetch and display data from external APIs
Structure a Next.js project following best practices
Work with component props and state management
Build responsive layouts with navigation

0. Create the GitHub Repository and Initial Setup
mandatory
Objective: Create a GitHub repository named alx-project-0x02-setup and set up the initial structure.

Instructions:

Create a new GitHub repository named alx-project-0x02-setup.
Initialize the repository with a README.md file.
Add a title to the README.md file: “Next.js Project Setup and Basics.”
Write a brief introduction explaining the purpose of this repository.
Repo:

GitHub repository: alx-project-0x02-setup
File: README.md

1. Set Up a Next.js Project
mandatory
Objective: Scaffold a Next.js project with TypeScript and Tailwind CSS.

Instructions:

Scaffold a Next.js project using npx create-next-app@latest with the name alx-project-2.
Enable TypeScript, ESLint, and Tailwind CSS.
Create the following folder structure:

  /components/layout/Header.tsx
    /interfaces/index.ts
    /public/assets/images
Add basic content to pages/index.tsx to display a welcome message.

Run the application using npm run dev -- -p 3000 and verify it works on http://localhost:3000.

Repo:

GitHub repository: alx-project-0x02-setup
Directory: alx-project-0x02
File: pages/index.tsx,components/layout/Header.tsx,interfaces/,public/assets/images/,README.md

2. Basic Routing in Next.js
mandatory
Objective: Implement basic routing using the Pages Router in Next.js.

Instructions:

Create two new pages: pages/home.tsx and pages/about.tsx.
Add basic content to both pages, such as an h1 element for each page.
Modify Header.tsx to include navigation links to /home and /about.
Test the routing by navigating to /home and /about.
Repo:

GitHub repository: alx-project-0x02-setup
Directory: alx-project-0x02
File: pages/home.tsx, pages/about.tsx, components/layout/Header.tsx

3. Create a Reusable Card Component
mandatory
Objective: Create a dynamic, reusable Card component that accepts props for title and content.

Instructions:

Define a CardProps interface in interfaces/index.ts.
Create a new file components/common/Card.tsx and implement a Card component that accepts title and content as props.
Use this component in the pages/home.tsx page and pass different titles and content.
Repo:

GitHub repository: alx-project-0x02-setup
Directory: alx-project-0x02
File: components/common/Card.tsx,interfaces/index.ts,pages/home.tsx

4. Implement a Modal Component
mandatory
Objective: Implement a modal component that accepts user input and dynamically updates content on a page.

Instructions:

Create a PostModal component in components/common/PostModal.tsx.
Implement a form inside the modal to accept user input for title and content.
Pass the data back to the parent component and display the newly added content on the /home page.
Add a button to open the modal.
Repo:

GitHub repository: alx-project-0x02-setup
Directory: alx-project-0x02
File: components/common/PostModal.tsx,pages/home.tsx

5. Create and Use a Button Component
mandatory
Objective: Create a reusable Button component that accepts different sizes and shapes.

Instructions:

Define a ButtonProps interface in interfaces/index.ts.
Create a Button component in components/common/Button.tsx that accepts size (small, medium, large) and shape (rounded-sm, rounded-md, rounded-full) as props.
Use the Button component on the /about page and display three buttons with different sizes and shapes.
Repo:

GitHub repository: alx-project-0x02-setup
Directory: alx-project-0x02
File: components/common/Button.tsx,pages/about.tsx

6. Implement Navigation and Layout
mandatory
Objective: Implement navigation between pages using a reusable Header component.

Instructions:

Create a Header.tsx component in components/layout/Header.tsx.
Add links to /home, /about, and /posts pages in the header.
Import and use the Header component in pages/home.tsx, pages/about.tsx, and pages/posts.tsx.
Ensure the navigation works across all pages.
Repo:

GitHub repository: alx-project-0x02-setup
Directory: alx-project-0x02
File: components/layout/Header.tsx,pages/home.tsx,pages/about.tsx,pages/posts.tsx

7. Implement a PostCard Component
mandatory
Objective: Display a list of posts using a PostCard component.

Instructions:

Define a PostProps interface in interfaces/index.ts.
Create a PostCard.tsx component in components/common/PostCard.tsx that accepts title, content, and userId as props.
Fetch data from an API (e.g., JSONPlaceholder) and display a list of posts using the PostCard component in pages/posts.tsx.
Repo:

GitHub repository: alx-project-0x02-setup
Directory: alx-project-0x02
File: components/common/PostCard.tsx,pages/posts.tsx,interfaces/index.ts

8. Build a UserCard Component
mandatory
Objective: Build a UserCard component and display users on the /users page.

Instructions:

Define a UserProps interface in interfaces/index.ts.
Create a UserCard.tsx component in components/common/UserCard.tsx that displays user details like name, email, and address.
Fetch user data from this API and display it on the /users page using the UserCard component.
Repo:

GitHub repository: alx-project-0x02-setup
Directory: alx-project-0x02
File: components/common/UserCard.tsx,pages/users.tsx,interfaces/index.ts