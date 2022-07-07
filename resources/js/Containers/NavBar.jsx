import Button from '@/Components/Button';
import ButtonAnchor from '@/Components/ButtonAnchor';
import Dropdown from '@/Components/Dropdown';
import NavBrand from '@/Components/NavBrand';
import NavLink from '@/Components/NavLink';
import { Link } from '@inertiajs/inertia-react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function NavBar({ ...props }) {
    const [auth, setAuth] = useState(false);
    const [profileAvailable, setProfileAvailable] = useState(true);

    useEffect(() => {
        axios.get('/auth/check').then((response) => setAuth(response.data));
        if (auth) {
            setProfileAvailable(true);
        }
    });
    const login = (
        <Link href={route('login')} className="bg-neutral-700 text-neutral-100 h-full py-2.5 px-5 rounded-full dark:bg-neutral-100 dark:text-neutral-700">
            Login
        </Link>
    );

    const profile = (
        <Dropdown className="w-100">
            <Dropdown.Trigger>
                <span
                    className=" -100 rounded-lg justify-content-center"
                    style={{ display: 'inline-flex' }}
                >
                    <Button
                        type="button"
                        className="btn d-flex justify-content-center"
                        styles={{
                            width: '184px',
                            padding: '10px',
                        }}
                    >
                        <span className="username dark:text-neutral-100">
                            {props.auth.user == undefined
                                ? ''
                                : props.auth.user.name}
                        </span>
                        <span className="material-symbols-outlined ms-2 d-lg-block d-none dark:text-neutral-100">
                            account_circle
                        </span>
                    </Button>
                </span>
            </Dropdown.Trigger>

            <Dropdown.Content width="100">
                <Dropdown.Link href={'profile'} as="button" className="w-100">
                    Profile
                </Dropdown.Link>
                <Dropdown.Link href={'history'} as="button" className="w-100">
                    History
                </Dropdown.Link>
                <Dropdown.Link
                    href={route('logout')}
                    method="post"
                    as="button"
                    className="w-100"
                >
                    Log Out
                </Dropdown.Link>
            </Dropdown.Content>
        </Dropdown>
    );

    return (
        <nav
            className="flex justify-between w-100 md:px-5 py-1 bg-neutral-100 dark:bg-neutral-700"
            style={{ position: 'fixed', zIndex: 99999 }}
        >
            <NavBrand href={'/'}>LIMAKU</NavBrand>
            <div className="d-lg-flex d-none" id="navList">
                <NavLink href="/" active={undefined} className={'dark:text-neutral-100'}>
                    Dashboard
                </NavLink>
                <NavLink href="/exchange" active={undefined} className={'dark:text-neutral-100'}>
                    Tukar Tunai
                </NavLink>
                <NavLink href="/about" active={undefined} className={'dark:text-neutral-100'}>
                    Tentang Kami
                </NavLink>

                {auth ? profile : login}
            </div>
            <button
                className="btn d-lg-none"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
            >
                <span
                    className="material-symbols-outlined"
                    style={{ color: '#484848' }}
                >
                    menu
                </span>
            </button>

            <div
                className="offcanvas offcanvas-end"
                tabIndex="-1"
                id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel"
                data-bs-scroll="true"
            >
                <div className="offcanvas-header">
                    <h5 id="offcanvasRightLabel"></h5>
                    <button
                        type="button"
                        className="btn-close text-reset"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    ></button>
                </div>
                <div className="offcanvas-body">
                    {auth ? '':
                    <NavLink
                        className="w-100 button-primary text-white"
                        href={route('login')}
                        active={undefined}
                    >
                        Login
                    </NavLink>}
                    <NavLink className="w-100" href="/" active={undefined}>
                        Dashboard
                    </NavLink>
                    <NavLink
                        className="w-100"
                        href="/exchange"
                        active={undefined}
                    >
                        Tukar Tunai
                    </NavLink>
                    <NavLink className="w-100" href="/about" active={undefined}>
                        Tentang Kami
                    </NavLink>
                    {auth ? (
                        <>
                            <a
                                className={`btn w-100 d-flex justify-content-center${
                                    profileAvailable ? '' : ' d-none'
                                }`}
                                data-bs-toggle="collapse"
                                href="#profileCollapse"
                                role="button"
                                aria-expanded="false"
                                aria-controls="profileCollapse"
                            >
                                <span className="username">
                                    {props.auth.user == undefined
                                        ? ''
                                        : props.auth.user.name}
                                </span>
                                <span className="material-symbols-outlined ms-2">
                                    account_circle
                                </span>
                            </a>
                            <div className="collapse" id="profileCollapse">
                                <ButtonAnchor
                                    href={'profile'}
                                    as="button"
                                    className="w-100 btn"
                                >
                                    Profile
                                </ButtonAnchor>
                                <ButtonAnchor
                                    href={'history'}
                                    as="button"
                                    className="w-100 btn"
                                >
                                    History
                                </ButtonAnchor>
                                <Link
                                    href={route('logout')}
                                    method="post"
                                    as="button"
                                    className="w-100 btn"
                                    onClick={() => setAuth(false)}
                                >
                                    Log Out
                                </Link>
                            </div>
                        </>
                    ) : (
                        ''
                    )}
                </div>
            </div>
        </nav>
    );
}
