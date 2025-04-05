// import { useState } from "react";
import { useToggle } from "../../hooks/useToggle";
import { Modal } from "react-bootstrap";

// const ComponentA = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const OpenModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   return (
//     <>
//       <button onClick={OpenModal}>Open modal</button>
//       <Modal isOpen={isModalOpen} onClose={closeModal} />
//     </>
//   );
// };

const ComponentA = () => {
  const { isOpen, open, close } = useToggle();

  return (
    <>
      <button onClick={open}>Open modal</button>
      <Modal isOpen={isOpen} onClose={close} />
    </>
  );
};

export default ComponentA;
