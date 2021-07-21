import React, { useState } from "react"
import "./App.css"
import Book from "./components/Book"
import Content from "./components/Content"
import Header from "./components/Header"
import Page from "./components/Page"
import Title from "./components/Title"
import Write from "./components/Write"

/*
[
{
id : 1,
name : 박종혁,
password : 1234,
createdAt : new Date,
title : 제목,
content : 내용
},
{
  ...
}
]

*/
function App() {
  const [data, setData] = useState([])
  console.log(data)
  return (
    <Page>
      <Header>
        <Title>방명록</Title>
        <Write data={data} setData={setData} />
      </Header>
      <Content>
        {data.map((book, index) => {
          return (
            <Book
              title={book.title}
              nickname={book.nickname}
              content={book.content}
              data={data}
              setData={setData}
              index={index}
            />
          )
        })}
      </Content>
    </Page>
  )
}

export default App
