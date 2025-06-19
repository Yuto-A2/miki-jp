import Header from "@/components/layouts/Header";
import ClassImg from "@/components/ClassImg";
import Reason from "@/components/Reason";
import ClassHour from "@/components/ClassHour";
import RegisterBtn from "@/components/RegisterBtn";
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <ClassImg />
        <Reason />
        <ClassHour />
        <RegisterBtn />
      </main>
    </>
  );
}
