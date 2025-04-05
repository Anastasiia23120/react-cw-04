// import { useState } from "react";
import { useToggle } from "../../hooks/useToggle";
import { Sidebar } from "react-pro-sidebar";

// const ComponentB = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const openSidebar = () => setIsSidebarOpen(true);
//   const closeSidebar = () => setIsSidebarOpen(false);

//   return (
//     <>
//       <button onClick={openSidebar}>Open sidebar</button>
//       <Sidebar isOpen={isSidebarOpen} onClick={closeSidebar} />
//     </>
//   );
// };

const ComponentB = () => {
  const { isOpen, open, close } = useToggle();

  return (
    <>
      <button onClick={open}>Open sidebar</button>
      <Sidebar isOpen={isOpen} onClick={close} />
    </>
  );
};

export default ComponentB;
