import React from 'react'
import { Link, useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();
    const onlogOut = () => {
        navigate("/");
    }
    return (
        <div className='bg-amber-600 w-full h-full justify-around flex items-center mt-20'>
            <p>home</p>
            <Link to="/Expenses"  >
                <p className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded '>Expenses</p>
            </Link>
        </div>
    )
}

export default Home