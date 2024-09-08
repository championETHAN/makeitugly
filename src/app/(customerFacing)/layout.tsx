import { Nav, NavLink } from "@/components/Nav"
export const dynamic = "force-dynamic"

export default function Layout({
    children,
}: Readonly<{
    children:   React.ReactNode
}>) {
    return <>
        <Nav>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/venues">Venues</NavLink>
            <NavLink href="/events">Events</NavLink>
        </Nav>
        <div className="">
            {children}
        </div>
    </>
}