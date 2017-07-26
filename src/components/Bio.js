import React from "react"
import Link from "gatsby-link"

// Import typefaces
import "typeface-montserrat"
import "typeface-merriweather"

import { rhythm } from "../utils/typography"

class Bio extends React.Component {
  render() {
    return (
      <div>
        <p
          style={{
            marginBottom: rhythm(0.5),
          }}
        >
          <Link to="/">
            miit 
          </Link>
          {" "}
          希望帮助尚在墙内的互联网从业者找到一个
          <strong>更自由和舒适</strong>
          的工作方式 - 如肉身翻墙，或远程工作。
        </p>
        <p
          style={{
            marginBottom: rhythm(2.5),
          }}
        >
          <a href="https://twitter.com/xu_lele">
            @xu_lele
          </a>
          {" "}
          是 miit 的发起人。他在日本工作和创业多年，希望能用经验帮助到还在墙内的你。
        </p>
      </div>
    )
  }
}

export default Bio
