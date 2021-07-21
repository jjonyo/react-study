import React from "react"
import styled from "styled-components"

const Page = (props) => {
  return <MyPage>{props.children}</MyPage>
}

const MyPage = styled.div`
  padding: 30px;
`

export default Page
