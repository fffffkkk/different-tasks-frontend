import React, { FC, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import styles from '../styles/AppRouter.module.css';
import Avia from '../pages/Avia';
import AviaInfo from '../pages/AviaInfo';
import Layout from './Layout';

interface AppRouterProps {}

const AppRouter: FC<AppRouterProps> = ({}) => {
	const [cityFrom, setCityFrom] = useState<string>();
	const [cityTo, setCityTo] = useState<string>();
	const [dateThere, setDateThere] = useState<string>();
	const [dateBack, setDateBack] = useState<string>();

	return (
		<Layout>
			<Routes>
				<Route path='/info' element={<AviaInfo dateThere={dateThere!} dateBack={dateBack!} cityFrom={cityFrom!} cityTo={cityTo!} />} />
				<Route path='/*' element={<Avia cityFrom={cityFrom!} cityTo={cityTo!} dateThere={dateThere!} dateBack={dateBack!} setCityFrom={setCityFrom} setCityTo={setCityTo} setDateThere={setDateThere} setDateBack={setDateBack}/>} />
			</Routes>
		</Layout>
	);
};
export default AppRouter;
