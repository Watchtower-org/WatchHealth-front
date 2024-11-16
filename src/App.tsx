import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

import { GlobalStyles } from "./styles/global-styles";

import { Routes } from "./routes";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <GlobalStyles />
      <ToastContainer
        autoClose={3000}
        pauseOnHover={false}
        style={{ width: "max-content" }}
      />
    </ThemeProvider>
  );
}
