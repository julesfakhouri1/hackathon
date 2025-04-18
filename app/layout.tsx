import './globals.css';

export const metadata = {
    title: 'Votre App',
    description: 'Une application moderne avec PWA',
    themeColor: '#2CB577',
    icons: {
        icon: '/icons/icon-192.png',
        apple: '/icons/icon-192.png',
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr">
        <head>
            <link rel="manifest" href="/manifest.json" />
            <meta name="theme-color" content="#2CB577" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="application-name" content="Votre App" />
            <meta name="apple-mobile-web-app-title" content="Votre App" />
        </head>
        <body suppressHydrationWarning>{children}</body>
        </html>
    );
}
