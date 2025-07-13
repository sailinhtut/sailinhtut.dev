import TypingEffect from '../components/typing_effect';

export default function LoadingPage() {
	return (
		<div className='bg-background min-h-screen flex flex-col justify-center items-center'>
			{/* <p className='text-lg md:text-2xl text-gray-700'> */}
				<TypingEffect text='Please Wait ...' speed={30} />
			{/* </p> */}
		</div>
	);
}
