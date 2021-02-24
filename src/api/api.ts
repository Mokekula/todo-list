import { ITodo } from 'types/todo';

export const apiGetNotes = (): Promise<any> => {
	return fetch(`http://localhost:3000/notes`)
		.then((res) => res.json())
		.catch((error) => console.error(error));
};

export const apiAddNote = (note: ITodo): Promise<any> => {
	return fetch(`http://localhost:3000/notes`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(note),
	})
		.then((res) => res.json())
		.catch((error) => alert(error.message));
};

export const apiDeleteNote = (id: number): Promise<any> => {
	return fetch(`http://localhost:3000/notes/${id}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
	}).catch((error) => console.log(error));
};

export const apiChangeNoteDone = (payload: {id: number, done: boolean}): Promise<any> => {
	return fetch(`http://localhost:3000/notes/${payload.id}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ done: payload.done }),
	}).catch((error) => console.log(error));
};

