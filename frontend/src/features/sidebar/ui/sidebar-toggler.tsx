import { useSidebarStore } from "../model/store";

export const SidebarToggler = () => {
  const { toggleSidebar } = useSidebarStore();

  return <button onClick={toggleSidebar}>Toggle</button>;
};
