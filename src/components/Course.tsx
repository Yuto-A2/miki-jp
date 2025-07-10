import Image from 'next/image';

export default function Course() {
    return (
        <>
            <h2 className="text-lg text-center mt-4 font-bold relative after:content-[''] after:block after:w-20 after:h-[2px] after:bg-black after:mx-auto after:mt-1">
                Course
            </h2>

            <div className="mb-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-screen-xl mx-auto mt-6 items-stretch">
                {/* Card */}
                {[
                    {
                        title: 'Osaka Dialect Course',
                        image: '/osaka.jpg',
                        paragraphs: [
                            "In the Osaka Dialect Course, you'll learn natural Osaka dialect from a teacher who is originally from Osaka.",
                            "Why not give it a try and learn this unique dialect that's becoming increasingly popular among Japanese learners?"
                        ]
                    },
                    {
                        title: 'Beginner Course',
                        image: '/hiragana.jpg',
                        paragraphs: [
                            `"I'm interested in learning Japanese, but I don't know where to start."`,
                            "If that sounds like you, this beginner course is the perfect place to begin.",
                            "We'll support you step by step as you build a strong foundation in reading, writing, listening, and speaking.",
                            "Let's enjoy learning together and gain confidence along the way!"
                        ]
                    },
                    {
                        title: 'Intermediate Course',
                        image: '/japan.jpg',
                        paragraphs: [
                            "This course is perfect for learners who already know the basics and want to improve their Japanese even further.",
                            "You'll learn more complex grammar, expand your vocabulary, and practice real-life conversations.",
                            "Let's take your Japanese to the next level together!"
                        ]
                    },
                    {
                        title: 'Advance Course',
                        image: '/news.jpg',
                        paragraphs: [
                            "This advanced course is designed for learners who want to express their thoughts and opinions in Japanese with confidence and depth.",
                            "Through news articles, essays, and discussions, you'll learn more sophisticated grammar and vocabulary.",
                            "Take your Japanese to a near-native level and speak with fluency and nuance."
                        ]
                    }
                ].map((course, i) => (
                    <div key={i} className="flex flex-col h-full border border-black">
                        <div className="h-48 w-full">
                            <Image
                                src={course.image}
                                alt={course.title}
                                className="h-full w-full object-cover"
                                width={300}
                                height={200}
                            />
                        </div>
                        <div className="p-4 flex flex-col flex-1">
                            <h3 className="text-center font-bold mb-3 relative after:content-[''] after:block after:w-32 after:h-[2px] after:bg-black after:mx-auto">
                                {course.title}
                            </h3>
                            {course.paragraphs.map((text, idx) => (
                                <p key={idx} className="mb-2">{text}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
