import type { PropsWithChildren } from "react"
import PublicFooter from "~/components/public-footer"
import PublicNavbar from "~/components/public-navbar"

const PublicLayout = ({ children }: PropsWithChildren) => {
    return (
        <div className="flex flex-col min-h-screen">
            <PublicNavbar />
            <main className="grow">
                {children}
            </main>
            <PublicFooter />
        </div>
    )
}

export default PublicLayout