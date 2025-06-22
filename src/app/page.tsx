import Header from "@/components/layouts/Header";
import ClassImg from "@/components/ClassImg";
import Reason from "@/components/Reason";
import ClassHour from "@/components/ClassHour";
import RegisterBtn from "@/components/RegisterBtn";
import Price from "@/components/Price";
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
      </main>
    </>
  );
}
