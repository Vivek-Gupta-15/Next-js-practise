export default async function ProdectReview({
    params, 
} : {
    params : Promise<{productId : string , reviewsId : string}>;
}) {
    const {productId , reviewsId} = await params;
    return <h1> Review {reviewsId} for Products {productId} is here.</h1>
}