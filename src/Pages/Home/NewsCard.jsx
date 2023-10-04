import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { _id, title, image_url, details } = news;

    return (
        <div className='p-5 mb-5 border rounded-lg'>
            <img className='w-full' src={image_url} alt="" />
            <h2 className='text-2xl font-bold my-4'>{title}</h2>
            <div className='mb-5'>
                {
                    details.length > 200 ? <p>{details.slice(0, 200)} <Link to={`/news/${_id}`} className='text-blue-600 font-bold'>Read More....</Link></p>
                        : <p>{details}</p>
                }
            </div>
            <hr />
            <div className='mt-5'>
                <div className="rating">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
            </div>
        </div>
    );
};

NewsCard.propTypes = {
    news: PropTypes.object,
};

export default NewsCard;