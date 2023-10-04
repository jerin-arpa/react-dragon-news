import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const SignUp = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div className="flex justify-center mt-14 ">
                <div className="bg-slate-200 rounded-lg w-full md:w-3/4 lg:w-1/2 p-8">
                    <h2 className="text-3xl font-bold text-center pt-7">SignUp Now</h2>
                    <div className="flex justify-center">
                        <hr className="bg-black h-1 mt-6 w-1/2" />
                    </div>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Give photo url" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
                        </div>

                        <div className="flex gap-3">
                            <input type="checkbox" name="" id="" />
                            <p>Accept Terms & Conditions</p>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-neutral">Login</button>
                        </div>

                        <div className="flex justify-center mt-5">
                            <h2>Already have an account? <Link to='/login' className="text-red-500 underline font-bold">Login</Link></h2>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;