import React, { FC } from 'react';

import Selected from '../components/UI/Selected';
import styles from '../styles/AviaInfo.module.css';

interface AviaInfoProps {
	dateThere: string;
	dateBack: string;
	cityTo: string;
	cityFrom: string;
}

const AviaInfo: FC<AviaInfoProps> = ({
	dateThere,
	dateBack,
	cityTo,
	cityFrom,
}) => {
	console.log(dateBack);
	return (
		<div className={styles.content}>
			<div className={styles.card__wrapper}>
				<div className={styles['card-left']}>
					{cityTo}---{cityFrom}
				</div>
				<Selected />
				<div className={styles['card-right']}>
					{dateBack ? '9300₽' : '4150₽'}
				</div>
			</div>
		</div>
	);
};
export default AviaInfo;
