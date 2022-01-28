import React, {Component} from 'react';
import Boll from "./Boll";
const hdln1 = "Дизайн!";
const hdln2 = "Разработка!";
const hdln3 = "Заказ?";

const dsd1 = "Просто раскажите как вы представляете себе сайт. Наш дизайнер будет обговаривать с вами каждую деталь, что-бы вы точно остались довольны!";
const dsd2 = "Скажите нам о том, какой функционал сайта или приложения вы хотите видеть, и мы воплотим это в жизнь!";
const dsd3 = "Просто заполните форму обратной связи. Мы с вами свяжемся и расскажем детали и расчитаем стоимость работ.";
class Bolls extends Component {
    render() {
        return (
            <div>
                <div className={'row m-0 conc bolls'}>
                    <Boll headline = {hdln1} descrip = {dsd1}/>
                    <Boll headline = {hdln2} descrip = {dsd2}/>
                    <Boll headline = {hdln3} descrip = {dsd3}/>
                </div>
            </div>
        );
    }
}

export default Bolls;