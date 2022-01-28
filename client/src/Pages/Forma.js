import {Form} from "react-bootstrap";
import React, {Component} from "react";
import {sendMail} from "../http/mailApi";

export default class Forma extends Component {
    state = {
        name:'',
        number:'',
        email:'',
        comment:''
    }

render() {
    return(
        <>
            <div className={'w-100 d-flex align-items-center flex-column'}>
                <div className={'d-flex w-100 justify-content-between mt-3 color-label-input align-items-center'}>
                    <h5>Ваше имя:</h5>
                    <input type={'text'} onChange={(event)=>{this.state.name = event.target.value}}/>
                </div>
                <div className={'d-flex w-100 justify-content-between mt-3 color-label-input align-items-center'}>
                    <h5>Номер телефона:</h5>
                    <input type={'num'} onChange={(event)=>{this.state.number = event.target.value}}/>
                </div>
                <div className={'d-flex w-100 justify-content-between mt-3 color-label-input align-items-center'}>
                    <h5>Ваша почта:</h5>
                    <input type={'email'} onChange={(event)=>{this.state.email = event.target.value}}/>
                </div>
                <div className={'d-flex w-100 justify-content-between mt-3 color-label-input align-items-center'}>
                    <h5>Коментарий:</h5>
                    <textarea onChange={(event)=>{this.state.comment = event.target.value}}></textarea>
                </div>
                <button className={'btn btn-warning mt-3'} onClick={()=> {
                    sendMail(this.state);
                    this.props.call();
                }}>Отправить!</button>
            </div>

        </>


    )
}

}
