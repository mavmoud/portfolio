import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const copyright = new Date().getFullYear();

  return (
    <footer className="w-[55rem] mx-auto border-t border-zinc-800 pb-8 pt-6 mt-20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row mx-auto">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-6 md:px-0">
            <div
              className={`w-[2rem] h-[2rem] filter blur-[0.1875rem] rounded-[50%] animate-beat bg-white`}
            />
            <p className="text-center font-switzer text-md text-zinc-400">
              © {copyright} Mahmoud M.
            </p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Link
              href="https://github.com/mavmoud"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 flex items-center justify-center rounded-full border border-zinc-800 hover:border-neutral-600 bg-black/50"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/mavmoud"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 flex items-center justify-center rounded-full border border-zinc-800 hover:border-neutral-600 bg-black/50"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:Mahmoud%20M.%3cmm@mahmmk.com%3e"
              className="p-2.5 flex items-center justify-center rounded-full border border-zinc-800 hover:border-neutral-600 bg-black/50"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
