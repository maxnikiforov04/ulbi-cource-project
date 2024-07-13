import { ThemeProvider } from "app/providers/ThemeProvider";
import { render } from "react-dom";
import App, { Theme } from "./app/App";
import { BrowserRouter } from "react-router-dom";

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root"),
);
