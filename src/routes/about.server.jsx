import Layout from '../components/Layout.server';

const About = () => {
	return (
		<Layout>
			<div>
				<h1 className='pl-10 text-4xl font-bold'>About Us</h1>
				<div className="bg-hydro-blue w-2/6 h-1.5 shadow mb-2"></div>
				<div className="my-14 mx-0 w-full text-center">
					<p>
						This is just a generic text to display the option to add single Pages without/with Shopifys CMS.
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
						ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
						ullamco laboris nisi
					</p>
				</div>
			</div>
			<div className="mb-14">
				<h2 className='text-3xl font-semibold'>Our Core Values</h2>
				<div className="bg-hydro-blue w-2/6 h-1.5 shadow mb-2"></div>
				<div className='grid gap-4 mt-7 grid-cols-2 md:grid-cols-3'>
					<div className='group w-full max-w-[300px] h-[300px]'>
						<p className='py-0 px-2.5 text-5xl text-slate-400 font-bold transition-colors group-hover:text-hydro-blue'>01</p>
						<div className='w-16 h-2 bg-hydro-blue group-hover:bg-slate-400 transition-colors -translate-x-[10px] -translate-y-[12]'></div>
						<h3 className='text-2xl tracking-wider'>Mobile First</h3>
						<p className='text-justify py-2 px-4'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
							ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi
						</p>
					</div>
					<div className='group w-full max-w-[300px] h-[300px]'>
						<p className='py-0 px-2.5 text-5xl text-slate-400 font-bold transition-colors group-hover:text-hydro-blue'>02</p>
						<div className='w-16 h-2 bg-hydro-blue group-hover:bg-slate-400 transition-colors -translate-x-[10px] -translate-y-[12]'></div>
						<h3 className='text-2xl tracking-wider'>Growth</h3>
						<p className='text-justify py-2 px-4'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
							ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi
						</p>
					</div>
					<div className='group w-full max-w-[300px] h-[300px]'>
						<p className='py-0 px-2.5 text-5xl text-slate-400 font-bold transition-colors group-hover:text-hydro-blue'>03</p>
						<div className='w-16 h-2 bg-hydro-blue group-hover:bg-slate-400 transition-colors -translate-x-[10px] -translate-y-[12]'></div>
						<h3 className='text-2xl tracking-wider'>Safety</h3>
						<p className='text-justify py-2 px-4'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
							ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi
						</p>
					</div>
					<div className='group w-full max-w-[300px] h-[300px]'>
						<p className='py-0 px-2.5 text-5xl text-slate-400 font-bold transition-colors group-hover:text-hydro-blue'>04</p>
						<div className='w-16 h-2 bg-hydro-blue group-hover:bg-slate-400 transition-colors -translate-x-[10px] -translate-y-[12]'></div>
						<h3 className='text-2xl tracking-wider'>Independence</h3>
						<p className='text-justify py-2 px-4'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
							ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi
						</p>
					</div>
					<div className='group w-full max-w-[300px] h-[300px]'>
						<p className='py-0 px-2.5 text-5xl text-slate-400 font-bold transition-colors group-hover:text-hydro-blue'>05</p>
						<div className='w-16 h-2 bg-hydro-blue group-hover:bg-slate-400 transition-colors -translate-x-[10px] -translate-y-[12]'></div>
						<h3 className='text-2xl tracking-wider'>Accessibility</h3>
						<p className='text-justify py-2 px-4'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
							ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi
						</p>
					</div>
					<div className='group w-full max-w-[300px] h-[300px]'>
						<p className='py-0 px-2.5 text-5xl text-slate-400 font-bold transition-colors group-hover:text-hydro-blue'>06</p>
						<div className='w-16 h-2 bg-hydro-blue group-hover:bg-slate-400 transition-colors -translate-x-[10px] -translate-y-[12]'></div>
						<h3 className='text-2xl tracking-wider'>Honesty</h3>
						<p className='text-justify py-2 px-4'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
							ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi
						</p>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default About