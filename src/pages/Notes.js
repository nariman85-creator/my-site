import React from 'react'

export default function Notes({notes}) {
    return (
        <ul className="list-group">
        {notes.map(note=>(
        <li className="list-group-item note" key={note.id}>
        <strong>{note.title}</strong><span>{new Date().toLocaleDateString()}</span>
        <button type="button" className="btn btn-outline-danger btn-sm">&times;</button>
        </li>

        ))}
        </ul>
    )
}