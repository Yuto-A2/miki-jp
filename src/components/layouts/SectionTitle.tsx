type props = {
    headerTitle:string
    id?: string;
}
export default function SectionTitle({ headerTitle }: props) {
    return (
        <h2 className="text-lg text-center mt-5 font-bold relative after:content-[''] after:block after:w-50 after:h-[2px]
               after:bg-black after:mx-auto after:mt-1">{headerTitle}</h2>
    )
}
