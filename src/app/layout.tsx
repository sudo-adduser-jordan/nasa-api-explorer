import Navigation from '../components/navigation/Navigation';
import './globals.css';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            {/* ios safari click event fix, affects bubbling */}
            <body onClick={void 0}>
                <Navigation>{children}</Navigation>
            </body>
        </html>
    );
}
