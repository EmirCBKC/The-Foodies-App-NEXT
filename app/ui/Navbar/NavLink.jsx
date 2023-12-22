"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Style from "./navLink.module.css";

export default function NavLink({ href, children }) {

    const path = usePathname();

    return (
        <Link className={path.startsWith(href) ? `${Style.active} ${Style.link}` : Style.link} href={href}>{children}</Link>
    )
}
