import React, { Component } from 'react';
import {  Input, Button, Collapse, Row, Col, Card} from 'antd';
import './Waitlist.css';

interface Props {

}
interface State {

}

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
                        Increased interest free period: <br />Each Point equals 1 hour addition to your interest free period to a maximum of 1 year.
</p>
                    </Col>
                    <Col  className="gutter-row" span={8}>
                        <p className='text-style'>
                        Earn Cashback Match: <br />Top 25 earns 100% match, Next 1000 earns 50% match and others earn 25% match on first year cashback.
 </p>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <p className='text-style'>
                        Hall of Fame: <br />Top the leaderboard and be the first to use loanith. If you are, you&#39;ve won a lifetime interest free bounty.
 </p>
                    </Col>
                 
                </Row>
                <div className='second-div'>
                <Row>
                    <Col className="gutter-row"  span={6}>HOW IT WORKS</Col>
                    <Col className="gutter-row"  span={18}>
                    Leading the board could be so easy.<br />
Join waitlist by completing the form below to earn your first 100 points. 1 point = 1 hkHiur <br />
Invite your friend via email and social media handles. You earn 50 points when each friend joins the waitlist using your referral link.<br />
Encourage your friends to invite others to join the waitlist. You earn 10 points when friends of your friend joints the waitlist.<br />

                    </Col>
                </Row>
                </div>
            </div>
            <div className='header--wrapper'>
                <p className='header--wrapper--text'>Join Wait 
                list</p>
            </div>
            <div className='leader--position'>
 
                <div className=''>

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
