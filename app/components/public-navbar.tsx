import { Form, Link } from 'react-router';
import AppLogo from './app-logo'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { LuSearch } from "react-icons/lu";

const PublicNavbar = () => {
    return (
        <div className='h-16 px-5 bg-gray-800 text-secondary text-sm'>
            <div className="h-full flex max-w-7xl mx-auto items-center gap-5 justify-between">
                <AppLogo className='text-background' to="/" />
                <nav className='grow gap-3 flex items-center justify-center'>
                    <Form action='/forum' className="grow max-w-[400px] bg-gray-700 rounded-sm flex text-gray-300">
                        <Input name='q' required placeholder='Search platform...' className='border-none bg-transparent placeholder:text-gray-400' />
                        <Button variant="ghost" className='focus:bg-transparent hover:bg-transparent hover:text-inherit'><LuSearch /></Button>
                    </Form>
                    <Link to="/forum" className='hover:underline'>Forum</Link>
                    <Link to="/forum" className='hover:underline'>Ask a Question</Link>
                </nav>
                <div className="flex items-center gap-2">
                    <Button variant="outline" className='bg-transparent text-background'>Login</Button>
                    <Button variant="secondary">Register</Button>
                </div>
            </div>
        </div>
    )
}

export default PublicNavbar