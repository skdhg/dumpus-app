"use client";

import i18next from "i18next";
import { Rubik, JetBrains_Mono } from "next/font/google";
import { CSSProperties } from "react";
import Toaster from "./Toaster";
import SafeArea from "./SafeArea";
import Scripts from "./Scripts";

const sansFont = Rubik({ subsets: ["latin"] });
const monoFont = JetBrains_Mono({ subsets: ["latin"] });

export default function PageStructure({
  children,
}: {
  children: React.ReactNode;
}) {
  const { language: locale = "en", dir = () => "ltr" } = i18next;

  return (
    <html
      lang={locale}
      dir={dir(locale)}
      className={`${sansFont.className} h-full bg-gray-950 text-gray-400`}
      style={
        {
          "--font-mono": monoFont.style.fontFamily,
        } as CSSProperties
      }
    >
      <body className="flex min-h-full flex-col">
        <SafeArea>{children}</SafeArea>
        <Toaster />
      </body>
      <Scripts />
    </html>
  );
}
