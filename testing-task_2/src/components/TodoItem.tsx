// @ts-nocheck
import React, { FC } from 'react';

import { ITodo } from '@/models/ITodo';

interface TodoItemProps {
	todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
	const date = new Date(
		{ ...todo.createdAt }.seconds * 1000 +
			{ ...todo.createdAt }.nanoseconds / 1000000
	);

	return (
		<div className='flex flex-col items-center mb-10 border-2 border-cyan-600'>
			<h2 className='text-xl'>Заголовок: {todo.title}</h2>
			<p className='text-lg'>ОПИСАНИЕ: {todo.description}</p>
			<p
				className={`${'text-lg'} ${
					todo.completed ? 'text-green-500' : 'text-red-500'
				}`}
			>
				СТАТУС ЗАДАЧИ: {todo.completed.toString()}
			</p>
			<p
				className={`${'text-lg'} ${
					new Date().toISOString().slice(0, 10) > todo.date
						? 'text-red-500'
						: 'text-green-500'
				}`}
			>
				ДАТА ЗАВЕРШЕНИЯ ЗАДАЧИ: {todo.date}
			</p>
			<img className='w-[500px] h-[500px]' src={todo.imageUrl} alt='todo-img' />
			<p>ДАТА СОЗДАНИЯ: {date.toDateString()}</p>
			<p>ID: {todo.id}</p>
		</div>
	);
};
export default TodoItem;
