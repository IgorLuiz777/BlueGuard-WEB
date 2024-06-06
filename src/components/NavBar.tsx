"use client";
import React from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Image } from "@nextui-org/react";
import { User } from "@nextui-org/react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Sobre o Projeto",
    "Relatórios",
    "Observações",
    "Log Out",
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
        <Image src="../favicon.ico" width={75}/>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4">
        <Image className="justify-start" src="../favicon.ico" width={75}/>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand className="grid justify-items-start">
        <Link color="foreground" href="#">
          <p className="font-bold text-inherit">Sobre o BlueGuard</p>
        </Link>
        </NavbarBrand>
        <NavbarItem isActive>
          <Link href="./beachReport" aria-current="page">
            Relatórios
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Observações
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <Dropdown>
          <DropdownTrigger>
            <Link className="cursor-pointer"><User
              name="Igor"
              description="igor@gmail.com"
              avatarProps={{
                src: ""
              }}
            /></Link>
          </DropdownTrigger>
          <DropdownMenu aria-label="Exemplo com ações desativadas" disabledKeys={["edit", "delete"]}>
            <DropdownItem key="copy">Copiar link</DropdownItem>
            <DropdownItem key="edit">Editar arquivo</DropdownItem>
            <DropdownItem key="delete" className="text-danger" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" color={index === 3 ? "danger" : "primary"} href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
