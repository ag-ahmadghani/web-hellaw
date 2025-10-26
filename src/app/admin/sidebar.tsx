"use client";

import { Calendar, Home, Inbox, LogOut, Users } from "lucide-react";
import { useRouter } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items (kecuali logout, kita handle manual di bawah)
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Agenda",
    url: "/admin/agenda",
    icon: Calendar,
  },
  {
    title: "Galery",
    url: "/admin/galery",
    icon: Inbox,
  },
  {
    title: "Crew",
    url: "/admin/crew",
    icon: Users,
  },
];

export function AppSidebar() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      // Panggil API endpoint logout di backend Anda
      const res = await fetch('http://localhost:5000/api/auths/logout', {
        method: 'POST',
        credentials: 'include', // Penting untuk mengirim cookie
      });

      if (res.ok) {
        // Redirect ke halaman login setelah berhasil logout
        router.push('/login');
      } else {
        alert('Logout gagal');
      }
    } catch (error) {
      console.error('Terjadi kesalahan saat logout:', error);
      alert('Terjadi kesalahan');
    }
  };

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}

              {/* Tombol Logout */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 w-full text-left"
                  >
                    <LogOut />
                    <span>Log Out</span>
                  </button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
