import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.jsx";
import Layout from "./Layout.jsx";

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrateRoot(
    rootElement,
    <StrictMode>
      <Layout>
        <App />
      </Layout>
    </StrictMode>
  );
} else {
  createRoot(rootElement).render(
    <StrictMode>
      <Layout>
        <App />
      </Layout>
    </StrictMode>
  );
}

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <Layout>
//       <App />
//     </Layout>
//   </StrictMode>
// );
