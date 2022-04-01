import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function ShortLogo() {
  return (
    <StaticImage
      src="../images/mb_logo.png"
      alt="Mike Berry logo"
      placeholder="blurred"
      layout="fixed"
    />
  )
}