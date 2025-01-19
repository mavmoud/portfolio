import Link from "next/link";
import BlurFade from "@/components/ui/BlurFade";

export default function Hero() {
  return (
    <>
      <BlurFade>
        <div className="w-[46.5rem] h-[fit-content] mb-[6.25rem] text-left flex justify-items-center">
          <div>
            <div className="w-[42rem] h-[fit-content] mb-[3.125rem]">
              <div className="w-[4.8rem] h-[4.8rem] filter blur-[0.375rem] rounded-[50%] animate-beat bg-white" />
            </div>
            <div className="w-[fit-content]  relative flex">
              <div className="w-[42rem] font-gambarino text-[2.25rem] text-white mr-auto ml-auto pb-0 mb-0">
                Hey, I’m Mahmoud
                <br />
                a Software Engineering student at Concordia <br /> University
                based in Montreal, Quebec
              </div>
              <div>
                <img
                  src="/background.png"
                  alt="Background Blur"
                  className="absolute animate-background -top-[17rem] -right-[22rem] opacity-90 w-[44rem] h-[44rem] z-0 pointer-events-none"
                />
              </div>
            </div>
            <div className="w-[46.5rem] mt-8">
              <div className="w-[16.25rem] flex justify-between text-xl font-gambarino text-gray">
                <Link
                  className="hover:text-white"
                  href="https://github.com/mavmoud"
                  target="_blank"
                >
                  Github
                </Link>
                <Link
                  className="hover:text-white"
                  href="https://linkedin.com/in/mavmoud"
                  target="_blank"
                >
                  Linkedin
                </Link>
                <Link
                  className="hover:text-white"
                  href="mailto:Mahmoud%20M.%3cmm@mahmmk.com%3e"
                  target="_blank"
                >
                  Email
                </Link>
              </div>
            </div>
          </div>
        </div>
      </BlurFade>
    </>
  );
}
