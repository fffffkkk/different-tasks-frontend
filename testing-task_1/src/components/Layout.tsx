import React, { FC } from 'react';

import styles from '../styles/Layout.module.css';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
	return <div className={styles.container}>{children}</div>;
};
export default Layout;
