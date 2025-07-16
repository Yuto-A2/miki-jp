import Link from "next/link";

type Props = {
  href: string;
  title: string;
};

export default function CourseBtn({ href, title }: Props) {
  return (
    <Link href={href}>
      <a className="inline-block bg-[#FDB7EA] rounded-lg p-4 cursor-pointer hover:opacity-80 hover:-translate-y-1 transition transform duration-300">
        {title}
      </a>
    </Link>
  );
}
