
import { FaXmark } from 'react-icons/fa6';

const NotFoundBox = () => {
    return (
        <div className="w-80 mx-auto p-5 flex gap-5 my-5 font-semibold border-2 border-gray-800">
        <div className="w-1/5">
            <FaXmark className="text-gray-100 bg-black rounded-full  w-12 h-12"></FaXmark>
        </div>
        <p>
            No Contact Found Please add Contact from Create Contact Button
        </p>
    </div>
    );
};

export default NotFoundBox;