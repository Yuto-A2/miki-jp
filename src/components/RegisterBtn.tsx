import Link from "next/link";

export default function RegisterBtn() {
  return (
    <>
      <h2 className="text-lg text-center mt-5 font-bold relative after:content-[''] after:block after:w-50 after:h-[1px]
               after:bg-black after:mx-auto after:mt-1">Register for a free trial class here</h2>
      <div className="text-center mt-3">
        <Link href="#contact">
          <button className="bg-[#FDB7EA] rounded-lg p-4 cursor-pointer hover:opacity-80 hover:-translate-y-1 transition transform duration-300">Contact Us</button>
        </Link>
      </div>
    </>
  )
}
