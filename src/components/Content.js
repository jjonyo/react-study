import React from "react"

const Content = (props) => {
  return (
    <div style={{ display: "grid", justifyContent: "center" }}>
      {props.children}
    </div>
  )
}

export default Content
