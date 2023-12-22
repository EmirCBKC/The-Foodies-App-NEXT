import Link from "next/link";
import Image from "next/image";

import logoImg from "@/assets/logo.png";
import Style from "./navbar.module.css";
import NavLink from "./NavLink";

export default function Navbar() {

    return (
        <header className={Style.header}>
            <Link className={Style.logo} href="/">
                <Image src={logoImg.src} alt="logo" width={500} height={500} priority />
                NextLevel Food
            </Link>
            <nav className={Style.nav}>
                <ul>
                    <li >
                        <NavLink href={"/meals"}>Browse Meals</NavLink>
                    </li>
                    <li >
                        <NavLink href={"/community"}>Foodies Community</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
