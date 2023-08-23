import { Link } from "react-router-dom";


const SideBar = () => {
    return (
        <ul className="flex flex-col gap-5 bg-gray-900  p-5 h-full text-gray-100 ">
            <li><Link to='/'>Contact</Link></li>
            <li><Link to='/charts'>Charts and Maps</Link></li>
        </ul>
    );
};

export default SideBar;