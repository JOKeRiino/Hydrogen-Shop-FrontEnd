import iphone from '../img/iphone_mobile.webp';

const MobileBox = () => {
	return (
		<div>
			<div className="bg-hydro-blue w-2/6 h-1.5 shadow mb-2"></div>
			<div className="grid gap-2 grid-cols-1 md:grid-cols-2">
				<img src={iphone} className="w-full object-contain" />
				<div className="p-5 flex flex-col justify-center">
					<h2 className="text-3xl uppercase tracking-wide bg-hydro-blue text-white pl-2 md:-translate-x-10 md:-translate-y-5">Shop on the go!</h2>
					<span>Checkout our new optimized mobile experience</span>
				</div>
			</div>
		</div>
	)
}

export default MobileBox;