import { Outlet, useLocation } from "react-router-dom";
import SideBar from "../components/SideBar";
import Header from "../components/Header";


const Main = () => {
    const location = useLocation();
    console.log(location.pathname)
    
    return (
        <div>
            <Header title={location.pathname=='/charts'?"Charts and Maps":"Contact Page"}></Header>
            <div className='min-h-[calc(100vh-137px)]'>
                <div className="flex gap-5">
                    <div className="w-1/6 min-h-[calc(100vh-78px)] ">
                        <SideBar></SideBar>
                    </div>
                    <div className="w-5/6">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;