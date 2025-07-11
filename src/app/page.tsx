import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import ClassImg from "@/components/ClassImg";
import Reason from "@/components/Reason";
import ClassHour from "@/components/ClassHour";
import RegisterBtn from "@/components/RegisterBtn";
import Price from "@/components/Price";
import Course from "@/components/Course";
import ContactUs from "@/components/ContactUs";
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <ClassImg />
        <Reason />
        <ClassHour />
        <p className="text-center mt-4 font-bold">&#42;I can adjust the time if needed, just let me know your availability.</p>
        <RegisterBtn />
        <Price />
        <Course />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}
