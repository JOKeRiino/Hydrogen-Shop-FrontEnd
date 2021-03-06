import {
	useShopQuery,
	flattenConnection,
	Seo,
	CacheDays,
} from '@shopify/hydrogen';
import gql from 'graphql-tag';

import Layout from '../components/Layout.server';
import FeaturedCollection from '../components/FeaturedCollection';
import ProductCard from '../components/ProductCard';
import { Suspense } from 'react';
import MobileBox from '../components/MobileBox.client';
import CollectionGrid from '../components/CollectionGrid.client';
import clothes from '../img/clothes_on_hanger.webp';
import parcel from '../img/parcel.webp';
import sale from '../img/sale.webp';

const images = [
	{
		url: clothes,
		title: "Let's talk about us",
		cta: "Our mission",
		alt: "Clothes on a hanger",
		path: "/about"
	},
	{
		url: parcel,
		title: "Free shipping on all orders over 70€",
		cta: "I want free shipping!",
		alt: "A parcel from hydrogenshop",
		path: "/collections/products"
	},
	{
		url: sale,
		title: "Limited Sale until Friday!",
		cta: "Show me!",
		alt: "Sale Sign in a park next to a bench",
		path: "/collections/sale"
	}
]

export default function Index({ country = { isoCode: 'US' } }) {
	const { data } = useShopQuery({
		query: QUERY,
		variables: {
			country: country.isoCode,
		},
		preload: true,
	});

	const collections = data ? flattenConnection(data.collections) : [];

	return (
		<Layout sliderArray={images}>
			<Suspense fallback={null}>
				<SeoForHomepage />
			</Suspense>
			<CollectionGrid collections={collections} />
			<MobileBox />
		</Layout>
	);
}

function SeoForHomepage() {
	const {
		data: {
			shop: { title, description },
		},
	} = useShopQuery({
		query: SEO_QUERY,
		cache: CacheDays(),
		preload: true,
	});

	return (
		<Seo
			type="homepage"
			data={{
				title,
				description,
			}}
		/>
	);
}

// function BoxFallback() {
// 	return <div className="bg-white p-12 shadow-xl rounded-xl mb-10 h-40"></div>;
// }

// function FeaturedProductsBox({ country }) {
// 	const { data } = useShopQuery({
// 		query: QUERY,
// 		variables: {
// 			country: country.isoCode,
// 		},
// 		preload: true,
// 	});

// 	const collections = data ? flattenConnection(data.collections) : [];
// 	const featuredProductsCollection = collections[0];
// 	const featuredProducts = featuredProductsCollection
// 		? flattenConnection(featuredProductsCollection.products)
// 		: null;

// 	return (
// 		<div className="bg-white p-12 shadow-xl rounded-xl mb-10">
// 			{featuredProductsCollection ? (
// 				<>
// 					<div className="flex justify-between items-center mb-8 text-md font-medium">
// 						<span className="text-black uppercase">
// 							{featuredProductsCollection.title}
// 						</span>
// 						<span className="hidden md:inline-flex">
// 							<Link
// 								to={`/collections/${featuredProductsCollection.handle}`}
// 								className="text-blue-600 hover:underline"
// 							>
// 								Shop all
// 							</Link>
// 						</span>
// 					</div>
// 					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
// 						{featuredProducts.map((product) => (
// 							<div key={product.id}>
// 								<ProductCard product={product} />
// 							</div>
// 						))}
// 					</div>
// 					<div className="md:hidden text-center">
// 						<Link
// 							to={`/collections/${featuredProductsCollection.handle}`}
// 							className="text-blue-600"
// 						>
// 							Shop all
// 						</Link>
// 					</div>
// 				</>
// 			) : null}
// 		</div>
// 	);
// }

// function FeaturedCollectionBox({ country }) {
// 	const { data } = useShopQuery({
// 		query: QUERY,
// 		variables: {
// 			country: country.isoCode,
// 		},
// 		preload: true,
// 	});

// 	const collections = data ? flattenConnection(data.collections) : [];
// 	const featuredCollection =
// 		collections && collections.length > 1 ? collections[1] : collections[0];

// 	return <FeaturedCollection collection={featuredCollection} />;
// }

const SEO_QUERY = gql`
  query homeShopInfo {
    shop {
      description
    }
  }
`;

const QUERY = gql`
  query indexContent($country: CountryCode) @inContext(country: $country) {
    collections(first: 4) {
      edges {
        node {
          handle
          id
          title
          image {
            id
            url
            altText
            width
            height
          }
          products(first: 3) {
            edges {
              node {
                handle
                id
                title
                variants(first: 1) {
                  edges {
                    node {
                      id
                      title
                      availableForSale
                      image {
                        id
                        url
                        altText
                        width
                        height
                      }
                      priceV2 {
                        currencyCode
                        amount
                      }
                      compareAtPriceV2 {
                        currencyCode
                        amount
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
