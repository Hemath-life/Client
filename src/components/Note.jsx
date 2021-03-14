import React, { useState, useEffect } from "react"
import dateFormat from "dateformat"
import "./Note.css"
import axios from "axios"

function Note(props) {
	const [items, setItems] = useState([])
	const [request, setRequest] = useState(true)
	const [date, setDate] = useState("")

	useEffect(() => {
		if (request) fetchItems()
		setRequest(false)
	}, [])

	const fetchItems = async () => {
		const data = await fetch("https://keeper-noteforu.herokuapp.com/")
		const items = await data.json()
		console.log(items)
		setItems(items)
	}

	const deleteItem = async props => {
		console.log(props.target.id)
		const id = props.target.id
		await fetch(`https://keeper-noteforu.herokuapp.com/delete/${props.target.id}`)
		setItems(preValue => preValue.filter(item => item._id !== id))
	}

	return (
		<div className='model'>
			{items.map(item => {
				return (
					<div className='note' key={item._id}>
						<h1>{item.title}</h1>
						<p>{item.description}</p>
						<i className='fas fa-trash' id={item._id} onClick={deleteItem}></i>
						{}
						<h5>{dateFormat(item.createdAt, "dS mmmm, yyyy")}</h5>
					</div>
				)
			})}
		</div>
	)
}

export default Note
