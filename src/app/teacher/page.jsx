import Box from "@/components/Courses/Box";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata = {
  title: 'My courses'
}

export default function Teacher() {
  return (
    <div className="wrapper">
      <Header />
      <div className="container">
        <div className="flex-box">
          <h2>My courses</h2>
          {/* <button className="add-course">+</button> */}
        </div>
        <Box teacher />
      </div>
      <Footer />
    </div>
  );
}
