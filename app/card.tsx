import React from 'react';
import Image from 'next/image';

const Card = ({ title, description, imageSrc, siteUrl }: { title: string, description: string, imageSrc: string, siteUrl: string }) => {
  return (
    <div className="p-4 m-4 rounded-xl shadow-xl bg-slate-400 dark:bg-black">
      <h1 className="flex justify-center mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 sm: text-2xl md:text-3xl lg:text-4xl dark:text-white">
        {title}
      </h1>
      <p className="flex justify-center text-lg font-normal lg:text-xl px-4 dark:text-slate-300">
        {description}
      </p>
      <div className="flex flex-col justify-center items-center">
        <Image
          className="max-h-[200px] w-auto mb-6"
          src={imageSrc}
          alt="Hockey Teeth"
          width={1000}  // no-op, included to meet requirements of Image component
          height={1000} // no-op, included to meet requirements of Image component
          priority={true}
          style={{ objectFit: 'contain' }} // allows the image to maintain original aspect ratio
        />
        <a href={siteUrl} className="inline-flex items-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            Visit the site
            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Card;