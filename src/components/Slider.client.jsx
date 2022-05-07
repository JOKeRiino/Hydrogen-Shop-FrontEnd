import { Link } from "@shopify/hydrogen/client";
import { useState, useEffect } from 'react';

const Slider = ({ images = [] }) => {
	const [slideIndex, setSlideIndex] = useState(1);

	useEffect(() => {
		const interval = setInterval(() => {
			if (slideIndex === images.length) {
				setSlideIndex(1);
			} else {
				setSlideIndex(slideIndex + 1);
			}
		}, 8000);
		return () => clearInterval(interval);
	})

	const moveDot = index => {
		setSlideIndex(index);
	}

	const renderSlides = () => {
		return images.map((img, index) => {
			return (
				<div key={index} className={slideIndex === index + 1 ? "w-full transition-opacity duration-1000 block" : "w-full transition-opacity duration-1000 hidden"}>
					<img
						className="h-[80vh] w-full object-cover"
						src={img.url}
						alt={img.alt}
					/>
					<div className="absolute bottom-[25%] left-0 md:left-[5%] p-2.5">
						<p className="text-2xl font-bold tracking-wide pt-1.5 px-1 pb-0.5 bg-white/75 mb-2.5">{img.title}</p>
						<Link to={img.path} className="text-xl font-semibold uppercase tracking-wide py-2.5 px-5 hover:bg-zinc-800 bg-hydro-blue text-white">{img.cta}</Link>
					</div>
				</div>
			)
		})
	}

	const renderNavigator = () => {
		return images.map((img, index) => {
			return (
				<div
					key={index}
					onClick={() => moveDot(index + 1)}
					className={slideIndex === index + 1 ? "w-[50px] h-[5px] mx-2.5 bg-hydro-blue cursor-pointer" : "w-[50px] h-[5px] mx-2.5 bg-zinc-400 cursor-pointer"}
				></div>
			)
		})
	}

	return (
		<div>
			<div className="w-full h-auto relative overflow-hidden">
				<div className="w-full">
					{renderSlides()}
				</div>
				<div className="flex w-full absolute bottom-[20px] justify-center">
					{renderNavigator()}
				</div>
			</div>
		</div>
	)
}

export default Slider;