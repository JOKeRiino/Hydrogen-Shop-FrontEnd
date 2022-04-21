import { useEffect, useState } from 'react';
import { Link, Image } from '@shopify/hydrogen/client';

import CartToggle from './CartToggle.client';
import { useCartUI } from './CartUIProvider.client';
import CountrySelector from './CountrySelector.client';
import Navigation from './Navigation.client';
import MobileNavigation from './MobileNavigation.client';

import logo from '../img/logo_hydro.png'

/**
 * A client component that specifies the content of the header on the website
 */
export default function Header({ collections, storeName }) {
	const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
	const [scrollbarWidth, setScrollbarWidth] = useState(0);
	const { isCartOpen } = useCartUI();

	useEffect(() => {
		const scrollbarWidth =
			window.innerWidth - document.documentElement.clientWidth;

		setScrollbarWidth(scrollbarWidth);
	}, [isCartOpen]);

	return (
		<header className="h-20" role="banner">
			<div
				className={`fixed z-20 h-20 lg:h-22 w-full border-b border-gray-200 px-6 md:px-8 md:py-6 lg:pt-3 lg:pb-0 mx-auto bg-black text-white ${isMobileNavOpen ? '' : 'bg-opacity-95'
					}`}
			>
				<div
					className="h-full flex lg:flex-col place-content-between"
					style={{
						paddingRight: isCartOpen ? scrollbarWidth : 0,
					}}
				>
					<div className="text-center w-full flex justify-between items-center">
						<MobileNavigation
							collections={collections}
							isOpen={isMobileNavOpen}
							setIsOpen={setIsMobileNavOpen}
						/>
						<Link
							className="font-black uppercase text-3xl tracking-widest"
							to="/"
						>
							{/* Hier später bild einfügen */}
							<Image
								src={logo}
								alt="Hydrogen Logo Shop"
								height="50px"
								width="150px"
							/>
						</Link>
						<div className='flex justify-between items-center'>
							<Navigation collections={collections} />

							<CountrySelector />
							<CartToggle
								handleClick={() => {
									if (isMobileNavOpen) setIsMobileNavOpen(false);
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
