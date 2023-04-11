import "./globals.css";

export const metadata = {
  title: "IMDd clone",
  description: "This is IMDb clone website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
