// @ts-nocheck
import React, { useState } from 'react';
import { Timestamp, collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';

import { storage, db } from '../firebase';

export const CreateTodo = () => {
	const [formData, setFormData] = useState({
		title: '',
		description: '',
		image: '',
		date: '',
		completed: false,
		createdAt: Timestamp.now().toDate(),
	});
	const navigate = useNavigate();

	const handleChange = (e: any) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleImageChange = (e: any) => {
		setFormData({ ...formData, image: e.target.files[0] });
	};

	const handlePublish = () => {
		if (!formData.title || !formData.description || !formData.image) {
			alert('Please fill all the fields');
			return;
		}

		const storageRef = ref(
			storage,
			`/images/${formData.createdAt}${formData.image.name}`
		);

		const uploadImage = uploadBytesResumable(storageRef, formData.image);

		uploadImage.on(
			'state_changed',
			(snapshot) => {},
			(err) => {
				console.log(err);
			},
			() => {
				setFormData({
					title: '',
					description: '',
					image: '',
				});

				getDownloadURL(uploadImage.snapshot.ref).then((url) => {
					const articleRef = collection(db, 'todos');
					addDoc(articleRef, {
						title: formData.title,
						description: formData.description,
						imageUrl: url,
						completed: false,
						createdAt: Timestamp.now().toDate(),
						date: formData.date,
					})
						.then(() => {
							console.log('yes');
						})
						.catch((err) => {
							console.log(err);
						});
				});
			}
		);
		navigate('/');
	};

	console.log(formData);

	return (
		<>
			<h2 className='text-xl mb-10 text-center'>Create todos</h2>
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

				{/* date */}
				<label>
					Date
					<input
						type='date'
						name='date'
						className='border-2 border-slate-800'
						onChange={(e) => handleChange(e)}
					/>
				</label>

				{/* image */}
				<label>
					Image
					<input
						type='file'
						name='image'
						accept='image/*'
						onChange={(e) => handleImageChange(e)}
						className='border-2 border-slate-800'
					/>
				</label>
			</div>
			<button
				onClick={handlePublish}
				className='p-2 bg-slate-600 text-white rounded-lg flex mx-[auto] mt-10'
			>
				Publish
			</button>
		</>
	);
};

export default CreateTodo;
