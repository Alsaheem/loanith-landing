import React, { useEffect, useState, ChangeEvent } from 'react';
import { Input } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import { useQuery, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import './LeaderBoard.Module.css';

interface Props {}
interface State {}
const dataSource = [
	{
		key: '1',
		name: 'Mike',
		age: 32,
		address: '10 Downing Street'
	},
	{
		key: '2',
		name: 'John',
		age: 42,
		address: '10 Downing Street'
	}
];

const columns = [
	{
		title: 'Name',
		dataIndex: 'name',
		key: 'name'
	},
	{
		title: 'Age',
		dataIndex: 'age',
		key: 'age'
	},
	{
		title: 'Address',
		dataIndex: 'address',
		key: 'address'
	}
];
const LeaderBoard = () => {
	const [ foundUser, setFoundUser ] = useState<any>(null);
	const [ searchQuery, setSearchQuery ] = useState<string>('');
	const [ isLoading, setIsLoading ] = useState<boolean>(false);
	const [ searchError, setSearchError ] = useState<string>('');
    const [allLeaders, setAllLeaders] = useState<any>([]);
    useEffect(() => { });
    

    const { loading, data } = useQuery(FETCH_ALL_LEADERS)
    
    if (data) {
        console.log('+++', data.getAllLeaders)
        //setAllLeaders(data.getAllLeaders)
    }

	const [ checkPosition ] = useMutation(FETCH_USER, {
		variables: {
			email: searchQuery
		},
		update(_, result) {
			setFoundUser(result.data.checkPosition);
			setIsLoading(false);
			console.log('The rws: ', result.data.checkPosition);
		},
		onError(err) {
			setSearchError('Email does not seem to exist, Please try again later');
			setIsLoading(false);
		}
	});

	const handleSearch = () => {
		checkPosition();
		setIsLoading(true);
	};

	const handleSearchQuery = (event: ChangeEvent<HTMLInputElement>) => {
		let query = event.target.value;
		setSearchQuery(query);
		console.log('==>', query);
	};

	return (
		<div>
			<div className="header--wrapper-leaders">
				<p className="header--wrapper--text-leaders">Your Position</p>
			</div>
			<div className="leader--position">
				<div className="leader--position--child">
					<div className="leader--position--child-content">
						<p>Enter your email address to check your position</p>
						<p>
							<Input
								size="large"
								type="email"
								placeholder="email address of your friend"
								style={{ width: '60%', height: '40px' }}
								onChange={handleSearchQuery}
							/>
						</p>
						<p>
							<span onClick={handleSearch} className="btn">
								Send
								{isLoading ? <LoadingOutlined style={{ marginLeft: 20, marginBottom: 10 }} /> : null}
							</span>
						</p>
                        {
                            foundUser ? (<>
                                <p>Full name:  {foundUser.full_name}</p>
                                <p>Email: {foundUser.email}</p>
                                <p>Point: {foundUser.position + 1}</p>
                            </>) : null
                        }
						{searchError ? <p>{searchError}</p> : null}
					</div>
				</div>
			</div>
			<div className="header--wrapper-leaders">
				<p className="header--wrapper--text-leaders">Invite a Friend</p>
			</div>
			<div className="leader--position">
				<div className="leader--position--child-two">
					<div className="leader--position--child-content">
						<p>
							<Input
								placeholder="email address of your friend"
								style={{ width: '50%', height: '40px' }}
							/>{' '}
							<span className="btn-sm" onClick={() => alert()}>
								Invite
							</span>
						</p>
						<p>
							<Input value="tinyurl/code" style={{ width: '50%', height: '40px' }} />{' '}
							<span className="btn-sm" onClick={() => alert()}>
								Copy
							</span>
						</p>
					</div>
				</div>
			</div>

			<div className="header--wrapper">
				<p className="header--wrapper--text">LeaderBoard</p>
			</div>
			<div className="leader--position">
				<div className="leader--position--child">
					<table className="table">
						<tr>
							<th>Rank</th>
							<th>Name in full</th>
							<th>Scores</th>
                        </tr>
                        
                        <tr>
                            {
                                data.map((item:any, index: number) => {
                                    return(
                                        <td>{item.fullname}</td>
                                    )
                                })
                            }
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
	);
};

const FETCH_USER = gql`
	mutation checkPosition($email: String!) {
		checkPosition(email: $email) {
			full_name
			email
			position
		}
	}
`;
const FETCH_ALL_LEADERS = gql`
	
   { getAllLeaders{
    id
    email
    fullName
    point
  }}
    
`;

export default LeaderBoard;
