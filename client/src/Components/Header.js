import React, {Component, useState} from 'react';
import logo from './logo.png';
import word from './logoSw copy.png';

import {Navbar, Nav, Container,Modal, Form, Button, FormControl } from "react-bootstrap";
import {Switch,BrowserRouter as Router,Route,Link} from "react-router-dom";
import Footer from "./Footer";


import Home from "../Pages/Home";
import Blog from "../Pages/Blog";
import SunSet1 from "./Parallax/Sunset1.png";
import SunSet2 from "./Parallax/Sunset2.png";
import SunSet3 from "./Parallax/Sunset3.png";
import Forma from "../Pages/Forma";


export default function Header (props) {


    const [show, setShow] = useState(false);
    const openModal = () => setShow(true);
    const closeModal = () => setShow(false);

        return (
            <>
                <Container-fluid>
                    <div className={'row m-0 parallax'}>
                        <div className={'parallaxGroup'}>

                            <div className={'parallaxLayer parallaxLayerThree'}>
                                <Navbar fixed="top" className={'contNavs'} collapseOnSelect expand={'md'} variant={'dark'} bg={'dark'}>
                                    <Container>
                                        <Navbar.Brand className = 'contents' href='/' >
                                            <div className={'d-flex align-items-center'}>
                                                <img src={logo} height = '67.2px'  width='60px' className='d-inline-block align-top'/>
                                                <img src={word}  width='350px' className='logoSw'/>
                                            </div>

                                        </Navbar.Brand>
                                            <Nav className={'navLinks'}>
                                                <Nav.Link className={'OpenModalOne link'} href={'/'}>

                                                    <div className={'buttonLink'}>
                                                        <svg width="1em" height="1em" viewBox="0 0 10 10"
                                                             className="bi bi-house-fill" fill="currentColor"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd"
                                                                  d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                                                            <path fill-rule="evenodd"
                                                                  d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                                                        </svg>
                                                        <div>на главную!</div>
                                                    </div>
                                                </Nav.Link>

                                                <Nav.Link className={'OpenModalOne link'} href={'/Blog'}>

                                                    <div className={'buttonLink'}>
                                                        <svg width="1em" height="1em" viewBox="0 0 10 10"
                                                             className="bi bi-columns" fill="currentColor"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd"
                                                                  d="M15 2H1v12h14V2zM1 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H1z"/>
                                                            <path fill-rule="evenodd"
                                                                  d="M7.5 14V2h1v12h-1zm0-8H1V5h6.5v1zm7.5 5H8.5v-1H15v1z"/>
                                                        </svg>
                                                        <div>как мы работаем?</div>
                                                    </div>
                                                </Nav.Link>
                                                <button className={'OpenModalOne  link'} onClick={openModal}>

                                                    <div className={'buttonLink'}>
                                                        <svg width="1em" height="1em" viewBox="0 0 10 10"
                                                             className="bi bi-chat-text-fill" fill="currentColor"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd"
                                                                  d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM4.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z"/>
                                                        </svg>
                                                        <div>Стать клиентом!</div>
                                                    </div>
                                                </button>
                                            </Nav>

                                    </Container>
                                </Navbar>
                                <img src={SunSet3} width={'100%'} className={'img-fluid SunSet'}/>
                                <div className={'infoInSun'}>
                                    <div className={'dataInInfo'}>
                                        Уже <span className={'spanInData1'}>69</span> довольных клиентов!
                                    </div>
                                    <div className={'dataInInfo'}>
                                        <span className={'spanInData2'}>к</span>оманда из <span className={'spanInData3'}>8</span> человек!
                                    </div>
                                </div>
                            </div>
                            <div className={'parallaxLayer parallaxLayerTwo'}>
                                <img src={SunSet2} width={'100%'} className={'img-fluid SunSet'}/>
                            </div>
                            <div className={'parallaxLayer parallaxLayerOne'}>
                                <img src={SunSet1} width={'100%'} className={'img-fluid SunSet'}/>
                                <div id={'one'} className={'conc inside'}>
                                    <Container-fluid>
                                        <Router>
                                            <Switch>
                                                <Route exact path={'/'} component={Home} />
                                                <Route exact path={'/Blog'} component={Blog} />
                                            </Switch>
                                        </Router>
                                        <div className={'row ender '}>
                                            <button className={'btn btn-warning ml-auto mr-auto mt-5 mb-5'} onClick={openModal}><h1>Сделать заказ!</h1></button>
                                        </div>
                                    </Container-fluid>
                                        <Footer  />
                                </div>
                            </div>
                        </div>

                    </div>


                </Container-fluid>
                <Modal show={show} onHide={closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Введите данные и вам позвонят!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Forma call={()=>{closeModal()}}/>
                    </Modal.Body>
                </Modal>

            </>
        );


};
