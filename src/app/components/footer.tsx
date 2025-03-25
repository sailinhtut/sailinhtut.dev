'use client';
import { Facebook, Github, Linkedin } from 'lucide-react';
import telegranIcon from '../public/telegram.svg';
import Image from 'next/image';
import { BsTelegram } from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa';
import { RiTwitterXLine } from 'react-icons/ri';
import Link from 'next/link';

export default function Footer() {
	return (
		<footer className='w-full min-h-[300px] bg-[#101218] text-white flex flex-col justify-between'>
			<div className='flex flex-col-reverse md:flex-row  justify-between'>
				<div className='w-full md:w-1/3 flex flex-col items-start p-4 md:p-10'>
					<p className='text-2xl font-medium'>Sai Lin Htut</p>
					<p>Software Engineer</p>
					<p className='text-sm mt-3 text-slate-500'>
						Ready To Serve Your Great Idea.<br></br>Let's Build The World Together
						Right Away.
					</p>

					<div className='mt-4 flex flex-row gap-2'>
						<a href='https://www.facebook.com/share/19mZSMo71f/' target='_blank'>
							<Facebook
								className='text-white rounded-lg bg-gray-50 p-2 bg-opacity-15 hover:bg-[#1877F2] hover:text-white duration-300 transition-colors'
								size={35}
							/>
						</a>
						<a href='https://x.com/sailinhtut' target='_blank'>
							<RiTwitterXLine
								className='text-white rounded-lg bg-gray-50 p-2 bg-opacity-15 hover:bg-black hover:text-white duration-300 transition-colors'
								size={35}
							/>
						</a>
						<a href='https://www.linkedin.com/in/sai-lin-htut' target='_blank'>
							<Linkedin
								className='text-white rounded-lg bg-gray-50 p-2 bg-opacity-15 hover:bg-[#0077B5] hover:text-white duration-300 transition-colors'
								size={35}
							/>
						</a>
						<a href='https://github.com/sailinhtut' target='_blank'>
							<Github
								className='text-white rounded-lg bg-gray-50 p-2 bg-opacity-15 hover:bg-[#0B1D38] hover:text-white duration-300 transition-colors'
								size={35}
							/>
						</a>
						<a href='https://t.me/sailinhtut' target='_blank'>
							<BsTelegram className='size-[35px] text-white bg-gray-50 p-2 bg-opacity-15 hover:bg-[#29ABED] hover:text-white duration-300 transition-colors rounded-lg' />
						</a>
						<a href='https://www.tiktok.com/@jakewilson808' target='_blank'>
							<FaTiktok className='size-[35px] text-white bg-gray-50 p-2 bg-opacity-15 hover:bg-black hover:text-white duration-300 transition-colors rounded-lg' />
						</a>
					</div>
				</div>
				<div className='w-full md:w-1/3 flex flex-col items-start p-4 md:p-10 bg-amber-'>
					<div className='flex flex-col '>
						<p className='text-lg'>Pages</p>
						<Link href='/' className='fancy-link text-sm'>
							Goto Home
						</Link>
						<Link href='/service' className='fancy-link text-sm'>
							Available Services
						</Link>
						<Link href='/contact' className='fancy-link text-sm'>
							Contact Me
						</Link>
					</div>
				</div>
			</div>

			<div className='bg-black/20 text-white text-center py-1 '>
				<p className='text-xs'>
					&copy; {new Date().getFullYear()} Sai Lin Htut Inc. All Rights Reserved.
				</p>
			</div>
		</footer>
	);
}
