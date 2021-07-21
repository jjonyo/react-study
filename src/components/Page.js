import React from "react"
import styled from "styled-components"

const Page = (props) => {
  return <MyPage>{props.children}</MyPage>
}

const MyPage = styled.div`
  margin: 50px;
`

export default Page
