"use client";

import { TelegramIcon, TwitterIcon } from "@/components/icons";
import { Clipboard } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const roadmap = [{}];

export default function Home() {
  const copyText = () => {
    navigator.clipboard.writeText(
      "7A9xBYGYFBG2zsiin2rhaKQ147Ejz3B4Sam4dJdpump"
    );
  };
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="flex flex-col gap-16 items-center">
        <div className="text-3xl font-extrabold tracking-tight underline text-green-500">
          🚀 $HDD ROAD TO $10MIL
        </div>
        <div className="z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
          <img
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
            src="/hdd.jpg"
            alt="Next.js Logo"
            width={500}
            height={500}
            priority
          />
        </div>
        <div>
          <div className="flex items-center gap-4">
            <span className="text-lg font-bold">$HDD TOKEN ADDRESS://</span>
            <div className="px-4 flex gap-2 py-2 rounded-lg bg-gray-700">
              <span>7A9xBYGYFBG2zsiin2rhaKQ147Ejz3B4Sam4dJdpump</span>
              <Clipboard
                className="hover:scale-2 hover:cursor-pointer"
                onClick={() => copyText()}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="text-2xl font-extrabold">Follow the PUMP $$$</div>
        <div className="grid grid-cols-2 py-4">
          <Link href={"https://t.me/+uiAuPzuiB245YTMx"}>
            <div className="h-12 w-12">
              <TelegramIcon></TelegramIcon>
            </div>
            <div className="text-lg font-bold">Telegram</div>
          </Link>
          <Link href={"https://x.com/ddcoin1111"}>
            <div className="h-12 w-12">
              <TwitterIcon></TwitterIcon>
            </div>
            <div className="text-lg font-bold">Twitter</div>
          </Link>
        </div>
      </div>
    </main>
  );
}
