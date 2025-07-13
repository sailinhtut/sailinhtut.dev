import Footer from '../components/footer';
import NavBar from '../components/navbar';

import MouseEffect from '../components/mouse_effect';
import HomeSectionOne from './section_one';
import HomeSectionTwo from './section_two';
import HomeSectionThree from './section_three';
import HomeSectionFour from './section_four';
import ProjectPreviewSection from './section_five';


export default function HomePage() {
	return (
		<>
			<NavBar />

			<main className='bg-background relative'>
				<div className='w-1/2 h-[500px] bg-blue-500 absolute right-0  opacity-100 -z-10'></div>
				<div className='w-1/2 h-[500px] bg-blue-500 absolute bottom-0 left-0 opacity-100 -z-10'></div>

				<HomeSectionOne />
				<HomeSectionTwo />
				<HomeSectionThree />
				<HomeSectionFour />
				<ProjectPreviewSection/>

			
			</main>

			<Footer />
		</>
	);
}
