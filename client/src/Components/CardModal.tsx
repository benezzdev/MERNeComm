import { Button, Modal } from "antd";

type CardModalProps = {
  isModalOpen: boolean;
  handleOk: () => void;
};

function CardModal({ isModalOpen, handleOk }: CardModalProps) {
  return (
    <>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        footer={
          <div>
            <Button onClick={handleOk}>OK</Button>
          </div>
        }
      ></Modal>
    </>
  );
}

export default CardModal;
