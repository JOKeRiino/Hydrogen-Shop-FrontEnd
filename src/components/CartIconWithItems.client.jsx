import { useCart } from '@shopify/hydrogen/client';

import CartIcon from './CartIcon';
import CartIconDark from './CartIconDark';

/**
 * A client component that specifies the icon to use if a cart contains merchandise
 */
export default function CartIconWithItems({ cartOpen }) {
	const { totalQuantity } = useCart();

	return (
		<>
			<div className="relative">
				{cartOpen === false || cartOpen === undefined ? <CartIcon /> : <CartIconDark />}
				<div
					className={`bg-hydro-blue text-xs rounded-full leading-none text-black absolute bottom-3 right-1 flex items-center justify-center transform translate-y-1/2 transition-all ${totalQuantity > 0 ? 'h-4 w-4' : 'h-0 w-0 overflow-hidden'
						}`}
					aria-hidden
				>
					{totalQuantity > 0 ? totalQuantity : null}
				</div>
			</div>
			<span className="sr-only">Cart, {totalQuantity} items</span>
		</>
	);
}
