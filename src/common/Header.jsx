import React from 'react';

const Header = () => {
    return (
        <>
            <div className='max-w-7xl mx-auto'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-lg font-bold text-gray-500 cursor-pointer hover:text-gray-600'>icon</h1>
                    <ul className='flex gap-10'>
                        <li className='text-lg font-bold text-gray-500 cursor-pointer hover:text-gray-600'>Home</li>
                        <li className='text-lg font-bold text-gray-500 cursor-pointer hover:text-gray-600'>About</li>
                        <li className='text-lg font-bold text-gray-500 cursor-pointer hover:text-gray-600'>Gallery</li>
                        <li className='text-lg font-bold text-gray-500 cursor-pointer hover:text-gray-600'>Contact Us</li>
                    </ul>
                    <button className='text-lg font-bold text-gray-500 cursor-pointer hover:text-gray-600 border py-2 px-5 rounded-full'>Login</button>

                </div>
            </div>

        </>
    );
};

export default Header;