/* eslint-disable react-hooks/rules-of-hooks */
import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar";


const Main_layout = () => {
    return (
        <div className="max-w-[1300px]  mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main_layout;