import CourseBtn from "./CourseBtn";
import SectionTitle from "./layouts/SectionTitle";

export default function RegisterBtn() {
  return (
    <>
      <SectionTitle headerTitle="Register for a free trial class here"></SectionTitle>
      <div className="text-center mt-3">
        <CourseBtn href="#contact" title="Contact Us" />
      </div>
    </>
  );
}
