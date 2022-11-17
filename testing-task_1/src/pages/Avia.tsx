import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../components/UI/Button';
import Input from '../components/UI/Input';
import styles from '../styles/Avia.module.css';

interface AviaProps {
	cityFrom: string;
	cityTo: string;
	dateThere: string;
	dateBack: string;
	setCityFrom: React.Dispatch<React.SetStateAction<string | undefined>>;
	setCityTo: React.Dispatch<React.SetStateAction<string | undefined>>;
	setDateThere: React.Dispatch<React.SetStateAction<string | undefined>>;
	setDateBack: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const Avia: FC<AviaProps> = ({cityFrom,
	cityTo,
	dateThere,
	dateBack,
	setCityFrom,
	setCityTo,
	setDateThere,
	setDateBack,}) => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate('/info');
	}
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
	};

	return (
		<form
			className={`${styles.form} ${styles.content}`}
			onSubmit={handleSubmit}
		>
			<div className={styles['form__wrapper-input']}>
				<Input
					text='Откуда'
					type='text'
					placeholder='Город вылета'
					name='cityFrom'
					required={true}
					pattern='[А-Яа-я]{3,10}'
					errorMsg='Город должен состоять из букв от а до я и длинной не менее 3 символов'
					onChange={(e) => setCityFrom(e.target.value)}
					value={cityFrom!}
				/>
				<Input
					text='Куда'
					type='text'
					placeholder='Город прилёта'
					name='cityTo'
					required={true}
					pattern='[А-Яа-я]{3,10}'
					errorMsg='Город должен состоять из букв от а до я и длинной не менее 3 символов'
					onChange={(e) => setCityTo(e.target.value)}
					value={cityTo!}					
				/>
				<Input 
					text='Туда' 
					type='date' 
					name='thereDate' 
					required={true} 
					onChange={(e) => setDateThere(e.target.value)} 
					value={dateThere!}
				/>
				<Input 
					text='Обратно' 
					type='date' 
					name='backDate' 
					required={false} 
					onChange={(e) => setDateBack(e.target.value)} 
					value={dateBack!}
				/>
			</div>
				<div className={styles['form__wrapper-btn']}>
					<Button 
						disabled={(cityFrom && cityTo && dateThere) ? false : true} click={handleClick}>
						Найти билеты
					</Button>
				</div>	
		</form>
	);
};
export default Avia;
