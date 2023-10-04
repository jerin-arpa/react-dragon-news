import { FcGoogle } from 'react-icons/fc';
import { AiOutlineGithub, AiFillTwitterCircle } from 'react-icons/ai';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';

const RightSideNav = () => {
    return (
        <div>
            {/* Login With */}
            <div className='mb-6'>
                <h2 className='mb-4 text-2xl font-bold pl-4'>Login With</h2>
                <div className=' p-4'>
                    <div>
                        <button className="btn btn-outline mb-4 w-full">
                            <FcGoogle className='text-xl'></FcGoogle>
                            Login with Google
                        </button>
                    </div>
                    <div>
                        <button className="btn btn-outline w-full">
                            <AiOutlineGithub className='text-xl'></AiOutlineGithub>
                            Login with Github
                        </button>
                    </div>
                </div>
            </div>

            {/* Find us on */}
            <div className='mb-6 p-4'>
                <h2 className='mb-4 text-2xl font-bold'>Find Us On</h2>
                <div className='border rounded-lg'>
                    <div>
                        <a href="" className="flex justify-start border-b p-4 gap-3">
                            <BsFacebook className='text-xl'></BsFacebook>
                            Facebook
                        </a>
                    </div>
                    <div>
                        <a href="" className="flex justify-start border-b p-4 gap-3">
                            <AiFillTwitterCircle className='text-2xl'></AiFillTwitterCircle>
                            Twitter
                        </a>
                    </div>
                    <div>
                        <a href="" className="flex justify-start p-4 gap-3">
                            <BsInstagram className='text-xl'></BsInstagram>
                            Instagram
                        </a>
                    </div>
                </div>
            </div>

            {/* Q-Zone */}
            <div className='mb-6 p-4 bg-slate-200 rounded-lg'>
                <h2 className='mb-4 text-2xl font-bold'>Q-Zone</h2>
                <div>
                    <img className='mb-4' src={qZone1} alt="" />
                    <img className='mb-4' src={qZone2} alt="" />
                    <img className='mb-4' src={qZone3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;