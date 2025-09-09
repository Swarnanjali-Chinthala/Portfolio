const projects = [
  {
  id: 1,
  title: "NextWatch",
  objective:
    "To replicate core YouTube functionalities such as video streaming, trending, and saved videos, while practicing authentication, theme management, and responsive layouts in React.",
  summary:
    "NextWatch is a video streaming platform built with React. It allows users to browse, search, and save videos with full authentication. The project demonstrates routing, API integration, theme toggling, and state management for a seamless YouTube-like experience.",
  features: [
    "🔐 Secure login using JWT authentication",
    "🌗 Light/Dark theme toggle for better UX",
    "🏠 Dedicated pages: Home, Trending, Gaming, and Saved Videos",
    "🎬 Video details page with Save/Like/Dislike functionality",
    "🔍 Search bar for filtering video results",
    "📂 Save videos with persistence in local storage",
    "⚡ Graceful loaders, error handling, and retry option",
    "📱 Responsive layout with collapsible sidebar on mobile devices"
  ],
  link: "https://next-watch-six.vercel.app/"
}

,
  {
  id: 2,
  title: "Jobby App – Job Search Platform",
  summary:
    "Jobby App is a React-based job search platform featuring secure login, job listings with filters, and detailed job descriptions. It helps users explore jobs efficiently with a clean and responsive interface.",
  features: [
    "🔐 Login authentication with JWT",
    "📄 Protected routes (Home, Jobs, Job Details)",
    "🎯 Job filters (employment type and salary range)",
    "🔍 Search functionality for jobs",
    "📑 Job details page with skills and company information",
    "🧭 Similar jobs section for easy navigation",
    "⚡ Graceful handling of loader, failure, and empty results",
    "📱 Responsive UI across devices"
  ],
  link: "https://jobby-app-peach.vercel.app/"
}

,
{
  id: 3,
  title: "Appointment Application",
  objective:
    "To build a foundation for an appointment booking system while focusing on structured layouts, responsive design, and scalability for future features.",
  summary:
    "Appointment Application is a React-based project currently featuring a clean home page. It establishes the groundwork for a complete appointment booking platform by demonstrating reusable components, responsive UI, and modern styling practices.",
  features: [
    "🏠 Home page with structured and reusable components",
    "🎨 Modern styling with CSS and responsive layouts",
    "📱 Mobile-friendly UI for better accessibility"
  ],
  link: "https://appointment-application-brown.vercel.app/"
}

  ,
  {
  id: 4,
  title: "Digital Timer",
  objective:
    "To build a simple yet effective digital timer that helps users track time with start, pause, reset, and adjustable duration features while practicing state management in React.",
  summary:
    "Digital Timer is a React-based app that allows users to start, pause, reset, and adjust countdown timers. It’s designed with a clean UI and responsive layout, making it useful for productivity, workouts, or study sessions.",
  features: [
    "⏱ Start, pause, and reset functionality",
    "⏳ Adjustable timer duration",
    "🔄 Real-time countdown display",
    "🎨 Clean and minimal UI for easy usage",
    "📱 Responsive design for desktop and mobile"
  ],
  link: "https://digital-timer-psi.vercel.app/"
}
,
  {
  id: 5,
  title: "App Store",
  objective:
    "To replicate a simplified App Store experience where users can browse apps by category, search for apps, and explore a responsive UI built with React.",
  summary:
    "App Store is a React-based project that showcases apps grouped by categories. It allows users to search for apps, filter by category, and experience a smooth, responsive interface. This project demonstrates component-driven design, props usage, and state management in React.",
  features: [
    "📂 Apps organized by categories (e.g., Social, Games, News, etc.)",
    "🔍 Search functionality to quickly find apps",
    "⚡ Dynamic rendering of app list based on selected category",
    "🎨 Minimal and user-friendly UI",
    "📱 Responsive design for desktop and mobile"
  ],
  link: "https://app-store-lemon.vercel.app/"
}
,
{
  id: 6,
  title: "Money Manager",
  objective:
    "To build a simple yet effective personal finance tracker using HTML, CSS, and JavaScript that helps users manage income and expenses.",
  summary:
    "Money Manager is a browser-based web application that allows users to track their balance, income, and expenses. Users can add transactions by specifying a title, amount, and type (Income/Expense). The application dynamically updates totals and maintains a transaction history in a clean, responsive UI.",
  features: [
    "💰 Track current balance, income, and expenses in real-time",
    "➕ Add transactions with title, amount, and type",
    "📜 Maintain a transaction history list",
    "🔄 Automatic calculation of balance when new transactions are added",
    "🎨 Built with HTML, CSS, and JavaScript (no frameworks)",
    "📱 Responsive design for desktop and mobile"
  ],
  link: "https://nxtasign2swarna.ccbp.tech/"
}


,
  {
  id: 7,
  title: "Sudoku Game",
  summary:
    "The Sudoku Game is a browser-based application built with HTML, CSS, and vanilla JavaScript. It provides an interactive 9x9 Sudoku grid where users can input numbers, validate their entries, and check if the puzzle is solved correctly. The game offers a simple and intuitive interface, making it accessible for users of all ages.",
  objective:
    "To create a classic Sudoku puzzle game that allows users to play, validate, and solve puzzles directly in the browser, enhancing logical thinking and problem-solving skills.",
  features: [
    "🧩 Interactive 9x9 Sudoku grid: Users can fill in the grid with numbers",
    "✅ Real-time validation: Check if the current entries are correct",
    "🔄 Reset functionality: Clear the grid to start a new puzzle",
    "🎨 Clean and minimal UI: Focus on user-friendly design and smooth interactions",
    "📱 Responsive layout: Optimized for desktop and mobile devices"
  ],
  link: "https://sudoku-gamma-puce.vercel.app/"
}
,
];

export default projects;
