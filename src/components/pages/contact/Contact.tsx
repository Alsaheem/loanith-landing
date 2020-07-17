import * as React from 'react';
import {
    Layout, Input, Button, List, Rate, Card, Avatar, Typography, Spin, Select, Row, Col
} from 'antd';
import './Contact.css';

const { Option } = Select;
const { Content } = Layout;
const { Text } = Typography;
const { TextArea } = Input;

const Contact = () => {

    return (
  
           
                <div className='wrapper-contact'>
                    <h3 className="header--wrapper-contact">GET IN TOUCH</h3>
                    <Row>
                        <Col span={12}>
                            <div className='rightSide'>
                                <h5 className='header--title--wrapper'>Loanith Nigeria HQ</h5>
                                <p>
                                    Hours: <br />
                                    Open 8:00AM ⋅ Closes 6PM
                                </p>
                                <p>  Address: <br />
                                Beside Ogba Road, Central Mosque Garage, Pero Bus Stop, 3/ 4 Imagbo Avenue, Lagos
                                </p>
                                <p>Phone: 0702 768 7280</p>


                            </div>
                        </Col>
                        <Col span={12}>
                            <div className='leftSide'>
                                <Card style={{ width: 400 }} className='card-style'>
                                    <Input placeholder="Name in full" allowClear />
                                    <br />
                                    <br />
                                    <Input placeholder="Enter email " allowClear />
                                    <br />
                                    <br />
                                    <TextArea placeholder="textarea with clear icon" allowClear />
                                    <br />
                                    <br />
                                    <Button type="primary" className='color-primary'>
                                        Send
                                    </Button>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </div>
      
    )
}

export default Contact;
