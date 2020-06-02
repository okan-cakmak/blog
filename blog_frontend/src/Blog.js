import React from 'react';
import axios from "axios"

class Blog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            posts: []
        }
    }


    componentDidMount() {
        axios.get('http://0.0.0.0:8000/api/posts')
            .then(response => {
                    console.log(response)
                    this.setState({"name": "okan", "posts": response.data})
                }
            )
            .catch(err => console.log(err));
        this.setState({"name": "okan"})
    }

    render() {
        const name = this.state.name
        return (
            <div>
                {this.state.posts.map(p =>
                    <div key={p.id}>
                        <h1>
                            {p.content}
                        </h1>
                        <h2>
                            {p.title}
                        </h2>
                    </div>
                )}
                SLM CNM
            </div>
        );
    }
}

export default Blog