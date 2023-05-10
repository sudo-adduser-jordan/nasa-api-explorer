import { useState } from 'react';
import { Metadata } from 'next';
import Navigation from '../components/navigation/Navigation';
import './globals.css';

// export const metadata: Metadata = {
//     title: {
//         default: 'Nasa Api Explorer',
//         template: '%s | Nasa Api Explorer',
//     },
// };

// export const metadata: Metadata = {
//     title: 'Nasa Api Explorer',
//     // description: 'Welcome to Nasa Api Explorer',
// };

// export function generateMetadata(): Metadata {
//     return {
//         title: 'Next.js',
//     };
// }

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body>
                <Navigation>{children}</Navigation>
            </body>
        </html>
    );
}
