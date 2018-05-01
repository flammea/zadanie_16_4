import React from 'react';
import style from './Title.css';

const Title = props => (
	<div className={style.Title}>
		<h1>{props.title}</h1>
		<h2>Your ToDo Tasks: {props.numberoftask}</h2>
	</div>


export default Title;