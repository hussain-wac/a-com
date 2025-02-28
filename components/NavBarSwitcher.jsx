"use client"

import { usePathname } from "next/navigation"
import DefaultTopbar from "./DefaultTopbar"
import AuthNavBar from "./AuthNavBar"

export default function NavBarSwicher () {
    const pathname = usePathname()
    const isAuthRoute =
    pathname.startsWith('/about')

    return isAuthRoute ? <AuthNavBar /> : <DefaultTopbar />
}