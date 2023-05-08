'use client';
import { useState } from 'react';
import { Metadata } from 'next';
import { Sidebar } from '@/components/sidebar/Sidebar';
import { Topbar } from '@/components/topbar/Topbar';
import './globals.css';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => {
        setSidebar(!sidebar);
    };
    const hideSidebar = () => {
        setSidebar(false);
    };

    return (
        <html lang='en'>
            <body>
                <Topbar showSidebar={showSidebar} />
                <main onClick={hideSidebar}>
                    <Sidebar sidebar={sidebar} />
                    {children}
                </main>
            </body>
        </html>
    );
}
