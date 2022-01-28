import React, {Component} from 'react';
import Banners from "./Banners";
import Sliderr from "./Sliderr";
import image from "./dev.jpeg"
class About extends Component {

    render() {
        return (
            <div className={'aboutUs'}>
                <div className={'row'}>
                    <div className={'headLine'}>
                        <p>Разработка сайтов, лендингов и магазинов</p>
                    </div>
                </div>
                <div className={'row  m-0 conc'}>
                    <div className={'col-sm-1 m-2 cont squareOne'}>

                    </div>
                    <div className={'col m-4 cont p-2'}>

                        <h2>
                            Мы - команда выполняющая разработку мобильных и веб приложения с нуля.
                            Наши услуги включают брендинг, производство рекламных материалов,
                            разработку сайтов и мобильных приложений, полную поддержку после запуска и эффективное привлечение клиентов.
                            <h2 className={'textAbout mt-4'}>
                              Наша цель - сделать так, что-бы после проделанной работы заказчик остался доволен!
                            </h2>
                        </h2>


                    </div>
                </div>


                <div className={'row m-0'}>
                    <Banners />
                </div>
            </div>

        );
    }
}

export default About;
