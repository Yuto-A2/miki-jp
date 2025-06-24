import Header from "@/components/layouts/Header";
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
        <RegisterBtn />
        <Price />
        <Course />
        <ContactUs />
      </main>
    </>
  );
}
