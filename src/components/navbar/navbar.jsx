import React, { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { BsFillBoxSeamFill, BsFillChatLeftDotsFill, BsMenuApp, BsMenuAppFill, BsMenuButton, BsMenuButtonWide } from "react-icons/bs";
import { FaPage4, FaPagelines, FaShoppingBasket } from "react-icons/fa"
import { ImExit, ImMenu, ImMenu3, ImMenu4 } from "react-icons/im";
import { GiEating, GiExitDoor } from "react-icons/gi";
import { useCookies } from "react-cookie";

const Navbar = ({ setModal }) => {
  const [token, setToken, removeToken] = useCookies(["mytoken"]);
  const [user, setUser, removeUser] = useCookies(["user"]);
  const [image, setImage, removeImage] = useCookies(["image"]);
  const [admin, setAdmin, removeAdmin] = useCookies(["admin"]);
  const [modal, setBar] = useState(false)
  return (
    <div className="navbar">
      <div className="logo">
        <Link to={"/"}>Logo</Link>
      </div>

      <input type="text" placeholder="Search" />

      <ul>
        <li>
          {admin.admin && admin.admin === "296143127" ? (
            <Link to={"addProduct"}>
              <BsFillBoxSeamFill />
              <p>Mahsulot qo'shish</p>
            </Link>
          ) : null}
        </li>
        <li>
          <Link to={"globalChat"}>
            <BsFillChatLeftDotsFill />
            <p>Chat</p>
          </Link>
        </li>
        {user.user ? <li className="list-item" onClick={() => setModal(true)}>
          <FaShoppingBasket />
          <p>Savatcha</p>
        </li>
          : null}
        <li>
          {user.user ? (
            <>
              <Link
                onClick={() => {
                  removeToken(["mytoken"]);
                  removeUser(["user"]);
                  removeImage(["image"]);
                  removeAdmin(["admin"]);
                }}
              >
                <ImExit />
                <p>Log out</p>
              </Link>
            </>
          ) : (
            <Link to={"register"}>
              <GiExitDoor />
              <p>Kirish</p>
            </Link>
          )}
        </li>
      </ul>

      <div className="burger">
        <div className="btn">
          <button onClick={() => setBar(!modal)}>
            <ImMenu />
          </button>
        </div>
        {modal ? <ul className="bar">
          <li onClick={() => setBar(false)}>
            {admin.admin && admin.admin === "296143127" ? (
              <Link to={"addProduct"}>
                <BsFillBoxSeamFill />
                <p>Mahsulot qo'shish</p>
              </Link>
            ) : null}
          </li>
          <li onClick={() => setBar(false)}>
            <Link to={"globalChat"}>
              <BsFillChatLeftDotsFill />
              <p>Chat</p>
            </Link>
          </li>
          {user.user ? <li className="list-item" onClick={() => {
            setModal(true)
            setBar(false)
          }}>
            <FaShoppingBasket />
            <p>Savatcha</p>
          </li>
            : null}
          <li onClick={() => setBar(false)}>
            {user.user ? (
              <>
                <Link
                  onClick={() => {
                    removeToken(["mytoken"]);
                    removeUser(["user"]);
                    removeImage(["image"]);
                    removeAdmin(["admin"]);
                  }}
                >
                  <ImExit />
                  <p>Log out</p>
                </Link>
              </>
            ) : (
              <Link to={"register"} onClick={() => setBar(false)}>
                <GiExitDoor />
                <p>Kirish</p>
              </Link>
            )}
          </li>
        </ul> : null}
      </div>
    </div >
  );
};

export default Navbar;
