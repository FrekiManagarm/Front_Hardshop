"use client"

import Image from "next/image"
import Link from "next/link"
import { CardBottomSection, CardContainer, CardTopSection } from "./Card.style"
import { Key } from "react"

// export default function Card({ image, name, description, link } : { image: string, name: string, description: string, link: string }) {
//   return (
//     <div className="card card-compact w-96 bg-base-100 shadow-xl">
//       <figure><Image src={image} alt="component image" width={200} height={200} /></figure>
//       <div className="card-body">
//         <h2 className="card-title">{name}</h2>
//         <p>{description}</p>
//         <div className="card-actions justify-end">
//           <Link href={link} className="btn btn-primary">Details</Link>
//         </div>
//       </div>
//     </div>
//   )
// }

export default function Card({ image, name, description, link, key }: { image: string, name: string, description: string, link: string, key: Key }) {
  return (
    <CardContainer key={key}>
      <CardTopSection>
        <Image src={image} alt="component image" width={300} height={150} />
      </CardTopSection>
      <CardBottomSection>
        <h3>{name}</h3>
      </CardBottomSection>
    </CardContainer>
  )
}