import React, { Component } from 'react';
import {
  Input, Button, Collapse, 
} from 'antd';
import './Support.css'


interface Props {

}
interface State {

}


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

<div className="banner-support">
                {/* <img src="./assets/contact.png" height={200} width={'100%'}loading="lazy"/> */}
            </div>
            <div className='header--wrapper-leaders'>
                <p className='header--wrapper--text-leaders'>Frequently Asked Questions</p>
            </div>
            <div className='leader--position'>
                <div className='leader--position--child'>
                    <div className='leader--position--child-content'>
                        <div style={{border: 'none'}}>
                            <Collapse accordion>
                                <Panel header="THow is Loanith Different from a Credit and Debit Card?" key="1">
                                    <p>Loanith allows you to borrow money from loan investors, with the agreement you will pay a percentage of interest on any outstanding debt at the end of each billing cycle.
However, with Loanith credit account, you do not need a card with maintenance fees to use this money. All you need is a smartphone, the Loanith App, and a complete profile.<br />
A debit card pulls money directly from an associated bank account. Unlike Loanith Credit Account and Credit Cards, you generally cannot build a credit history using debit cards.
</p>
                                </Panel>
                                <Panel header="What information does Loanith require when I apply for a Credit Account?" key="2">
                                <p>Applying for a Loanith Credit Account is a simple, straightforward process that requires some basic information. You will need a smartphone and the Loanith App to provide basic personal information and create a credit account such as:</p>
<ul>
<li>Phone Number</li>
<li>Date of Birth</li>
<li>Bank Verification Number (BVN)</li>
<li>Full Name</li>
<li>Physical address (No P.O. Boxes)</li>
<li>Estimated gross annual income</li>
<li>Checking and/or savings account information</li>
</ul>
                                </Panel>
                                <Panel header="Must I have a good credit history to open a Loanith Credit Account?" key="3">
                                    <p>No! Loanith has a credit offer for everyone aged 18 and above. We want to help you build a credit history with a great credit score.</p>
                                </Panel>
                            </Collapse>
                        </div>

                    </div>
                </div>
            </div>
            <div className='header--wrapper-leaders'>
                <p className='header--wrapper--text-leaders'>Still Have a Question? Ask  support</p>
            </div>
            <div className='leader--position'>
                <div className='leader--position--child'>
                    <div className='leader--position--child-content'>
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