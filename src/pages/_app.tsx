import "../styles/globals.css";

import { MyAppProps } from "../util/types";
import { Layouts } from "../components/Layout";

function MyApp({ Component, pageProps }: MyAppProps) {

  const Layout = Layouts[Component.Layout] ?? ((page) => page);
  
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
  
}

export default MyApp;