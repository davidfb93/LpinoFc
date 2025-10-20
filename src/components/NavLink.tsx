"use client";

// NextJS
import Link from "next/link";

// HeroUI
import { cn } from "@heroui/react";



export default function NavLink(props: INavLinkProps) {
    // Props
    const { item, pathname } = props;
    const { label, href } = item;

    // Constants
    const isActive = pathname === href || pathname.startsWith(href + "/");

    return (
        <Link
            href={href}
            className={cn(
                "transition-colors duration-300 font-medium hover:text-gray-400 hover:font-semibold",
                isActive ? "text-black font-semibold" : "text-neutral-500"
            )}
        >
            {label}
        </Link>
    );
}