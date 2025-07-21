import SectionTitle from "./layouts/SectionTitle"
export default function Price() {
    return (
        <>
            <SectionTitle headerTitle="Price"></SectionTitle>
            <div className="text-center">
                <p className="font-bold mt-2">&yen;12,000 per month</p>
                <p className="font-bold">*You will receive one trial lesson for 30 minutes.</p>
            </div>
        </>
    )
}
