import { notFound , redirect} from "next/navigation";

function getRandomInt(count : number){
    return Math.floor(Math.random() *count);
}

export default async function ProdectReview({
    params, 
} : {
    params : Promise<{productId : string , reviewsId : string}>;
}) {
    const random = getRandomInt(2);
    if(random === 1) {
        throw new Error("Error loading review.")
    }
    const {productId , reviewsId} = await params;
    if(parseInt(reviewsId) > 100){
        // notFound();
        redirect("/products")
    }
    return <h1> Review {reviewsId} for Products {productId} is here.</h1>
}