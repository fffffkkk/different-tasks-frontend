import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '@/pages/Home';
import CreateTodo from '@/pages/CreateTodo';
import TodoDetail from '@components/TodoDetail';

interface AppRouterProps {}

const AppRouter: FC<AppRouterProps> = ({}) => {
	return (
		<Routes>
			<Route path='/create-todo' element={<CreateTodo />} />
			<Route path='/todo-detail/:id' element={<TodoDetail />} />
			<Route path='/*' element={<Home />} />
		</Routes>
	);
};
export default AppRouter;
