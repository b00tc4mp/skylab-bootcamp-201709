import React, {Component} from 'react'
import { Grid, Row, Col, ButtonToolbar, DropdownButton, MenuItem, Button } from 'react-bootstrap'

const BUTTONS = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger']

class HelloWorld extends Component {
    render() {
        return <Grid>
            <Row>
                <Col xs={12} sm={3} md={3}><h1>Hello, World!</h1></Col>
                <Col xs={12} sm={8} md={8}>
                    <ButtonToolbar>
                    {
                        BUTTONS.map(function(title, i) {
                            return <DropdownButton bsStyle={title.toLowerCase()} title={title} key={i} id={`dropdown-basic-${i}`}>
                                <MenuItem eventKey="1">Action</MenuItem>
                                <MenuItem eventKey="2">Another action</MenuItem>
                                <MenuItem eventKey="3" active>Active Item</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey="4">Separated link</MenuItem>
                            </DropdownButton>
                        })
                    }
                    </ButtonToolbar>
                </Col>
                <Col xs={12} sm={1} md={1}><Button bsStyle="success">Success</Button></Col>
            </Row>
        </Grid>
    }
}

export default HelloWorld