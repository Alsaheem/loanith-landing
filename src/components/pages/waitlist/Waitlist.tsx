import React from 'react';
import { Input, Button, Collapse, Row, Col, Card, Select } from 'antd';
import './Waitlist.css';

interface Props {

}
interface State {

}

const { TextArea } = Input;
const { Panel } = Collapse;
const { Option } = Select;




const Waitlist = () => {
    return (
        <div className='wrapper'>
<div className="banner-support">
                {/* <img src="./assets/contact.png" height={200} width={'100%'}loading="lazy"/> */}
            </div>


            <div className='why-waitlist'>
                <h3> Why WaitList</h3>
                <Row gutter={{ xs: 8, sm: 16, md: 16, lg: 32 }}>
                    <Col className="gutter-row"   xs={24} sm={24} md={8} lg={8} xl={8} >
                        <p className='text-style'>
                            Increased interest free period: <br />Each Point equals 1 hour addition to your interest free period to a maximum of 1 year.
</p>
                    </Col>
                    <Col className="gutter-row"  xs={24} sm={24} md={8} lg={8} xl={8} >
                        <p className='text-style'>
                            Earn Cashback Match: <br />Top 25 earns 100% match, Next 1000 earns 50% match and others earn 25% match on first year cashback.
 </p>
                    </Col>
                    <Col className="gutter-row"  xs={24} sm={24} md={8} lg={8} xl={8} >
                        <p className='text-style'>
                            Hall of Fame: <br />Top the leaderboard and be the first to use loanith. If you are, you&#39;ve won a lifetime interest free bounty.
 </p>
                    </Col>

                </Row >
                <div className='second-div'>
                    <div>
                    <h4 style={{textAlign: 'center'}}> HOW IT WORKS</h4>
                    </div>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} >
                        <Col className="gutter-row" span={6}>
                            
                            <div className='wait-list-image'>

                            </div>
                            </Col>
                        <Col className="gutter-row" span={18}>
                            <div style={{display: 'flex', justifyContent:'centre', alignItems:'centre', padding: '30px'}}> 
                            <div style={{padding: '20px'}}>
                            Leading the board could be so easy.<br />
Join waitlist by completing the form below to earn your first 100 points. 1 point = 1 hkHiur <br />
Invite your friend via email and social media handles. You earn 50 points when each friend joins the waitlist using your referral link.<br />
Encourage your friends to invite others to join the waitlist. You earn 10 points when friends of your friend joints the waitlist.<br />

                            </div>
                           
                            </div>

                        </Col>
                    </Row>
                </div>
            </div>
            <div className={'header--wrapper'}>
                <p className={'header--wrapper--text'}>Join Wait
                list</p>
            </div>
            <div className={'leader--position'}>

                <div className={'card-style-wrapper'}>

                    <Card className='card-style'>
                        <Input placeholder="Name in full" className='inputStyle' />
                        <br />
                        <br />
                        <Input placeholder="Enter email " className='inputStyle'  />
                        <br />
                        <br />
                        <Select defaultValue="Employed" style={{width:'100%'}} onSelect={(value) => console.log(value)}>
                            <Option value="10">Self Employed</Option>
                            <Option value="20">Unemployed</Option>
                            <Option value="50">Full time staff</Option>
                        </Select>
                        <br />
                        <br />
                        <Select defaultValue="Lagos" style={{width:'100%'}}  onSelect={(value) => console.log(value)}>
                            <Option value="10">Lagos</Option>
                            <Option value="20">Ogun</Option>
                            <Option value="50">Oyo</Option>
                            <Option value="100">Ondo</Option>
                            <Option value="200">Osun</Option>
                        </Select>
                        <br />
                        <br />
                        <Select defaultValue="50k -100k" style={{width:'100%'}}  onSelect={(value) => console.log(value)}>
                            <Option value="50k -100k">50k -100k</Option>
                            <Option value="100k - 200k">100k - 200k</Option>
                            <Option value="200k -500k">200k -500k</Option>
                            <Option value="500k - 1m">500k - 1m</Option>
                            <Option value="Above 1m">Above 1m</Option>
                        </Select>
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
