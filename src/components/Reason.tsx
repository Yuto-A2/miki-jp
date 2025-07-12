import Image from 'next/image';
export default function Reason() {
    return (
        <>
            {/* why mikity japanese */}

            <h2 className="text-lg text-center mt-5 font-bold relative after:content-[''] after:block after:w-50 after:h-[2px]
               after:bg-black after:mx-auto after:mt-1">Why ミキティ Japanese?</h2>
            <div className="flex flex-col mt-4 lg:flex-row lg:items-stretch items-center justify-center">
                <div className="bg-[#B7B1F2] p-3 lg:w-[40%] w-[90%] flex flex-col justify-center">
                    <h3 className="text-center relative after:content-[''] after:block after:w-56 after:h-[2px] after:bg-black after:mx-auto mb-8">Native Osaka Dialect</h3>
                    <p>
                        Do you want to learn the Osaka dialect from someone who&#39;s actually from Osaka?
                    </p>
                    <p>
                        If so, this class is perfect for you.
                    </p>
                    <p>
                        The instructor is a native speaker of the Osaka dialect and will teach you authentic, natural expressions just for you.
                    </p>
                    <p>
                        From everyday conversation to comedic phrases, you&#39;ll enjoy learning while gaining a deeper understanding of the Kansai vibe.
                    </p>
                </div>
                <div className="w-[90%] lg:w-[40%]">
                    <Image
                        src="/osaka.jpg"
                        alt="Beginner Course"
                        className="w-full h-full object-cover"
                        width={300}
                        height={200}
                    />
                </div>
            </div>

            <div className="flex flex-col mt-4 lg:flex-row lg:items-stretch items-center justify-center">
                <div className="bg-[#B7B1F2] p-3 lg:w-[40%] w-[90%] flex flex-col justify-center">
                    <h3 className="text-center relative after:content-[''] after:block after:w-56 after:h-[2px] after:bg-black after:mx-auto mb-8">Anywhere you want to learn</h3>
                    <p>
                        Because the classes are online, you can join from anywhere in the world.
                    </p>
                    <p>
                        You can learn at your own pace and on your own schedule.
                    </p>
                    <p>
                        Whether you&#39;re at home, in a café, or traveling, you&#39;re always welcome to join.
                    </p>
                    <p>
                        No commute, no time wasted—just pure, focused learning.
                    </p>
                    <p>
                        All you need is an internet connection and a passion for learning Japanese!
                    </p>
                </div>
                <div className="w-[90%] lg:w-[40%]">
                    <Image
                        src="/anywhere.jpg"
                        alt="Beginner Course"
                        className="w-full h-full object-cover"
                        width={300}
                        height={200}
                    />
                </div>
            </div>
        </>
    )
}
