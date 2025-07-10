import Link from "next/link"

export default function CourseBtn({ href }: { href: string }) {
    return (
        <Link href={href}>
            <button className="bg-[#FDB7EA] rounded-lg p-4 cursor-pointer hover:opacity-80 hover:-translate-y-1 transition transform duration-300">More Details</button>
        </Link>
    )
}
