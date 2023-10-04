import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="flex bg-slate-200 p-3 rounded-lg mb-5">
            <button className="btn text-white" style={{ backgroundColor: '#D72050' }}>Breaking News</button>
            <Marquee pauseOnHover={true} speed={100} className="text-xl text-black">
                Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
            </Marquee>
        </div>
    );
};

export default BreakingNews;