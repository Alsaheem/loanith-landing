import React, { Component } from 'react';
import { Input, Button } from 'antd';
import './LeaderBoard.css';

interface Props {

}
interface State {

}
const dataSource = [
    {
        key: '1',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street',
    },
    {
        key: '2',
        name: 'John',
        age: 42,
        address: '10 Downing Street',
    },
];

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
];
const LeaderBoard = () => {
    return (
        <div>
            <div className={'header--wrapper'}>
                <p className={'header--wrapper--text'}>Your Position</p>
            </div>
            <div className={'leader--position'}>
                <div className={'leader--position--child'}>
                    <div className={'leader--position--child-content'}>
                    <p>Enter your email address to check your position</p>
                    <p><Input size="large" type='email' placeholder={'email address of your friend'} style={{width:'60%', height:'35px'}}/> <span><Button className='btn'>My Position</Button></span></p>
               
                    </div>
 </div>
            </div>
            <div className={'header--wrapper'}>
                <p className={'header--wrapper--text'}>Invite a Friend</p>
            </div>
            <div className={'leader--position'}>
                <div className={'leader--position--child'}>
                    <p><Input placeholder={'email address of your friend'} style={{width:'60%', height:'36px'}}/> <span><Button className='btn' onClick={() => alert()}>Invite</Button></span></p>
                    <p><Input value={'tinyurl/code'} style={{width:'60%' , height:'36px'}} /> <span><Button className='btn' onClick={() => alert()}>Copy</Button></span></p>
                </div>
            </div>

            <div className={'header--wrapper'}>
                <p className={'header--wrapper--text'}>LeaderBoard</p>
            </div>
            <div className={'leader--position'}>
                <div className={'leader--position--child'}>
                    <table className={'table'} >
                        <tr>
                            <th>Rank</th>
                            <th>Name in full</th>
                            <th>Scores</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Smith Adams</td>
                            <td>95</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Micheal Jackson</td>
                            <td>94</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>John Doe</td>
                            <td>80</td>
                        </tr>
                    </table>
                </div>
            </div>


        </div>
    )
}

export default LeaderBoard; 
