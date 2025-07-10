'use client';

import { useState } from "react";

export default function ContactUs() {
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    async function handleForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setSuccessMessage("");
        setErrorMessage("");

        const form = e.currentTarget;

        const contactForm = {
            userName: (form.elements.namedItem("name") as HTMLInputElement).value,
            userEmail: (form.elements.namedItem("email") as HTMLInputElement).value,
            userMsg: (form.elements.namedItem("msg") as HTMLTextAreaElement).value,
        };

        try {
            const res = await fetch(`/api/email`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(contactForm)
            });

            if (res.ok) {
                setSuccessMessage("You sent the message successfully!");
                form.reset();
                setTimeout(() => setSuccessMessage(""), 5000);
            } else {
                const errorText = await res.text();
                setErrorMessage(`Failed to send: ${errorText}`);
                setTimeout(() => setErrorMessage(""), 5000);
            }
        } catch (err) {
            console.error(err);
            setErrorMessage("A network error occurred.");
        }
    }

    return (
        <div className="border-solid border-[1px] border-[#FFDCCC] bg-[#FFDCCC]">
            <h2 className="text-center text-lg mt-10 font-bold relative after:content-[''] after:block after:w-30 after:h-[2px]
               after:bg-black after:mt-1 after:mx-auto" id="contact">Contact Form</h2>

            {successMessage && <p className="text-green-600 text-center mt-2">{successMessage}</p>}
            {errorMessage && <p className="text-red-600 text-center mt-2">{errorMessage}</p>}

            <form onSubmit={handleForm} className="flex flex-col justify-center items-center mt-4" action="">
                <label htmlFor="name">Name</label>
                <input className="border bg-white w-[300px] lg:w-[390px] h-[30px]  mb-4 focus:outline-none focus:ring-[#FFDCCC] focus:shadow-[11px_13px_24px_-5px_#dd7878]" type="text" id="name" name="name" required />
                <label htmlFor="email">Email</label>
                <input className="border bg-white w-[300px] lg:w-[390px] h-[30px] mb-4 focus:outline-none focus:ring-[#FFDCCC] focus:shadow-[11px_13px_24px_-5px_#dd7878]" type="email" id="email" name="email" required />
                <label htmlFor="msg">Message</label>
                <textarea className="border bg-white w-[300px] lg:w-[390px] h-[70px] focus:outline-none focus:ring-[#FFDCCC] focus:shadow-[11px_13px_24px_-5px_#dd7878]" name="msg" id="msg" required></textarea>
                <button className="mb-3 border w-[90px] h-[30px] mt-4 rounded-2xl bg-[#D9D9D9] cursor-pointer hover:opacity-80 hover:-translate-y-1 transition transform duration-300">Send</button>
            </form>
        </div>
    );
}
