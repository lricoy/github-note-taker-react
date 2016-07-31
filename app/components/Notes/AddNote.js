import React, {Component} from 'react';

class AddNote extends Component {
    handleSubmit () {
        // handles the submit
        var newNote = this.note.value;
        this.note.value = '';
        this.props.addNote(newNote);
    }    
    setRef(ref) {
        this.note = ref;
    }    
    render() {
        return (
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Add new note" ref={(ref) => this.setRef(ref)} />
                <span className="input-group-btn">
                    <button 
                        type="button" 
                        className="btn btn-default" 
                        onClick={() => this.handleSubmit()}>
                        Submit
                    </button>
                </span>
            </div>
        )
    }
}

AddNote.propTypes = {
    username: React.PropTypes.string.isRequired,
    addNote: React.PropTypes.func.isRequired
}

export default AddNote;