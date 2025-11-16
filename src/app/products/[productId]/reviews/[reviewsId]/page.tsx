import { notFound } from "next/navigation";

export default async function ProdectReview({
    params, 
} : {
    params : Promise<{productId : string , reviewsId : string}>;
}) {
    const {productId , reviewsId} = await params;
    if(parseInt(reviewsId) > 100){
        notFound();
    }
    return <h1> Review {reviewsId} for Products {productId} is here.</h1>
}