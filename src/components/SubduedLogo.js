import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function SubduedLogo() {
  return (
    <StaticImage
      src="../images/mb_logo_subdued.png"
      alt="Mike Berry logo"
      placeholder="blurred"
      layout="fixed"
      width={158}
      height={114}
    />
  )
}