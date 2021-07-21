import React from "react"
import { Card, Typography, Popconfirm, message } from "antd"
import styled from "styled-components"

const { Title } = Typography
const MyBook = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
`
const confirmPassword = (data, setData, index) => {
  const inputPassword = prompt("비밀번호를 입력하세요.")
  const currentData = data[String(index)]
  if (currentData.password === inputPassword) {
    setData(
      data.filter((element, _index) => {
        return index !== _index
      })
    )
    message.success("방명록이 삭제되었습니다.")
  } else {
    message.error("패스워드가 일치하지 않습니다.")
  }
}

const Book = ({ data, setData, index, title, nickname, content }) => {
  console.log(title, index)
  return (
    <MyBook>
      <Card
        title={title}
        extra={
          <Popconfirm
            title="삭제하시겠습니까?"
            okText="네"
            cancelText="아니요"
            onConfirm={() => confirmPassword(data, setData, index)}
          >
            {/* eslint-disable */}
            <a href="#">삭제</a>
          </Popconfirm>
        }
        style={{ width: 800 }}
      >
        <Title level={5}>작성자 : {nickname}</Title>
        <p>{content}</p>
      </Card>
    </MyBook>
  )
}

export default Book
