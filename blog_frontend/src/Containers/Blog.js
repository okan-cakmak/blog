import axios from "axios"
import React, { Component } from "react";
import { connect } from 'react-redux'
import {createItem} from '../Redux/action'
import {
    TextField,
    FormControl
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";



const styles = theme => ({
    root: {
        flexGrow: 1,
        maxWidth: 752
    },
    demo: {
        backgroundColor: theme.palette.background.paper
    },
    title: {
        margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`
    }
});


class Blog extends React.Component {

    componentDidMount() {
        // axios.get('http://0.0.0.0:8000/api/posts')
        //     .then(response => {
        //             console.log(response)
        //             this.setState({"name": "okan", "posts": response.data})
        //         }
        //     )
        //     .catch(err => console.log(err));
        // this.setState({"name": "okan"})

        this.props.createItem("ananzaaaaaaaaa")
    }

    render() {
        return (
            <div>
                <div>
                    <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                        <FormControl>
                            <TextField
                                label="New Task"
                                id="margin-dense"
                                value={this.props.posts}
                                margin="dense"
                                name="item"
                            />
                        </FormControl>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
	posts: state.posts
})

const mapDispatchToProps = {
        createItem
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog)
