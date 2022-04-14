import { Link } from '@shopify/hydrogen';

/**
 * A server component that specifies the content of the footer on the website
 */
export default function Footer({ collection, product }) {
	return (
		<footer role="contentinfo">
			<div className="relative bg-white border-t border-b border-black border-opacity-5">
				<div className="mx-auto max-w-7xl px-4 py-14 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
					<div>
						<h2 className="text-md font-medium uppercase mb-2">About Us</h2>
						<div className="bg-hydro-blue w-7/12 h-1.5 shadow -translate-x-4"></div>
						<ul className="mt-3 space-y-4">
							<li className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
								<Link to="/about">Our Story</Link>
							</li>
							<li className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
								<Link to="/collections/products">Products</Link>
							</li>
							<li className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
								<Link to="/">Home</Link>
							</li>
							<li className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
								<Link to="/collection/sale">Sale</Link>
							</li>
							<li className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
								<Link to="/">FAQs</Link>
							</li>
						</ul>
					</div>
					<div>
						<h2 className="text-md font-medium uppercase mb-2">Legal</h2>
						<div className="bg-hydro-blue w-7/12 h-1.5 shadow -translate-x-4"></div>
						<ul className="mt-3 space-y-4">
							<li className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
								<Link to="/">Imprint</Link>
							</li>
							<li className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
								<Link to="/">Contact Form</Link>
							</li>
							<li className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
								<Link to="/">Data Policy</Link>
							</li>
							<li className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
								<Link to="/">Terms of Service</Link>
							</li>
							<li className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
								<Link to="/">Returns Policy</Link>
							</li>
						</ul>
					</div>
					<div>
						<h2 className="text-md font-medium uppercase mb-2">Follow Us</h2>
						<div className="bg-hydro-blue w-7/12 h-1.5 shadow -translate-x-4"></div>
						<ul className="mt-3 space-y-4">
							<li className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
								<Link to="/"><i className="fa-brands fa-discord mr-2"></i>Discord</Link>
							</li>
							<li className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
								<Link to="/"><i className="fa-brands fa-facebook mr-2"></i>Facebook</Link>
							</li>
							<li className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
								<Link to="/"><i className="fa-brands fa-instagram mr-2"></i>Instagram</Link>
							</li>
							<li className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
								<Link to="/"><i className="fa-brands fa-pinterest-p mr-2"></i>Pinterest</Link>
							</li>
							<li className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
								<Link to="/"><i className="fa-brands fa-twitter mr-2"></i>Twitter</Link>
							</li>
						</ul>
					</div>
				</div>
				<p className="pb-6 text-center text-gray-600">© {new Date().getFullYear()} HydrogenShop | All rights reserved</p>
			</div>
		</footer>
	);
}
