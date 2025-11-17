import { Metadata } from "next"

export const metadata :  Metadata = {
    // title : "Blog",
    title :{
        absolute : "Blog",
    }
}

export default async function Blog(){
    await new Promise((resolve) => {
        setTimeout(() => {
        resolve("Wait till your page load..");

        }, 2000); 
    })
    return  <h1> All Blogs will be shown here..</h1>
}