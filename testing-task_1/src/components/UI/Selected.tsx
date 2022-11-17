import React, { FC, useEffect, useState } from 'react';

import Input from './Input';
import styles from '../../styles/Selected.module.css';
import { AviaService } from '../../services/AviaService';

interface SelectedProps {}

const Selected: FC<SelectedProps> = ({}) => {
	const data = AviaService.getPostAvia();

	return (
		<form>
			{data &&
				data.map((d) => (
					<label className={styles.form__label}>
						<input
							type='radio'
							className={styles['form__label-input']}
							name='radio'
						/>
						<div className={styles['form__label-btn']}>
							{d.start} --- {d.end}
						</div>
					</label>
				))}
		</form>
	);
};

export default Selected;
