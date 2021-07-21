import React, { useState } from "react"
import { Modal, Button, Input, Form } from "antd"
const { TextArea } = Input

const Write = ({ data, setData }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [form] = Form.useForm()

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const onFinish = async (values) => {
    const newData = {
      ...values,
      createdAt: JSON.stringify(new Date()),
    }
    form.resetFields()
    await setData([...data, newData])
  }

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo)
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        작성하기
      </Button>
      <Modal
        title="방명록 작성"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button
            type="primary"
            form="myForm"
            key="submit"
            htmlType="submit"
            onClick={handleOk}
          >
            확인
          </Button>,
        ]}
      >
        <Form
          form={form}
          id="myForm"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item label="제목" name="title">
            <Input />
          </Form.Item>
          <Form.Item label="이름" name="nickname">
            <Input />
          </Form.Item>
          <Form.Item label="내용" name="content">
            <TextArea />
          </Form.Item>
          <Form.Item label="비밀번호" name="password">
            <Input.Password />
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default Write
