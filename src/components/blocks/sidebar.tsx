import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DashboardIcon } from "@radix-ui/react-icons";
import { Playlist } from "@/assets/data/playlists";
import { Building, LayoutDashboard } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { getMenuData } from "@/assets/data/menu";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  playlists: Playlist[];
}

export function Sidebar({ className, playlists }: SidebarProps) {
  const menudata = getMenuData();
  return (
    <ScrollArea className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          {/* <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Dashboard
          </h2> */}
          <div className="space-y-1 w-full">
            {menudata.map((menu) => (
              <Accordion
                className="w-full"
                key={menu.title}
                type="single"
                collapsible
                defaultValue="Properties"
              >
                <AccordionItem className="border-none" value={menu.title}>
                  <AccordionTrigger className="py-2 px-3 w-full rounded-md data-[state='open']:bg-muted hover:bg-muted">
                    <div className="flex gap-2 items-center">
                      {menu.icon}
                      {menu.title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-6 p-1 w-full">
                    {menu.items.map((item) => (
                      <Button
                        variant={"ghost"}
                        key={item.title}
                        size={"sm"}
                        className="px-3 py-2  w-full justify-start truncate"
                      >
                        {item.title}
                      </Button>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}
