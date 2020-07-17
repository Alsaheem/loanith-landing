import React, { Component } from 'react';
import { Layout, Input, Button, Collapse, Typography,  Select, Row, Col, Card} from 'antd';
import './Waitlist.css';

interface Props {

}
interface State {

}

const { Option } = Select;
const { Content } = Layout;
const { Text } = Typography;
const { TextArea } = Input;
const { Panel } = Collapse;

const Waitlist = () => {
    return (
        <div className='wrapper'>
         

    
            <div className='why-waitlist'>
                <h3> Why WaitList</h3>
                <Row gutter={{ xs: 8, sm: 16, md: 16, lg: 32 }}>
                    <Col className="gutter-row" span={8}>
                        <p className='text-style'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum convallis elit, a cursus ante venenatis eu. Fusce varius interdum porttitor.  
                        </p>
                    </Col>
                    <Col  className="gutter-row" span={8}>
                        <p className='text-style'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum convallis elit, a cursus ante venenatis eu. Fusce varius interdum porttitor.  
                        </p>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <p className='text-style'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum convallis elit, a cursus ante venenatis eu. Fusce varius interdum porttitor.  
                        </p>
                    </Col>
                 
                </Row>

            </div>
            <div className={'header--wrapper'}>
                <p className={'header--wrapper--text'}>Join Wait 
                list</p>
            </div>
            <div className={'leader--position'}>
 
                <div className={''}>

                <Card style={{ width: 400 }} className='card-style'>
                        <Input placeholder="Name in full"  className='inputStyle'/>
                        <br />
                        <br />
                        <Input placeholder="Enter email "  />
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
            </div>

        </div>
       
    )
}

export default Waitlist; 
