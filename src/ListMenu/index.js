const ListMenu = [
  { title: "Home", icon: "icon", to: "" },
  { title: "About", icon: "icon", to: "" },
  { title: "Contact", icon: "icon", to: "" },
  {
    title: "Products",
    icon: "icon",
    to: "",
    subMenu: [
      { title: "Product 1", to: "/products/1" },
      { title: "Product 2", to: "/products/2" },
      { title: "Product 3", to: "/products/3" },
    ],
  },
];
export default ListMenu;
