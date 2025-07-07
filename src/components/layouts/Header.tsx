'use client';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const triggerRef = useRef<HTMLDivElement>(null); // Hover trigger element
    const modalRef = useRef<HTMLDivElement>(null);   // Modal

    // Close modal when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            const target = event.target as Node;
            if (
                modalRef.current &&
                !modalRef.current.contains(target) &&
                triggerRef.current &&
                !triggerRef.current.contains(target)
            ) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className="bg-red-200 h-auto">
            <div className="flex items-center">
                <Image
                    className="rounded-full mr-2 ml-5 mt-2"
                    src="/logo.png"
                    alt="logo"
                    width={30}
                    height={15}
                />
                <h1 className="text-lg mt-2">ミキティ Japanese</h1>
            </div>

            <ul className="flex gap-4 justify-center">
                <li className="border-r pr-3">Home</li>

                <div
                    className="relative border-r pr-3"
                    onMouseEnter={() => setIsOpen(true)}
                    ref={triggerRef}
                >
                    <li className="cursor-pointer flex items-center gap-1">
                        Course <span className="text-xs">&#9660;</span>
                    </li>
                </div>

                {/* Modal */}
                {isOpen && (
                    <div
                        ref={modalRef}
                        className="absolute top-[72px] left-1/2 -translate-x-1/2 w-[900px] bg-black text-white p-6 shadow-lg z-50"
                    >
                        <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 w-0 h-0 
                  border-l-[10px] border-r-[10px] border-b-[10px] 
                  border-l-transparent border-r-transparent border-b-black"></div>
                        {/* × Button */}
                        <div className="flex justify-end">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white text-2xl font-bold hover:text-red-400 cursor-pointer"
                                aria-label="close"
                            >
                                ×
                            </button>
                        </div>

                        <div className="grid grid-cols-4 gap-6 mt-2">
                            <div>
                                <img
                                    src="/img/elementary.jpg"
                                    alt="Osaka Dialog Course"
                                    className="mb-2 w-full h-auto"
                                />
                                <h3 className="font-bold border-b border-red-500 mb-2 pb-1">
                                    Osaka Dialog Course
                                </h3>
                            </div>

                            <div>
                                <img src="/img/middle.jpg" alt="Beginner Course" className="mb-2 w-full h-auto" />
                                <h3 className="font-bold border-b border-red-500 mb-2 pb-1">Beginner Course</h3>
                            </div>
                            <div>
                                <img src="/img/highschool.jpg" alt="Intermediate Course" className="mb-2 w-full h-auto" />
                                <h3 className="font-bold border-b border-red-500 mb-2 pb-1">Intermediate Course</h3>
                            </div>
                            <div>
                                <img src="/img/online.jpg" alt="Advance Course" className="mb-2 w-full h-auto" />
                                <h3 className="font-bold border-b border-red-500 mb-2 pb-1">Advance Course</h3>
                            </div>
                        </div>
                    </div>
                )}

                <li>Contact</li>
            </ul>
        </header>
    );
}
