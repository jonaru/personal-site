import { JSX } from "react"
import ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree });
const App = (): JSX.Element => {
    return <RouterProvider router={router} />;
}

const container = document.getElementById("root") as HTMLElement;
const root: ReactDOM.Root = ReactDOM.createRoot(container);
root.render(<App />);