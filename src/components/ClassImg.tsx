export default function ClassImg() {
    return (
        <>
            {/* background image */}
            <div className="w-[80%] h-150 bg-[url('/onlineClass.jpg')] bg-cover bg-center mt-3 mx-auto relative">
                <p className="absolute text-white text-lg left-1/2 -translate-x-1/2 top-20">The free trial class online.</p>
                <button className="absolute bg-gray-300 left-1/2 -translate-x-1/2 p-2 top-32 cursor-pointer hover:opacity-80">Get Started for Free</button>
            </div>
        </>
    )
}
