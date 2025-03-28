'use client';

import { SidebarToggler } from "features/sidebar";
import { useSidebarStore } from "features/sidebar/model/store";

export const Sidebar = () => {
  const { isShrinked } = useSidebarStore();

  return (
    <aside className={`fixed top-0 left-0 h-full p-4 ${isShrinked ? "w-20" : "w-1/4"} border-r-2 border-gray-700 shadow-lg transition-all duration-300`}>
      <SidebarToggler />
      <h2>Sidebar</h2>
    </aside>
  );
};
