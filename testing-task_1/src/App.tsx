import React, { FC } from 'react';
import AppRouter from './components/AppRouter';

interface AppProps {}

const App: FC<AppProps> = ({}) => {
	return (
		<div>
			<AppRouter />
		</div>
	);
};
export default App;
