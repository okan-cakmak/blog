import React  from "react";
import { connect } from 'react-redux'
import {getPosts} from '../Redux/action'
import { Card, Row, Col } from 'antd';
import "antd/dist/antd.css";




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
        this.props.getPosts();
    }

    render() {
        const posts = this.props.posts
        console.log(posts)
        return (
                    <Col span={12} offset={6}>

                        {posts.map(p=>(
                            <Row gutter={[16, 40]}>
                            <Card key={p.id} title={p.title} style={{ width: '100%' }}>
                                <p>{p.content}</p>
                            </Card>
                            </Row>
                        ))}
                    </Col>
        );
    }
}

const mapStateToProps = (state) => ({
	posts: state.posts
})

const mapDispatchToProps = {
    getPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog)
