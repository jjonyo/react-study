import React, { useState } from "react"
import { Divider } from "antd"
import "./App.css"
import Book from "./components/Book"
import Content from "./components/Content"
import Header from "./components/Header"
import Page from "./components/Page"
import Title from "./components/Title"
import Write from "./components/Write"

function App() {
  const [data, setData] = useState([])
  console.log(data)
  return (
    <Page>
      <Header>
        <Title>방명록</Title>
        <Write data={data} setData={setData} />
      </Header>
      <Divider />
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
