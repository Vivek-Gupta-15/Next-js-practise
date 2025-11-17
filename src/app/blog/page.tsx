import { Metadata } from "next"

export const metadata :  Metadata = {
    // title : "Blog",
    title :{
        absolute : "Blog",
    }
}

export default function Blog(){
    return (
        <h1> All Blogs will be shown here..</h1>
    )
}