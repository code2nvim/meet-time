import "./index.css";

import { createInertiaApp, ResolvedComponent } from "@inertiajs/react";
import { ReactElement, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Layout from "./components/Layout/Layout.tsx";

createInertiaApp({
  resolve: (name) => {
    const pages = import.meta.glob<ResolvedComponent>("./pages/**/*.tsx", {
      eager: true,
    });
    const page = pages[`./pages/${name}.tsx`];
    // @ts-ignore: https://inertiajs.com/docs/v2/the-basics/pages#default-layouts
    page.default.layout = page.default.layout ||
      ((page: ReactElement) => <Layout>{page}</Layout>);
    return page;
  },
  setup({ el, App, props }) {
    createRoot(el).render(
      <StrictMode>
        <App {...props} />
      </StrictMode>,
    );
  },
});
