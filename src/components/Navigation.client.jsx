import { Link } from '@shopify/hydrogen/client';

/**
 * A client component that defines the navigation for a web storefront
 */
export default function Navigation({ collections }) {
	return (
		<nav className="hidden lg:block text-center">
			<ul className="md:flex items-center justify-center">
				{collections.map((collection) => (
					<li key={collection.id}>
						<Link
							to={`/collections/${collection.handle}`}
							className="block p-4 hover:text-hydro-blue"
						>
							{collection.title}
						</Link>
					</li>
				))}
				<li key={"abt"}>
					<Link
						className="ml-3 mr-10 hover:text-hydro-blue"
						to="/about"
					>
						About Us
					</Link>
				</li>
			</ul>
		</nav>
	);
}
