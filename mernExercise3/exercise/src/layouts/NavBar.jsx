import React from "react";

const NavBar = () => {
  const nav = [
    { id: 1, to: "/", name: "Home" },
    { id: 2, to: "/About", name: "About" },
    { id: 3, to: "/Projects", name: "Projects" },
    { id: 4, to: "/Register", name: "Register" },
    { id: 5, to: "/Login", name: "Login" },
  ];
  return (
    <div>
      <nav className=" nav font-bold text-5xl text-gray-100 fixed bg-green-600 w-full p-10 z-10">
        {nav.map((item) => (
          <a key={item.id} href={item.to}>
            {item.name}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default NavBar;
