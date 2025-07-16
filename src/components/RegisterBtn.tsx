import CourseBtn from "./CourseBtn";

export default function RegisterBtn() {
  return (
    <>
      <h2 className="text-lg text-center mt-5 font-bold relative after:content-[''] after:block after:w-50 after:h-[1px]
               after:bg-black after:mx-auto after:mt-1">
        Register for a free trial class here
      </h2>
      <div className="text-center mt-3">
        <CourseBtn href="#contact" title="Contact Us" />
      </div>
    </>
  );
}
