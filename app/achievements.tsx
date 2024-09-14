import Image from "next/image";

export default function Achievements() {
  return (
    <div className="relative inset-0 place-content-center justify-items-center grid grid-cols-1 gap-y-20">
      <div>AWS ANZ Deep Racer 2022</div>
      <div>World Robot Olympiad 2019</div>
      <div>World Robot Olympiad 2018</div>
      <div>World Robot Olympiad 2017</div>
      <div>World Robot Olympiad 2016</div>
      <Image
      src="/img.jpg"
      alt="pic"
      width={500}
      height={500}/>
    </div>
  );
}
