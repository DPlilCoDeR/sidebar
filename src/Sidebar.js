import React from "react";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";

const Sidebar = () => {
  return (
    <section className="sidebar">
      <div className="sidebar-header">
        <button className="close-btn">
          <FaTimes />
        </button>
        <div className="logo">{logo}</div>
      </div>
    </section>
  );
};

export default Sidebar;
