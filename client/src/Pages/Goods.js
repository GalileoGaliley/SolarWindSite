import React from 'react';
import Images1 from './phonePackage.svg';

export default function Goods (props) {
	return(
		<>
				<div className={'package text-light' + props.bg}>
					<h2>{props.title}</h2>
					<div className={'discriptionWare'}>
						{props.discription}
					</div>
					<img className={'packageImage'} src={props.source} alt={'image'} />

				</div>
		</>
		)
}
