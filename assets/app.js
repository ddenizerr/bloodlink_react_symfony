import './bootstrap.js';
import React from "react";
import { createRoot} from "react-dom/client";
import App from "./react/App.tsx";

import './styles/app.css';

const root = createRoot(document.getElementById('react-root'));

root.render(<App />);
