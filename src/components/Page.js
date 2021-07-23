import React from "react"
import styled from "styled-components"

const Page = (props) => {
  return <MyPage>{props.children}</MyPage>
}

const MyPage = styled.div`
  margin: auto;
  width: 100%;
  max-width: 800px;
  padding: 40px;
  height: 930px;
  max-height: 1024px;
  border: solid 0.1px;
`

export default Page
