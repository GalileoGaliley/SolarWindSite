import React from 'react';
import oneNum from "../Components/oneSecond.png";
import twoNum from "../Components/twoSecond.png";
import threeNum from "../Components/threeSecond.png";
import fourNum from "../Components/forSecond.png";

const Stages = () => {
    return (
        <div>
            <h2 className={' mt-5 mb-3 d-flex justify-content-center'}>Этапы работы!</h2>
            <div className={'blogProd mt-4'}>

                <div className={'stage'}>

                    <img src={oneNum} className={'imagesNum'}/>
                    <div className={'textStage text-center'}>
                        <h3 className={'w-100 d-flex justify-content-center'}>Создание идеи</h3>
                        <p className={'mt-3'}>
                            На данном этапе нам необходимо определиться с тематикой проекта (сайта, сервиса).
                            Далее, в соответствии с выбранной темой, необходимо собрать соответствующие материалы: текстовые,
                            графические.
                        </p>

                    </div>


                </div>
                <div className={'stage'}>


                    <div className={'textStage text-center'}>
                        <h3 className={'w-100 d-flex justify-content-center'}>Проработка макета проекта</h3>
                        <p className={'mt-3'}>
                            Для отрисовки наброска можно использовать бумагу и ручку, Photoshop, любой другой редактор графики.
                            Важно отметить, что данный этап – это не отрисовка готового дизайн-макета,
                            а всего лишь схематичный набросок, выполненный для понимания того,
                            как на сайте будут располагаться основные информационные блоки,
                            графика и прочие элементы дизайна.
                        </p>

                    </div>
                    <img src={twoNum} className={'imagesNum'}/>
                </div>
                <div className={'stage'}>
                    <img src={threeNum} className={'imagesNum'}/>
                    <div className={'textStage text-center'}>
                        <h3 className={'w-100 d-flex justify-content-center'}>Уточнение деталей и дизайна!</h3>
                        <p className={'mt-3'}>
                            На этом этапе обсуждается будущий стиль проекта, навигация на сайте или в приложении (переключение между страницами или,
                            экранами в мобильном приложении), паттерны построения дизайна.
                        </p>

                    </div>

                </div>
                <div className={'stage'}>
                    <div className={'textStage text-center'}>
                        <h3 className={'w-100 d-flex justify-content-center'}>Разработка!</h3>
                        <p className={'mt-3'}>
                            Итак, процесс дизайна макета страницы плавно перетекает в процесс «оживления»
                            сделанного на предыдущих этапах. Прежде чем сразу начинать писать код, стоит еще раз поговорить о структуре проекта.
                        </p>

                    </div>
                    <img src={fourNum} className={'imagesNum'}/>
                </div>

            </div>
        </div>
    );
};

export default Stages;