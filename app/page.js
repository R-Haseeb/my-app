import "./globals.css"
import Navbar from "./components/Navbar";
export default function Page() {
  return (
    <>
    <Navbar />
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold">This is Home Page</h1>
    </div>
    </>
  );
}
