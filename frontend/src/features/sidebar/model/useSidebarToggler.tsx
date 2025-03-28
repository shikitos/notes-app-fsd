import { useSidebarStore } from "./store";

export const useSidebarToggler = () => {
  const { isShrinked, toggleSidebar } = useSidebarStore();


  return { isShrinked, toggleSidebar };
};
