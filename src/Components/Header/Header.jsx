import React from 'react'
import NavbarMenu from './Navbar/NavbarMenu'
import Utp from './Utp/Utp'
import s from './Header.module.css'





export default class Header extends React.Component {
    render() {
        return (
        <header className={s.headerBlock}>
            <NavbarMenu/>
            <Utp/>
           </header>
        )
    }
}