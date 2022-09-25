import { Navbar } from 'flowbite-react';
import React from 'react';
import { FaCartArrowDown } from 'react-icons/fa';

const menuData = [
    {
        title: 'Home',
        path: '/',
    },
    {
        title: 'Contact',
        path: '/contact',
    },
    {
        title: 'My Order',
        path: '/orders',
    },
    {
        title: 'Admin',
        path: '/admin',
    },
    {
        title: 'Cart',
        path: '/cart',
    },
    {
        title: 'Login',
        path: '/login',
    },
];

const Header = () => {
    let path = window.location.pathname;

    return (
        <Navbar fluid={true} rounded={true}>
            <Navbar.Brand href="https://flowbite.com/">
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    NAYEM-SHOP
                </span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                {menuData.map((item) => {
                    return (
                        <Navbar.Link
                            href={item.path}
                            active={path === item.path}
                            key={item.title}
                        >
                            {item.path !== '/cart' ? (
                                <span className="whitespace-nowrap text-lg font-semibold dark:text-white">
                                    {item.title}
                                </span>
                            ) : (
                                <span className="flex items-center whitespace-nowrap text-lg font-semibold dark:text-white">
                                    Cart
                                    <FaCartArrowDown className="ml-1" />
                                    <sup>0</sup>
                                </span>
                            )}
                        </Navbar.Link>
                    );
                })}
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
