import React from "react"
import { Typography } from "antd"

const Title = (props) => {
  return (
    <div style={{ textAlign: "center" }}>
      <Typography.Title level={1}>{props.children}</Typography.Title>
    </div>
  )
}

export default Title
