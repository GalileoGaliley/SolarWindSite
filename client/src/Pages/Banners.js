import React,{Component} from "react";
import Banner1 from "./Banner1";
import Banner2 from "./Banner2";
import Butt from "./Butt";


class Banners extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            vision: true
        };
        this.readClick = this.readClick.bind(this);
    }
    readClick(){
        this.setState(state =>({
                vision: !state.vision
            }));
    }
    render() {
        if (this.state.vision) {
            return (
                <>
                    <Banner1/>
                    <button className={'btn btn-warning ml-auto mr-auto mt-5 mb-5'} onClick={this.readClick}><h2>Ещё!</h2></button>
                </>
            )
        }
        else {
            return (
                <>
                    <Banner2/>
                    <button className={'btn btn-warning ml-auto mr-auto mt-5 mb-5'} onClick={this.readClick}><h2>Ещё!</h2></button>
                </>
            )
        }
    }
}
export default Banners;
