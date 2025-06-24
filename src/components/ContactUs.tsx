export default function ContactUs() {
    return (
        <>
            <div className="border-solid border-[1px] border-[#FFDCCC] bg-[#FFDCCC]">
                <h2 className="text-lg mt-10 lg:mt-10 lg:ml-116 font-bold relative after:content-[''] after:block after:w-25 after:h-[2px]
               after:bg-black after:mt-1">Contact Us</h2>
                <h2 className="text-lg mt-20 lg:ml-116 font-bold relative after:content-[''] after:block after:w-30 after:h-[2px]
               after:bg-black after:mt-1">Contact Form</h2>
                <form className="flex flex-col justify-center items-center mt-4" action="">
                    <label htmlFor="name">Name</label>
                    <input className="border bg-white w-[300px] lg:w-[390px] h-[30px]  mb-4 focus:outline-none focus:ring-[#FFDCCC] focus:shadow-[11px_13px_24px_-5px_#dd7878]" type="text" id="name" name="name" required />
                    <label htmlFor="email">Email</label>
                    <input className="border bg-white w-[300px] lg:w-[390px] h-[30px] mb-4 focus:outline-none focus:ring-[#FFDCCC] focus:shadow-[11px_13px_24px_-5px_#dd7878]" type="email" id="email" name="email" required />
                    <label htmlFor="msg">Message</label>
                    <textarea className="border bg-white w-[300px] lg:w-[390px] h-[70px] focus:outline-none focus:ring-[#FFDCCC] focus:shadow-[11px_13px_24px_-5px_#dd7878]" name="msg" id="msg"></textarea>
                    <button className="border w-[90px] h-[30px] mt-4 rounded-2xl bg-[#D9D9D9] cursor-pointer hover:opacity-80 hover:-translate-y-1 transition transform duration-300">Send</button>
                </form>
            </div>
        </>
    )
}
