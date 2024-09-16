import { Footer } from "@/components/my components/footer";
import { Navbar } from "@/components/my components/navbar";

export default function Layout({ children }) {
  return (
    <div className="">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
