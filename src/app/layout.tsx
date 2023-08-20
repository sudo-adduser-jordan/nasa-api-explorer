import Navigation from "../components/navigation/Navigation";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="container">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
