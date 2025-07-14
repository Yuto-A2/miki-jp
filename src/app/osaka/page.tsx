import ClassImg from "@/components/ClassImg";
import Header from "@/components/layouts/Header";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/layouts/Footer";
export default function osakaPage() {
  return (
    <>
      <Header />
      <main>
        <ClassImg />
        <div className="border border-gray-200 w-[90%] md:w-[80%] mx-auto p-4 mt-4 mb-4">
          <h2 className="text-lg text-center mt-5 font-bold relative after:content-[''] after:block after:w-50 after:h-[2px]
               after:bg-black after:mx-auto after:mt-1">Learn Osakan Accent Japanese</h2>
          <div className="mt-4">
            <p>In this course, a teacher from Osaka teaches Osakan accent Japanese.</p>
            <p>Students will have a lot of opportunities to speak it.</p>
          </div>
        </div>
        <ContactUs />
      </main>
      <Footer />
    </>
  )
}
