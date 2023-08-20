import "./globals.css";
import Navigation from "../components/navigation/Navigation";
import Menu from "@/components/navigation/Menu";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="container">
        {/* <Menu /> */}
        <Navigation />
        {/* {children} */}
      </body>
    </html>
  );
}
