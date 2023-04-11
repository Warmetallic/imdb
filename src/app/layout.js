import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "IMDd clone",
  description: "This is IMDb clone website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* {header} */}
        <Header />
        <div></div>

        {/* {navbar} */}
        {/* {searchbox} */}
        {children}
      </body>
    </html>
  );
}
