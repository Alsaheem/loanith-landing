import React from 'react';
import { Row, Col } from 'antd';

const Blog = (props: any) => {
    return (
        <div>
            <div className='blog'>
                <Row  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} >
                    <Col className="gutter-row" span={8}>
                        <div className='featured-image'></div>
                    </Col>
                    <Col className="gutter-row" span={16}>
                        <h4>{props.title}</h4>
                        <p>{props.exerpts}</p>
                        <a href={props.link}>read more</a>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Blog;