# BigBul Services - Next.js & Firebase Studio Project

This is a web application for BigBul Services, a company providing technology, training, trading, and placement services. The application is built with Next.js and was bootstrapped with [Firebase Studio](https://firebase.google.com/studio).

## Tech Stack

*   **Framework**: [Next.js](https://nextjs.org/) (with App Router)
*   **UI**: [React](https://reactjs.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components**: [ShadCN/UI](https://ui.shadcn.com/)
*   **Icons**: [Lucide React](https://lucide.dev/guide/packages/lucide-react)
*   **Deployment**: Firebase App Hosting

## Project Structure

```
.
├── src
│   ├── app                 # Next.js App Router: pages and layouts
│   │   ├── globals.css     # Global styles and Tailwind directives
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Main page component
│   ├── components          # Reusable React components
│   │   ├── ui              # ShadCN UI components
│   │   ├── hero-section.tsx
│   │   ├── services-section.tsx
│   │   ├── personalized-greeting.tsx
│   │   └── footer.tsx
│   └── lib
│       └── utils.ts        # Utility functions (e.g., cn for classnames)
├── public                  # Static assets
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── ...
```

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js (v18 or later)
*   npm

### Installation & Running Locally

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  **Install NPM packages:**
    ```sh
    npm install
    ```

3.  **Run the development server:**
    ```sh
    npm run dev
    ```

Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

## Learn More

*   **Next.js Documentation** - learn about Next.js features and API.
*   **React Documentation** - learn about React.
*   **Tailwind CSS Documentation** - learn about Tailwind CSS.
*   **ShadCN/UI Documentation** - learn about ShadCN/UI.
