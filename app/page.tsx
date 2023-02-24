import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nikko Abucejo",
  description: "Engineer • Developer • Designer",
  icons: "/favicon.ico",
};

const Page = () => {
  return (
    <main>
      <section className="flex min-h-screen items-center justify-center p-4">
        <div>
          <b className="uppercase">I am</b>
          <h1 className="text-5xl font-bold uppercase">Nikko Abucejo</h1>
          <p className="text-sm uppercase">Engineer • Developer • Designer</p>
          <ul className="mt-4 flex items-center gap-4">
            <li>
              <Link
                href="https://github.com/nikkoabucejo"
                target="_blank"
                className="transition-color flex items-center gap-2 duration-200 ease-in tablet:opacity-50 tablet:hover:opacity-100">
                <Image
                  alt="Github"
                  src="/assets/icons/github.svg"
                  width={24}
                  height={24}
                />
                <span className="font-medium uppercase">Github</span>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/nikkoabucejo"
                target="_blank"
                className="transition-color flex items-center gap-2 duration-200 ease-in tablet:opacity-50 tablet:hover:opacity-100">
                <Image
                  alt="LinkedIn"
                  src="/assets/icons/linkedin.svg"
                  width={24}
                  height={24}
                />
                <span className="font-medium uppercase">LinkedIn</span>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Page;
