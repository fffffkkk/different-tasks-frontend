// @ts-nocheck
import React, { FC, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, updateDoc, Timestamp, deleteDoc } from 'firebase/firestore';

import { db } from '../firebase';

interface TodoDetailProps {}

const TodoDetail: FC<TodoDetailProps> = ({}) => {
	const { id } = useParams();
	const [formData, setFormData] = useState({
		title: '',
		description: '',
		createdAt: '',
		imageUrl: '',
		completed: false,
	});
	const navigate = useNavigate();

	const handleChange = (e: any) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const handleChangeCheck = () => {
		setFormData({ ...formData, completed: !formData.completed });
	};

	const changeTodo = async () => {
		if (!formData.title || !formData.description) {
			alert('Please fill all the fields');
			return;
		}
		await updateDoc(doc(db, 'todos', id), {
			title: formData.title,
			description: formData.description,
			changeAt: Timestamp.now().toDate(),
			completed: formData.completed,
		});
		navigate('/');
	};
	const deleteTodo = async () => {
		await deleteDoc(doc(db, 'todos', id));
		navigate('/');
	};

	console.log(formData);

	return (
		<div>
			<h2 className='text-xl mb-10 text-center'>Change todo: {id}</h2>
			<div className='flex flex-col text-center gap-10'>
				<label>
					Title
					<input
						type='text'
						name='title'
						className='border-2 border-slate-800'
						value={formData.title}
						onChange={(e) => handleChange(e)}
					/>
				</label>

				{/* description */}
				<label>
					Description
					<textarea
						name='description'
						value={formData.description}
						onChange={(e) => handleChange(e)}
						className='border-2 border-slate-800'
					/>
				</label>
				{/* status */}
				<label>
					status
					<input
						type='checkbox'
						className='border-2 border-slate-800'
						onChange={handleChangeCheck}
					/>
				</label>
			</div>
			<button
				onClick={changeTodo}
				className='p-2 bg-slate-600 text-white rounded-lg flex mx-[auto] mt-10'
			>
				Change
			</button>
			<button
				className='p-2 bg-red-600 text-white rounded-lg flex mx-[auto] mt-10'
				onClick={deleteTodo}
			>
				Delete this todo
			</button>
		</div>
	);
};
export default TodoDetail;
