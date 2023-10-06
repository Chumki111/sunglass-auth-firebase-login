
import { useEffect, useState } from "react";
import {  useLoaderData, useParams } from "react-router-dom";
import { FaArrowRight } from 'react-icons/fa';
import toast from "react-hot-toast";

const SingleCard = () => {
    const [sunglass, setSunglasses] = useState({})
    const { id } = useParams()
    
    const sunglasses = useLoaderData()
    const { name, description, image, price } = sunglass
    
    useEffect(() => {
        const findSunglass = sunglasses?.find(sunglass => sunglass.id == id)
        setSunglasses(findSunglass)
       
    }, [id, sunglasses])

    const handleToBuyBtn=() =>{
            const addProductLocalStorage = []
            const productItems = JSON.parse(localStorage.getItem('product'))

            if(!productItems){
                addProductLocalStorage.push(sunglass)
                localStorage.setItem('product',JSON.stringify(addProductLocalStorage))
                toast.success('Successfully buy product!')
            } else{
                addProductLocalStorage.push(...productItems,sunglass)
                localStorage.setItem('product',JSON.stringify(addProductLocalStorage))
                toast.success('Successfully buy product!')
            }
    }
    return (
        <div>
            <img src="https://capricathemes.com/opencart/OPC09/OPC090220/image/cache/catalog/main-banner-1-1903x680.jpg" alt="" />
           <div className="flex justify-center items-center mt-10 bg-pink-50 px-6 py-10">
           <div className="relative flex w-full max-w-[52rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={image}
                        alt="image"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                        startups
                    </h6>
                    <h4 className="mb-2 block font-sans text-3xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {name}
                    </h4>
                    <p className="mb-8 block font-sans text-lg font-normal leading-relaxed text-gray-700 antialiased">
                        {description}
                    </p>
                    <p className="mb-8 block font-sans text-xl font-medium leading-relaxed text-gray-700 antialiased">
                       ${price}
                    </p>

                    <a className="inline-block" href="#">
                        <button onClick={(handleToBuyBtn)}
                            className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            Buy Now
                            
                            <FaArrowRight></FaArrowRight>
                        </button>
                    </a>
                </div>
            </div>
           </div>
        </div>
    );
};

export default SingleCard;