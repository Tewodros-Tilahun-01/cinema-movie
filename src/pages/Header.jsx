import React from "react";
import navListData from "../data/navListData";
import NavListItem from "../components/NavListItem";
import "./header.css";
import Search from "../components/Search";
import Button from "../components/Button";
export const Header = (props) => {
    return (
        <header className={`${props.scroll > 40 ? "scrolled" : undefined}`}>
            <a href="/" className="logo">
            cinema
            </a>
            <ul className="nav">
                {navListData.map((item) => {
                    return (
                        <NavListItem
                            key={item.id}
                            name={item.name}
                            link={item.link}
                        />
                    );
                })}
            </ul>
            <Search filter={props.filter} />
            <Button
                icon={<ion-icon name="log-in-outline"></ion-icon>}
                name="sign in"
            />
        </header>
    );
};

export default Header;
