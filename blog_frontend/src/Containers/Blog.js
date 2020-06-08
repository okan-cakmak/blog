import React from "react";
import {connect} from 'react-redux'
import {getPosts} from '../Redux/action'
import {Card, Row, Col, Divider} from 'antd';
import "antd/dist/antd.css";


class Blog extends React.Component {

    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        const posts = this.props.posts
        console.log(posts)
        return (
            <Col span={12} offset={6}>

                {posts.map(p => (
                    <Row gutter={[48, 48]}>
                        <Col span={24}>
                        <Card key={p.id} title={p.title} style={{width: '100%'}}>
                            <p>{p.content}</p>
                        </Card>
                        </Col>
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
