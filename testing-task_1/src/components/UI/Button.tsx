import React, { FC } from 'react';

import styles from '../../styles/Button.module.css';

interface ButtonProps {
	children: React.ReactNode;
	disabled: boolean;
	click: () => void;
}

const Button: FC<ButtonProps> = ({ children, disabled, click }) => {
	return (
		<button
			disabled={disabled}
			onClick={click}
			className={`${styles.btn} ${disabled && styles.btn__disabled}`}
		>
			{children}
		</button>
	);
};
export default Button;
