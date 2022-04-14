import {
	Link,
	flattenConnection
} from '@shopify/hydrogen/client';
import ProductCard from './ProductCard';

export default function CrossSelling({ featuredProductsCollection }) {
	const featuredProducts = featuredProductsCollection
		? flattenConnection(featuredProductsCollection.products)
		: null;


	return (
		<div>
			{featuredProductsCollection ? (
				<>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
						{featuredProducts.map((product) => (
							<div key={product.id}>
								<ProductCard product={product} />
							</div>
						))}
					</div>
					<div className="md:hidden text-center">
						<Link
							to={`/collections/${featuredProductsCollection.handle}`}
							className="text-blue-600"
						>
							Shop all
						</Link>
					</div>
				</>
			) : null}
		</div>
	);
}
