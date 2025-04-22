import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
import BlurFade from "@/components/ui/blur-fade";

export default function Header() {
  return (
    <div className="mx-10 sm:mt-28 mt-10">
      <header className="max-w-3xl mx-auto">
        <BlurFade>
          <div className="flex items-center w-full justify-between">
            <Link href="/">
              <Image
                src={logo}
                width={72}
                height={72}
                alt="Logo"
                className="w-14 h-14 sm:w-18 sm:h-18 object-contain"
              />
            </Link>
            <div className="flex items-center sm:gap-7 gap-5 font-gambarino sm:text-2xl text-xl text-gray ">
              <Link className="hover:text-white" href="/projects">
                Projects
              </Link>
              <Link className="hover:text-white" href="/chat">
                Chat
              </Link>
            </div>
          </div>
        </BlurFade>
      </header>
    </div>
  );
}
