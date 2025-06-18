import Image from "next/image";

export default function Header() {
    return (
        <div className="bg-red-200 h-auto">
            <div className="flex">
                <Image className="rounded-full mr-2 ml-5 mt-2" src="/logo.png" alt="" width={30} height={15} />
                <h1 className="text-lg mt-2">ミキティ Japanese</h1>
            </div>
            <ul className="flex gap-4 justify-center">
                <li className="border-r pr-3">Home</li>
                <li className="border-r pr-3">Course&#9660;</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}
