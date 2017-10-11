import React, {Component} from 'react'

class AddTask extends Component {
    render() {
        return <form>
            <input name="text" type="text"/>
            <input type="submit" value="add"/>
        </form>
    }
}

export default AddTask