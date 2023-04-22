import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";
import "./globals.css";
import Providers from "./Providers";

export const metadata = {
  title: "IMDd clone",
  description: "This is IMDb clone website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* {header} */}
          <Header />
          <div></div>

          {/* {navbar} */}
          <Navbar />
          {/* {searchbox} */}
          <SearchBox />
          {children}
        </Providers>
      </body>
    </html>
  );
}
