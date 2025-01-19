import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.jsx";
import Layout from "./Layout.jsx";
import { HelmetProvider } from "react-helmet-async";

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrateRoot(
    rootElement,
    <HelmetProvider>
      <StrictMode>
        <Layout>
          <App />
        </Layout>
      </StrictMode>
    </HelmetProvider>
  );
} else {
  createRoot(rootElement).render(
    <HelmetProvider>
      <StrictMode>
        <Layout>
          <App />
        </Layout>
      </StrictMode>
    </HelmetProvider>
  );
}

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <Layout>
//       <App />
//     </Layout>
//   </StrictMode>
// );
