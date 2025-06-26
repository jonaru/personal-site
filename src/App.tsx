import React from "react"
import ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import Header from "./Header";
import Work from "./Work";
import Footer from "./Footer";

const router = createRouter({ routeTree });
const App = () => {
    return <RouterProvider router={router} />;
}

const container = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(container);
root.render(<App />);