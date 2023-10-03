import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="container mx-auto px-5 font-poppins">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;