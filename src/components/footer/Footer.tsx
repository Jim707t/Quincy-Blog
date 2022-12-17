import React from 'react'
import { useEffect, useState } from 'react';

export default function Footer() {

	const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
  });

  return (
    <footer className="p-4 bg-white  md:px-6 md:py-8 bg-gray-100">
		<div className="sm:flex sm:items-center sm:justify-between">
			<a href="#" target="_blank" className="flex items-center mb-4 sm:mb-0">
				<img src="https://flowbite.com/docs/images/logo.svg" className="mr-4 h-8" alt="Flowbite Logo" />
			</a>
			<ul className="flex flex-wrap items-center mb-6 sm:mb-0">
				<li>
					<a href="#" className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">About</a>
				</li>
				<li>
					<a href="#" className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Privacy
						Policy</a>
				</li>
				<li>
					<a href="#"
						className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Licensing</a>
				</li>
				<li>
					<a href="#" className="text-sm text-gray-500 hover:underline dark:text-gray-400">Contact</a>
				</li>
			</ul>
		</div>
		<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
		<span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022 - {dateFormatter.format(currentDate)} <a href="https://jimquincy.tech" target="_blank" className="hover:underline">Jim Quincy</a>. All Rights Reserved
         </span>
	</footer>

  )
}
