import Link from "next/link";

export default function ClassImg() {
    return (
        <>
            {/* background image */}
            <div className="md:w-[80%] w-[90%] h-100 bg-[url('/onlineClass.jpg')] bg-cover bg-center mt-3 mx-auto relative">
                <p className="absolute text-white font-bold text-lg left-1/2 -translate-x-1/2 top-10">The free trial class online.</p>
                <Link href="#contact">
                    <button className="absolute bg-gray-300 left-1/2 -translate-x-1/2 p-2 lg:top-20 top-30 cursor-pointer hover:opacity-80">Get Started for Free</button>
                </Link>
            </div>
        </>
    )
}
