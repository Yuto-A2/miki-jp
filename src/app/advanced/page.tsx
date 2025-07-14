import ClassImg from "@/components/ClassImg";
import Header from "@/components/layouts/Header";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/layouts/Footer";
export default function advancedPage() {
    return (
        <>
            <Header />
            <main>
                <ClassImg />
                <div className="border border-gray-200 w-[90%] md:w-[80%] mx-auto p-4 mt-4 mb-4">
                    <h2 className="text-lg text-center mt-5 font-bold relative after:content-[''] after:block after:w-50 after:h-[2px]
               after:bg-black after:mx-auto after:mt-1">Polish Your Japanese</h2>
                    <div className="mt-4">
                        <p>This advanced class is for learners aiming to achieve natural and confident communication in Japanese.</p>
                        <p>Through debates, essay writing, and advanced reading materials, you will refine your language skills to near-native proficiency.</p>
                    </div>
                </div>
                <ContactUs />
            </main>
            <Footer />
        </>
    )
}
