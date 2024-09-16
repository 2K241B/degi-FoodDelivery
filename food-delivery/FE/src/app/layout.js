import "./globals.css";
import { Footer } from "@/components/my components/footer";
import { Navbar } from "@/components/my components/navbar";
import { Divide } from "lucide-react";

export default function Layout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
