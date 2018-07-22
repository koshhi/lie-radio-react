import React, { Component } from 'react';
import './navbar.css'

class NavBar extends Component {
    constructor() {
        super();
        this.state = {
            navItems: []
        };
    }

    render = () => {
        let navItems = [
            { title: "programas",       link: "/programs" },
            { title: "residentes",      link: "/residents" },
            { title: "especiales",      link: "/especials" },
            { title: "shop",            link: "/shop"},
            { title: "sobre nosotros",  link: "/about" }
        ];

        let navLinks = navItems.map((navItem, index) => {
            return (
                <li key={index} className='navLink'>
                    <a href={navItem.link}>{navItem.title}</a>
                </li>
            )
        })

        return (
            <header>
                <div className="nav">
                    <a className="brand" href="/"><img src="/static/images/logo-yellow.svg" alt="lie"></img></a>
                    <ul className="navLinks">
                        {navLinks}
                    </ul>
                </div>
            </header>
        );
    }
}



export default NavBar;