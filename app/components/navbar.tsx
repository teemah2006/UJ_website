'use client';
import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdCancel } from "react-icons/md";
import {images} from '../Images/image';
import Image from "next/image";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
function NavListMenu(){
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
 ;
    return (

        <React.Fragment>
          <Menu
            open={isMenuOpen}
            handler={setIsMenuOpen}
            placement="bottom"
            allowHover={true}
          >
            <MenuHandler>
              <Typography as="div" variant="small" className="font-medium" placeholder='' onPointerEnterCapture='' onPointerLeaveCapture=''>
                <ListItem placeholder='' onPointerEnterCapture='' onPointerLeaveCapture=''
                  className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900 hover:text-red-700"
                  selected={isMenuOpen || isMobileMenuOpen}
                  onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                >
                  Categories
                  <IoIosArrowDown 
                    strokeWidth={2.5}
                    className={`hidden h-3 w-3 transition-transform lg:block ${
                      isMenuOpen ? "rotate-180" : ""
                    }`}
                  />
                  <IoIosArrowDown
                    strokeWidth={2.5}
                    className={`block h-3 w-3 transition-transform lg:hidden ${
                      isMobileMenuOpen ? "rotate-180" : ""
                    }`}
                  />
                </ListItem>
              </Typography>
            </MenuHandler>
            <MenuList className="hidden rounded-xl lg:block p-4" placeholder='' onPointerEnterCapture='' onPointerLeaveCapture=''>
              
              <MenuItem placeholder='' onPointerEnterCapture='' onPointerLeaveCapture=''>Figma</MenuItem>
              <MenuItem placeholder='' onPointerEnterCapture='' onPointerLeaveCapture=''>React</MenuItem>
              <MenuItem placeholder='' onPointerEnterCapture='' onPointerLeaveCapture=''>TailwindCSS</MenuItem>
            </MenuList>
          </Menu>
          <div className="block lg:hidden">
            <Collapse open={isMobileMenuOpen}>
            <MenuItem placeholder='' onPointerEnterCapture='' onPointerLeaveCapture=''>Figma</MenuItem>
              <MenuItem placeholder='' onPointerEnterCapture='' onPointerLeaveCapture=''>React</MenuItem>
              <MenuItem placeholder='' onPointerEnterCapture='' onPointerLeaveCapture=''>TailwindCSS</MenuItem>
            </Collapse>
          </div>
        </React.Fragment>
      );
}
function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 lg:text-lg">
      <Typography as="li" placeholder='' onPointerEnterCapture='' onPointerLeaveCapture=''
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center hover:text-red-700 transition-colors">
          Shop
        </a>
      </Typography>
      <Typography placeholder='' onPointerEnterCapture='' onPointerLeaveCapture=''
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center hover:text-red-700 transition-colors">
        <MdOutlineShoppingCart /> Cart
        </a>
      </Typography>
      <NavListMenu/>
      
      <Typography placeholder='' onPointerEnterCapture='' onPointerLeaveCapture=''
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center hover:text-red-700 transition-colors">
        <IoPersonOutline /> Account
        </a>
      </Typography>
    </ul>
  );
}
 
export function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
 
  return (
    <Navbar className="mx-auto max-w-screen-xl px-6 py-3 bg-gray-100" placeholder='' onPointerEnterCapture='' onPointerLeaveCapture=''>
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography placeholder='' onPointerEnterCapture='' onPointerLeaveCapture=''
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
          <Image src={images.logo} alt="uj LOGO"  width={100} className="w-12 md:w-16 lg:w-20"/>
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton placeholder='' onPointerEnterCapture='' onPointerLeaveCapture=''
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <MdCancel className="h-6 w-6"  />
          ) : (
            <RxHamburgerMenu className="h-6 w-6" strokeWidth={1} />
          )}
        </IconButton>
      </div>
      {openNav ? (<NavList />): null}
      {/* <Collapse open={openNav} >
        <NavList />
      </Collapse> */}
    </Navbar>
  );
}