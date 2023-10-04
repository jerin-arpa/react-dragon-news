import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);

    return (
        <div>
            <h2 className="text-2xl font-bold">All Categories</h2>
            <div className="mt-3">
                {
                    categories.map(category => <Link
                        className="block text-xl mb-3 p-2 hover:bg-slate-200 hover:rounded-lg hover:pl-4" to={`/categories/${category.id}`}
                        key={category.id}>{category.name}</Link>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;