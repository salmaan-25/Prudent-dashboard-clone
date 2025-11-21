Prudent AI Dashboard (Frontend Task)
Project Overview
This project is a frontend UI implementation created as part of the internship/assessment task provided by the company. The goal of this task was to recreate a given dashboard screen as closely as possible using modern frontend technologies while maintaining clean code structure and good UI practices.
The dashboard represents a Loan Officer interface that displays a 360-degree view of a loan application, including borrower information, decision matrix insights, and key financial ratios. The design focuses on clarity, usability, and visual hierarchy similar to a real-world financial analytics platform.
________________________________________
Objective of the Task
•	Recreate the provided UI design using React and Material UI
•	Maintain proper layout structure and spacing
•	Implement basic state management for interactive components
•	Match visual styling close to the original design (not necessarily pixel-perfect)
•	Keep the code modular, readable, and maintainable
This project focuses purely on frontend implementation; no backend or API integration is involved.
________________________________________
Technologies Used
•	React
•	TypeScript
•	Material UI (MUI v7)
•	Vite (for project scaffolding)
•	Emotion (for styling engine used by MUI)
________________________________________
Key Features Implemented
•	Responsive header with logo, navigation, search, and user controls
•	Loan Summary card with detailed borrower information
•	Combined Decision Matrix with circular progress indicators
•	Borrower Approval Index with visual arrow indicator
•	Key Ratios section with status-based color indicators
•	Tab-based content switching using React state
•	“Download as Excel” and user selector UI elements
•	Clean component-based structure for easy scalability
________________________________________
Folder Structure
prudent-dashboard/
│
├── src/
│   ├── assets/
│   │   └── prudent-logo.png
│   ├── components/
│   │   ├── AppHeader.tsx
│   │   ├── DashboardContent.tsx
│   │   ├── LoanSummaryCard.tsx
│   │   ├── DecisionMatrixCard.tsx
│   │   ├── KeyRatiosCard.tsx
│   │   └── TabsSection.tsx
│   ├── data/
│   │   └── dummyData.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── theme.ts
│
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
Each component is separated for clarity and easier maintenance.
________________________________________
How To Run The Project
This section explains, step-by-step, how to set up and run the project on your system.
Prerequisites
Make sure the following are installed on your system before proceeding:
•	Node.js (version 18 or above recommended)
o	Check version:
 	node -v
•	npm (comes with Node.js)
o	Check version:
 	npm -v
If Node.js is not installed, download it from: https://nodejs.org
________________________________________
1. Clone the Repository
If you are getting the project from GitHub, run:
git clone <your-repository-link>
Then move into the project folder:
cd prudent-dashboard
If you already have the project as a ZIP, extract it and open the folder in your terminal.
________________________________________
2. Install All Dependencies
Run the following command to install all required packages (React, TypeScript, Material UI, etc.):
npm install
This will install packages such as: - React - TypeScript - Material UI - Emotion styling engine - Icons
Wait until the installation completes.
________________________________________
3. Start the Development Server
To run the project locally, use:
npm run dev
After this, you will see an output similar to:
Local: http://localhost:5173/
Open this link in your browser to view the dashboard.
________________________________________
4. Build for Production (Optional)
If required for submission or deployment, you can create a production build:
npm run build
This will generate an optimized dist folder containing the production-ready files.
To preview the production build locally:
npm run preview
________________________________________
5. Common Issues & Fixes
If dependencies fail to install:
npm cache clean --force
npm install
If the server does not start:
rm -rf node_modules package-lock.json
npm install
npm run dev
If port 5173 is busy:
You can manually run:
npm run dev -- --port 3000
Then open: http://localhost:3000
________________________________________
You should now see the Prudent AI Dashboard UI running successfully with all visual elements and interactions working as expected.
Design Notes
•	Material UI components were used to maintain consistency and reliability.
•	The layout closely follows the provided design reference.
•	Custom styles were applied using MUI’s sx prop for flexibility.
•	The UI is responsive and adapts to different screen sizes.
•	Dummy data is used to simulate real-time loan information.
________________________________________
Challenges Faced
•	Matching the Grid layout with the updated MUI v7 API
•	Replicating circular gauge visuals accurately
•	Aligning UI elements with precise spacing
These were resolved by adapting the latest MUI Grid system and custom styling for visual components.
________________________________________
Future Improvements
•	Integration with real backend APIs
•	Authentication system for Loan Officers
•	Dynamic data fetching
•	Enhanced accessibility features
•	Export functionality for real reports
 
________________________________________
Author
Mohamed Salmaan
This project was designed and implemented by me as part of a frontend technical assessment. The intention was to demonstrate practical React skills, UI design replication ability, and clean coding practices.
________________________________________
Final Notes
This project accurately reflects the task requirements and demonstrates the ability to interpret UI mockups and convert them into functional frontend interfaces. Every component has been carefully structured to ensure readability, scalability, and maintainability.
Thank you for reviewing this submission.
