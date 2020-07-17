import React, { Component } from 'react';
import {
    Layout, Input, Button, Collapse, Typography, Select
} from 'antd';
import './Support.css'


interface Props {

}
interface State {

}


const { Option } = Select;
const { Content } = Layout;
const { Text } = Typography;
const { TextArea } = Input;
const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const Support = () => {


    return (

        <div>


            <div className={'header--wrapper-leaders'}>
                <p className={'header--wrapper--text-leaders'}>Frequently Asked Questions</p>
            </div>
            <div className={'leader--position'}>
                <div className={'leader--position--child'}>
                    <div className={'leader--position--child-content'}>
                        <div style={{border: 'none'}}>
                            <Collapse accordion>
                                <Panel header="This is panel header 1" key="1">
                                    <p>{text}</p>
                                </Panel>
                                <Panel header="This is panel header 2" key="2">
                                    <p>{text}</p>
                                </Panel>
                                <Panel header="This is panel header 3" key="3">
                                    <p>{text}</p>
                                </Panel>
                            </Collapse>
                        </div>

                    </div>
                </div>
            </div>
            <div className={'header--wrapper-leaders'}>
                <p className={'header--wrapper--text-leaders'}>Still Have a Question? Ask  support</p>
            </div>
            <div className={'leader--position'}>
                <div className={'leader--position--child'}>
                    <div className={'leader--position--child-content'}>
                        <div>
                            <div>
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
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Support;