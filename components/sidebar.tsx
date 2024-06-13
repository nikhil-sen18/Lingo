import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SidebarItem } from "./sidebar-item";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";

type Props = {
    className?: string;
}

export const Sidebar = ({ className }: Props) => {
    return (
        <div className={cn("flex h-full lg:w-[256px] lg:fixed top-0 left-0 border-r-2 flex-col",
            className,)}
        >
            <Link href="/learn">
                <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                    <Image src="/mascot.svg" height={40} width={40} alt="Mascot" />
                    <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
                        Lingo
                    </h1>
                </div>
            </Link>
            <div className="flex flex-col gap-y-2 flex-1">
                <SidebarItem
                    href="/learn"
                    label="Learn"
                    iconSrc="/learn.svg"
                />
            </div>
            <div className="flex flex-col gap-y-2 flex-1">
                <SidebarItem
                    href="/leaderboard"
                    label="Leaderboard"
                    iconSrc="/leaderboard.svg"
                />
            </div>
            <div className="flex flex-col gap-y-2 flex-1">
                <SidebarItem
                    href="/quests"
                    label="quests"
                    iconSrc="/quests.svg"
                />
            </div>
            <div className="flex flex-col gap-y-2 flex-1">
                <SidebarItem
                    href="/shop"
                    label="shop"
                    iconSrc="/shop.svg"
                />
            </div>
            <div className="p-4">
                <ClerkLoading>
                    <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
                </ClerkLoading>
                <ClerkLoaded>
                    <UserButton afterSignOutUrl="/" />
                </ClerkLoaded>
            </div>
        </div>
    )
}