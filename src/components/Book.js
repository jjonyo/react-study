import React from "react"
import { Card, Typography } from "antd"
import styled from "styled-components"

const { Title } = Typography
const MyBook = styled.div`
  padding-top: 10px;
`
const Book = ({ title, nickname, content }) => {
  return (
    <MyBook>
      <Card title={title} extra={<a href="#">삭제</a>} style={{ width: 500 }}>
        <Title level={5}>작성자 : {nickname}</Title>
        <p>{content}</p>
      </Card>
    </MyBook>
  )
}

export default Book
