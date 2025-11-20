import { Card } from "@/components/Card"
import Link from "next/link";

export default function Archived(){
    return  (
        <Card> 
          <div> Your all Archived Notifications will be here. </div>
         <div> 
             <Link href ="/complex-dashboard"> Default </Link>
         </div>
            </Card> 
    )
}