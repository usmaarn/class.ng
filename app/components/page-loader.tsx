import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { motion } from "motion/react";

const PageLoader = ({ loading }: { loading?: boolean; }) => {

    if (!loading) {
        return null;
    }

    return (
        <motion.div className='fixed top-0 left-0 w-screen h-screen bg-white flex items-center justify-center'>
            <div className="">
                <AiOutlineLoading3Quarters className="animate-spin size-8 text-gray-500" />
            </div>
        </motion.div>
    )
}

export default PageLoader