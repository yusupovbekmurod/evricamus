import { Button, Modal, Space } from "antd";
import { useState, useEffect } from "react";
import "./style.css";

function modal() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
   
     
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };


return (
    <>
    <Button
      className="showButton"
      type="primary"
      onClick={showModal}
     
    >
      show
    </Button>
    <Modal
      title="Basic Modal"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  </>
)  
}

export default modal