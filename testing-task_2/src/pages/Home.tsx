// @ts-nocheck
import React, { FC, useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
	collection,
	onSnapshot,
	query,
	QuerySnapshot,
} from 'firebase/firestore';

import { db } from '../firebase';
import { ITodo } from '@/models/ITodo';
import TodoItem from '@/components/TodoItem';

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
	const navigate = useNavigate();
	const [todo, setTodo] = useState<ITodo[]>();

	useEffect(() => {
		const q = query(collection(db, 'todos'));
		const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
			let todoArr = [];
			QuerySnapshot.forEach((doc) => {
				todoArr.push({ ...doc.data(), id: doc.id });
			});
			setTodo([...todoArr]);
		});

		return () => unsubscribe();
	}, []);

	return (
		<div>
			<div className='flex gap-10 justify-center mb-10'>
				<h1 className='text-2xl'>Todos</h1>
				<button
					className='p-2 bg-cyan-500 rounded-lg'
					onClick={() => navigate('/create-todo')}
				>
					Create Todo
				</button>
			</div>

			{todo ? (
				<>
					{todo.map((t) => (
						<Link to={`/todo-detail/${t.id}`} key={t.id}>
							<TodoItem todo={t} />
						</Link>
					))}
				</>
			) : (
				<div>Нет TODO</div>
			)}
		</div>
	);
};
export default Home;
