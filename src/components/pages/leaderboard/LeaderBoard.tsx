import React, { useEffect, useState, ChangeEvent, MouseEvent } from 'react';
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
	const [copySuccess, setCopySuccess ] = useState<boolean>(false);
	const [inviteLoading, setInviteLoading ] = useState<boolean>(false);
	const [ searchError, setSearchError ] = useState<string>('');
	const [ invitationErrorMsg, setInvitationErrorMsg ] = useState<string>('');
	const [ invited, setinvited ] = useState<string>('');
	const [resp, setResp ] = useState<string>('');
	const [refCode, setRefCode ] = useState<string>('');
	const [refLink, setRefLink ] = useState<string>('');
	const [referral, setReferral ] = useState<string>('');
	const [allLeaders, setAllLeaders] = useState<any>([]);
	useEffect(() => { 
		if (copySuccess) {
			setTimeout(() => {
				setCopySuccess(false)
			}, 3000)
		}
		if (resp) {
			setTimeout(() => {
				setResp('')
			}, 3000)
		}
		if (invitationErrorMsg) {
			setTimeout(() => {
				setInvitationErrorMsg('')
			}, 3000)
		}
	}, [resp, invitationErrorMsg]);
    

    const { loading, data } = useQuery(FETCH_ALL_LEADERS)
    
    // if (data) {
    //     console.log('+++', data.getAllLeaders)
    //     //setAllLeaders(data.getAllLeaders)
    // }

	const [ checkPosition ] = useMutation(FETCH_USER, {
		variables: {
			email: searchQuery
		},
		update(_, result) {
			setFoundUser(result.data.checkPosition);

			setRefCode(result.data.checkPosition.referralCode)
			setRefLink(result.data.checkPosition.referralLink)
			setIsLoading(false);
			console.log('The rws: ', result.data.checkPosition);
		},
		onError(err) {
			setSearchError('Email does not seem to exist, Please try again later');
			setFoundUser('')
			setIsLoading(false);
		}
	});

	const [joinByRefferal] = useMutation(JOIN_BY_REFFERAL, {

		variables: {
			email: invited,
			code:refCode
		},

		update(_, result) {
			setResp(result.data.joinByReferral.message);
			setInviteLoading(false)
			setinvited('')
		},
		onError(err) {
			setInvitationErrorMsg('Error occurr while sending invitation, Please try again later');
			setFoundUser('')
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
	const handleOnInvite = (event: ChangeEvent<HTMLInputElement>) => {
		let query = event.target.value;
		setinvited(query);
		console.log('==>', query);
	};
	const handleCopy = (event: MouseEvent<HTMLElement>) => {

		navigator.clipboard.writeText(refLink);
		setCopySuccess(true)

	};


	const sendInvite = () => {
		const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/

		if (invited.length <= 0) {
			setInvitationErrorMsg("Receipent email can not be empty")
		}else if (!invited.match(regEx)) {
			setInvitationErrorMsg("Email must be valid")
		} else {
			setInviteLoading(true)
		joinByRefferal()	
		}
		
	}
	return (
		<div>
			<div className="header--wrapper-leaders">
				<p className="header--wrapper--text-leaders">Your Position</p>
			</div>
			<div className="leader--position">
				<div className="leader--position--child">
					<div className="leader--position--child-content">
						<p>Enter your email address to check your position and invite friends</p>
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
			{
				foundUser ? (
					<>
					<div className="header--wrapper-leaders">
						<p className="header--wrapper--text-leaders">Invite a Friend</p>
					</div>
					<div className="leader--position">
						<div className="leader--position--child-two">
								<div className="leader--position--child-content">
									{invitationErrorMsg.length > 0 ? <p className='invitation_err_msg'>{invitationErrorMsg}</p> : null}
									{resp.length > 0 ? <p className='invitation_succ_msg'>{resp}</p> : null}
								<p>
									<Input
										placeholder="email address of your friend"
											style={{ width: '50%', height: '40px' }}
											value={invited}
											onChange={handleOnInvite}
									/>{' '}
									<span className="btn-sm" onClick={sendInvite}>
											Invite
													{inviteLoading ? <LoadingOutlined style={{ marginLeft: 20, marginBottom: 10 }} /> : null}
							</span>
								</p>
								<p>
										<Input value={refLink}  disabled={true} contentEditable={false} style={{ width: '50%', height: '40px' }} />{' '}
										<span>
											<button className="btn-smm" onClick={handleCopy}>Copy</button>
											{
												copySuccess ?
													<div style={{ "color": "green" }}>
													Link copied
            										</div> : null
											}
										
							</span>
								</p>
							</div>
						</div>
						</div>
						</>
				) :null
			}

			<div className="header--wrapper">
				<p className="header--wrapper--text">LeaderBoard</p>
			</div>
			<div className="leader--position">
				<div className="leader--position--child">
					<table className="table">
						<tr>
							<th>Rank</th>
							<th>Name in full</th>
							<th>Email</th>
							<th>Ithcoin</th>
						</tr>

						
							{
								loading ? (
									<p>Loading........</p>
							) : (
									data.getAllLeaders === 0 ? (
										<p>No contacts</p>
									) : data.getAllLeaders && data.getAllLeaders.map((item: any, index: any) => (
										<tbody key={index}>
											<tr>
											<td>{index + 1}</td>
											<td>{item.fullName}</td>
											<td>{item.email}</td>
												<td>{item.point}</td>
											</tr>
										</tbody>
									))
		
										
						)
							}

							
						


					</table>

					
				</div>
			</div>
		</div>
	);
};

const FETCH_USER = gql`
	mutation checkPosition($email: String!) {
		checkPosition(email: $email) {
			fullName
			email
			position
			referralCode
			referralLink
		}
	}
`;

const JOIN_BY_REFFERAL = gql`
	mutation joinByReferral($email: String!, 
	$code:String) {
		joinByReferral(email:$email, code:$code){
    message
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
