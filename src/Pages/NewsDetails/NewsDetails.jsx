import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";

const NewsDetails = () => {

    const newses = useLoaderData();
    const { _id } = useParams();
    const news = newses.find(news => news.id === _id);

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>

            <h2 className="text-2xl font-bold mb-3 mt-16">Dragon News</h2>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3 mr-5">
                    <div className=" border p-5 rounded-lg">
                        <img src={news.image_url} alt="" />
                        <h2 className="text-2xl font-bold my-4">{news.title}</h2>
                        <p>{news.details}</p>
                    </div>
                </div>
                <div className="col-span-1">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;