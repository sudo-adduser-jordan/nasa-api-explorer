import "./globals.css";
import Navigation from "../components/navigation/Navigation";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="container">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
