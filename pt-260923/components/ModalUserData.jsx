import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import ActualHour from './ActualHour';

const ModalUserData = ({user}) => {
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
      <Button type="primary" onClick={showModal}>
        Detalles
      </Button>
      <Modal title={`${user.name.first} ${user.name.last}`} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <img src={user.picture.large}></img>
        <p>{user.registered.date}</p>
        <p>{user.dob.age}</p>
        <ActualHour></ActualHour>
      </Modal>
    </>
  );
};
export default ModalUserData;