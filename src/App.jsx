// App.jsx
import React from "react";
import { ThemeProvider, PortfolioProvider } from "./contexts";
import { Layout } from "./components/layout/Layout";
import { ErrorBoundary } from "./components/common/ErrorBoundary";
import "./styles/globals.css";

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <PortfolioProvider>
          <Layout />
        </PortfolioProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
