import React, { FC, useState } from 'react';

import styles from '../../styles/Input.module.css';

interface InputProps {
	type: 'date' | 'text' | 'radio';
	text: string;
	name: string;
	required: boolean;
	value: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	errorMsg?: string;
	pattern?: string;
	placeholder?: string;
}

const Input: FC<InputProps> = ({
	type,
	text,
	placeholder,
	onChange,
	value,
	name,
	required,
	pattern,
	errorMsg,
}) => {
	return (
		<label className={styles.label} htmlFor={name}>
			<p>{text}</p>
			<input
				type={type}
				placeholder={placeholder}
				min='2022-11-14'
				onChange={onChange}
				name={name}
				required={required}
				pattern={pattern}
				title={errorMsg}
				value={value}
			/>
		</label>
	);
};
export default Input;
