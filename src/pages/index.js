import React from "react"
import {Link} from "gatsby"


export default function Home() {
  return (
    <div
      style={{color: `purple`, fontSize: `36px`, textAlign: `center`}}
    >
      <Link to="/contact/">Contact</Link>

      <h1>Hello Gatsby JS!</h1>
      <p>What a world</p>
      <img src="https://source.unsplash.com/random/400x200" alt="img"/>
    </div>
  )
}
