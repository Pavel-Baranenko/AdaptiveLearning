import Box from "@/components/Courses/Box";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
export const metadata = {
  title: 'My courses'
}
export default function Home() {
  return (
    <div className="wrapper">
      <Header />
      <div className="container">
        <div className="flex-box">
          <h2>Courses for me</h2>
        </div>
        <Box />
      </div>
      <Footer />
    </div>
  );
}
