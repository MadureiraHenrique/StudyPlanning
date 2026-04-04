"use client";

import { SidebarProvider } from "@/contexts/sidebar-context";
import { ModalEditContext } from "@/contexts/modal-edit-context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <ModalEditContext>{children}</ModalEditContext>
    </SidebarProvider>
  );
}
