'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);     //   Modal state
  const [menuOpen, setMenuOpen] = useState(false); // humberger menu state
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const triggerRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

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
    <header className="bg-red-200 sm:h-auto h-[80px]">
      <Link href={'/'}>
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
      </Link>

      <div
        className="w-[100px] h-[100px] fixed top-0 right-0 z-30 cursor-pointer flex justify-center items-center md:hidden"
        onClick={toggleMenu}
      >
        <span className={`absolute w-[50px] h-[4px] bg-[#333] transition-all duration-300 ease-in-out ${menuOpen ? 'top-[50px] rotate-[-45deg]' : 'top-[36px]'}`} />
        <span className={`absolute w-[50px] h-[4px] bg-[#333] transition-all duration-300 ease-in-out ${menuOpen ? 'opacity-0 top-[50px]' : 'top-[50px]'}`} />
        <span className={`absolute w-[50px] h-[4px] bg-[#333] transition-all duration-300 ease-in-out ${menuOpen ? 'top-[50px] rotate-[45deg]' : 'top-[64px]'}`} />
      </div>

      <nav
        id="nav"
        className={`${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          } transition-opacity duration-500 ease-in-out fixed top-0 left-0 w-full h-screen bg-[#008087] text-center z-20 md:opacity-100 md:visible md:static md:h-auto md:bg-transparent`}
      >
        <ul className="flex flex-col md:flex-row gap-4 justify-center items-center mt-24 md:mt-0">

          <li className="lg:border-r lg:pr-3">
            <Link href="/">Home</Link>
          </li>

          {/* Course メニュー */}
          <li className="cursor-pointer">
            {/* スマホ表示 */}
            <div className="md:hidden">
              <span>Course</span>
              {menuOpen && (
                <ul className="flex flex-col gap-2 mt-2 text-black">
                  <li>Osaka Dialog Course</li>
                  <li>Beginner Course</li>
                  <li>Intermediate Course</li>
                  <li>Advance Course</li>
                </ul>
              )}
            </div>

            {/* PC表示 */}
            <div
              className="relative hidden md:block"
              onMouseEnter={() => setIsOpen(true)}
              ref={triggerRef}
            >
              <span className="flex items-center gap-1 lg:border-r lg:pr-3">
                Course <span className="text-xs">&#9660;</span>
              </span>

              {isOpen && (
                <div
                  ref={modalRef}
                  className="absolute top-[40px] left-1/2 -translate-x-1/2 w-[900px] bg-black text-white p-6 shadow-lg z-50"
                >
                  <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 w-0 h-0 
                      border-l-[10px] border-r-[10px] border-b-[10px] 
                      border-l-transparent border-r-transparent border-b-black"></div>

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
                      <Image
                        src="/osaka.jpg"
                        alt="Osaka Dialog Course"
                        className="mb-2 w-full h-48 object-cover"
                        width={300}
                        height={200}
                      />
                      <h3 className="font-bold border-b border-red-500 mb-2 pb-1">Osaka Dialog Course</h3>
                    </div>
                    <div>
                      <Image
                        src="/hiragana.jpg"
                        alt="Beginner Course"
                        className="mb-2 w-full h-48 object-cover"
                        width={300}
                        height={200}
                      />
                      <h3 className="font-bold border-b border-red-500 mb-2 pb-1">Beginner Course</h3>
                    </div>
                    <div>
                      <Image
                        src="/japan.jpg"
                        alt="Intermediate Course"
                        className="mb-2 w-full h-48 object-cover"
                        width={300}
                        height={200}
                      />
                      <h3 className="font-bold border-b border-red-500 mb-2 pb-1">Intermediate Course</h3>
                    </div>
                    <div>
                      <Image
                        src="/news.jpg"
                        alt="Advance Course"
                        className="mb-2 w-full h-48 object-cover"
                        width={300}
                        height={200}
                      />
                      <h3 className="font-bold border-b border-red-500 mb-2 pb-1">Advance Course</h3>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </li>

          <li className="lg:border-r lg:pr-3">
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
