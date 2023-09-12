import "./index.css";
import { createRoot } from "react-dom/client";
import App from "@/App";
import { BrowserRouter } from "react-router-dom";
import ToggleTheme from "@/components/ToggleTheme";
import { ProviderContainer } from "./providerLib";
import { Moon } from "./moonLib";

Moon.setTheme("dark");
Moon.setColors({
  prim: "#555",
  main: "#333",
});

createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <div className="bg-prim p-2x m-xl round-xl text-owl">
      <p>lol</p>
    </div>
    <App />
    <ToggleTheme />
    <ProviderContainer />
  </BrowserRouter>
);
