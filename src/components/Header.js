import React, { useState } from 'react';
import logo from '../assets/logo.png';
import locationIcon from '../assets/location.png';


const Header = ({ onLocationClick }) => {
   return (
        <header className="bg-[#a78bfa] p-3 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className='flex'>
                    <img src={logo} className="w-12 h-12" />
                    <h1 className="text-2xl font-bold text-white mt-2">Weather Forecast</h1>
                </div>
                <div className='flex'>
                    <button className="w-12 h-12 mr-3"
                            onClick={onLocationClick}>
                        <img src={locationIcon}/>
                    </button>
                    <form className="relative xl:w-96 flex w-full flex-wrap items-stretch">
                        <input
                            type="search"
                            placeholder="Search city..."
                            className="relative m-0 block flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                        />
                        <button
                            type="submit"
                            className="bg-white text-blue-500 px-4 py-2 rounded-r-md hover:bg-gray-200"
                        >
                            <span
                                className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                                id="basic-addon2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5">
                                    <path
                                        fillRule="evenodd"
                                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                        clipRule="evenodd" />
                                </svg>
                            </span>
                        </button>
                    </form>
                </div>

            </div>
        </header>
    );
};

export default Header;
