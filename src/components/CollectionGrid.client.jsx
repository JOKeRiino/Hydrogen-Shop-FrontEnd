import { Link } from "@shopify/hydrogen/client";

const CollectionGrid = ({ collections }) => {

	const renderCollections = () => {
		return collections.map((collection, index) => {
			return (
				<div
					className="my-0 mx-2.5 pt-5 pb-4 py-0 border-4 border-hydro-blue hover:bg-hydro-blue hover:text-white cursor-pointer"
					key={index}
				>
					<Link
						className="w-full h-full flex align-center justify-center"
						to={`/collections/${collection.handle}`}
					>
						<h3 className="uppercase font-bold">{collection.handle}</h3>
					</Link>
				</div>
			)
		}
		)
	}


	return (
		<div className="w-full">
			<h1>Shop Our Collections:</h1>
			<div className="bg-hydro-blue w-2/6 h-1.5 shadow mb-2"></div>
			<div className="grid gap-4 my-5 mx-auto md:grid-cols-4">
				{renderCollections()}
			</div>
		</div>
	)
}

export default CollectionGrid;