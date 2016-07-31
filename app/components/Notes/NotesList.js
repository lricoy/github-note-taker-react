import React, {Component} from 'react';

const getNotesList = ({notes}) => notes.map((note, index) => (
    <li className="list-group-item" key={index}>{note}</li>
));

class NotesList extends Component {
    render() {
        const notes = getNotesList(this.props)
        return (
            <ul className="list-group">
                {notes}
            </ul>
        )
    }
}

export default NotesList;