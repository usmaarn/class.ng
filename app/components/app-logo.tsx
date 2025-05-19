import { Link, type LinkProps } from 'react-router'
import { cn } from '~/lib/utils'

const AppLogo = ({ className, ...props }: LinkProps) => {
    return (
        <Link className={cn("text-lg font-bold", className)} {...props}>ClassNG</Link>
    )
}

export default AppLogo