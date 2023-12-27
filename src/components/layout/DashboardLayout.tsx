import { Metadata } from "next";
import Image from "next/image";

import { playlists } from "@/assets/data/playlists";
import { Sidebar } from "../blocks/sidebar";
import { Menu } from "../blocks/menu";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";
import { ScrollArea, ScrollBar } from "../ui";
import logo from "@/assets/images/icon.svg";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export const metadata: Metadata = {
  title: "Music App",
  description: "Example music app using the components.",
};

export const DashboardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <main className="h-screen w-screen">
      <div className="flex w-full items-center">
        <h2 className="text-lg font-semibold pl-4">Gaia Homes</h2>
        <Sheet>
          <SheetTrigger className="p-2 lg:hidden ml-6">
            <HamburgerMenuIcon />
          </SheetTrigger>
          <SheetContent className="w-60 p-0" side={"left"}>
          <SheetHeader>
            <h2 className="text-lg font-semibold p-3">Gaia Homes</h2>
          </SheetHeader>
            <Sidebar playlists={playlists} className="block" />
          </SheetContent>
        </Sheet>
        <Menu />
      </div>
      <div className="border-t h-[calc(100%-2.5rem)]">
        <div className="bg-background h-full">
          <div className="flex h-full w-full">
            <Sidebar playlists={playlists} className="w-60 hidden lg:block" />
            <div className="w-full lg:w-[calc(100%-15rem)] lg:border-l">
              <ScrollArea
                aria-orientation="vertical"
                className="h-full px-4 py-6 lg:px-8"
              >
                {children}
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
