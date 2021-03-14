import React, { useState } from "react"
import "./CreateArea.css"
import axios from "axios"

function CreateArea(props) {
	const [note, setNote] = useState({
		title: "",
		content: ""
	})

	function handleChange(event) {
		const { name, value } = event.target
		setNote(prevNote => {
			return {
				...prevNote,
				[name]: value
			}
		})
	}

	const sendNote = async => {
		const params = new URLSearchParams()
		params.append("title", note.title)
		params.append("des", note.content)
		axios
			.post("https://keeper-noteforu.herokuapp.com/add", params, {
				headers: {
					"Content-Type": "application/x-www-form-urlencoded"
				}
			})
			.then(
				response => {
					console.log(response)
				},
				error => {
					console.log(error)
				}
			)
	}

	return (
		<div>
			<form>
				<input
					name='title'
					onChange={handleChange}
					value={note.title}
					placeholder='Title'
				/>
				<textarea
					name='content'
					onChange={handleChange}
					value={note.content}
					placeholder='Take a note...'
					rows='5'
				/>
				<button onClick={sendNote}>Add </button>
			</form>
		</div>
	)
}

export default CreateArea
