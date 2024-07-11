"use client";

import { Chart } from "@/components/chart";
import { TelegramIcon, TwitterIcon } from "@/components/icons";
import { MemeGallery } from "@/components/memes";
import { Tokenomics } from "@/components/tokenomics";
import { Clipboard } from "lucide-react";
import Link from "next/link";

const roadmap = [{}];

export default function Home() {
  const copyText = () => {
    navigator.clipboard.writeText(
      "CEMob6eUjVe4MWhcbs6ybNdTCcbU7Y4Yq736bLfLpump"
    );
  };
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <div className="">
        <div className="text-5xl text-center max-w-xl font-extrabold tracking-tight pb-2 pt-16">
          <Link href={'https://dexscreener.com/solana/2tmgdrptmvkalqedddgn7oxaz6msnoz4elfu2g3uznr8'}>POV: You Faded Generational Wealth 3 Times This Month</Link>
        </div>
        <div className="">
          <img
            className="h-full w-full rounded-md relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
            src="/POV.webp"
            alt="$POV baby lets moon this"
            width={500}
            height={500}
          />
        </div>
        <div>
          <div className="flex flex-col items-center gap-4 py-4">
            <span className="text-lg font-bold">$POV TOKEN ADDRESS://</span>
            <div className="px-4 flex gap-2 py-2 text-white rounded-lg bg-gray-700 ">
              <span className="text-sm">CEMob6eUjVe4MWhcbs6ybNdTCcbU7Y4Yq736bLfLpump</span>
              <Clipboard
                className="hover:scale-2 hover:cursor-pointer"
                onClick={() => copyText()}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[400px] pt-8">
        <Chart />
      </div>
      <div className="pt-8">
        <h3 className="text-2xl tracking-tight font-bold">A Bit About the Token</h3>
        <Tokenomics />
      </div>
      <div className="py-4 shadow-lg my-16 border-2 bg-green-500 rounded-md px-8 flex flex-col sm:flex-row items-center gap-8 justify-center">
        <div className="text-2xl font-extrabold">Join The Movement!</div>
        <div className="grid grid-cols-2 py-4 gap-8 items-center">
          <Link href={"https://t.me/POVCTO"} className="flex gap-2">
            <div className="h-6 w-6">
              <TelegramIcon></TelegramIcon>
            </div>
            <div className="text-lg font-bold">Telegram</div>
          </Link>
          <Link href={"https://x.com/POVCATonSOL/"} className="flex gap-2">
            <div className="h-6 w-6">
              <TwitterIcon></TwitterIcon>
            </div>
            <div className="text-lg font-bold">Twitter</div>
          </Link>
        </div>
      </div>


      <div className="py-8">
        <MemeGallery />
      </div>
    </main>
  );
}
