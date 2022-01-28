import React, {Component} from "react";
import {Container} from "react-bootstrap";

export default class Footer extends Component {


    render()
    {
        return (
            <>
                <footer id={'foo'} className="footer section footer-classic context-light">
                    <Container>
                        <div className="row fii row-30">
                            <div className="col-md-4 col-xl-5">
                                <div className="pr-xl-4"><a className="brand" href="/"></a>
                                    <p>Мы - команда специалистов, и мы готовы взяться за проект любой сложности, и воплотить в жизнь ваши смелые идеи!</p>

                                    <p className="rights"><span>©  </span><span
                                        className="copyright-year">2020</span><span> </span><span>Solar-wind</span><span>. </span><span>Все права защищены.</span>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <h5>Contacts</h5>
                                <dl class="contact-list">
                                    <dt>email:</dt>
                                    <dd><a href="mailto:#">solar-wind.web@mail.ru</a></dd>
                                </dl>
                                <dl class=" orangecontact-list">
                                    <dt>Телефон:</dt>
                                    <dd><a href="tel:#">8-918-467-62-43</a> <span><br/>Или<br/></span> <a href="tel:#">8-989-249-66-16</a>
                                    </dd>
                                </dl>
                            </div>

                        </div>
                    </Container>

                </footer>
            </>
        )
    }
}
