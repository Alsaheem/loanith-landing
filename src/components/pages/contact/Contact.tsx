import * as React from 'react';
import {
    Layout, Input, Button,  Card,  Row, Col
} from 'antd';
import './Contact.css';


const { TextArea } = Input;

const Contact = () => {

    return (
        <div className='wrapper-contact'>
            <div className="banner-contact">
                {/* <img src="./assets/contact.png" height={200} width={'100%'}loading="lazy"/> */}
            </div>
            <h3 className="header--wrapper-contact">GET IN TOUCH</h3>
            <Row>
                <Col span={12}>
                    <div className='rightSide'>
                        <h5 className='header--title--wrapper'>Loanith Nigeria HQ</h5>
                        <p>
                            Hours: <br />
                                    Mondays - Fridays: 9:00am - 4:00pm<br />
                                    Saturdays: 10:00am - 3:00pm

                                </p>
                        <p>  Address: <br />
                                1, Raji Abayomi Street, Oshodi, Lagos

                                </p>
                        <p>Phone: +2347031231728</p>
                        <p>
                            Email:<br />
        For Complaint: support@loanith.com <br />
        For Feedback and Other Enquiries: info@loanith.com
                                </p>
                        {/* <p> Facebook: https://www.facebook.com/myloanith<br />
        Instagram: https://www.instagram.com/myloanith</p> */}

                    </div>
                </Col>
                <Col span={12}>
                    {/* <div className='leftSide'>
                        <Card style={{ width: 400 }} className='card-style'>
                            <Input placeholder="Name in full" allowClear style={{background:'red'}} />
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
                    </div> */}
                </Col>
            </Row>
        </div>

    )
}

export default Contact;
