import React, { useState, useEffect, ChangeEvent, MouseEvent } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { LoadingOutlined } from '@ant-design/icons';
import gql from 'graphql-tag';
import { truncate } from 'fs/promises';

const Footer = () => {
	const [ contactName, setContactName ] = useState<string>('');
	const [ contactEmail, setContactEmail ] = useState<string>('');
	const [ contactMessage, setContactMessage ] = useState<string>('');
	const [ sentStatus, setSentStatus ] = useState<string>('');
	const [ sentError, setSentError ] = useState<string>('');
	const [ isLoading, setIsLoading ] = useState<boolean>(false);

	useEffect(
		() => {
			setTimeout(() => {
				setSentStatus('');
			}, 5000);
		},
		[ sentStatus ]
	);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		let query = event.target.value;
		setContactName(query);
	};
	const handleChange2 = (event: ChangeEvent<HTMLInputElement>) => {
		let query = event.target.value;
		setContactEmail(query);
	};

	const handleChangeText = (event: ChangeEvent<HTMLTextAreaElement>) => {
		let query = event.target.value;
		setContactMessage(query);
	};

	const handleSubmit = (event: MouseEvent<HTMLElement>) => {
		event.preventDefault();
		let details = {
			fullName: contactName,
			email: contactEmail,
			message: contactMessage
		};

		setIsLoading(true);
		messageSupport();

		console.log('===========', details);
	};

	const [ messageSupport ] = useMutation(MESSAGE_SUPPORT, {
		variables: {
			email: contactEmail,
			name: contactName,
			message: contactMessage
		},
		update(_, result) {
			console.log('Mess Res =======', result.data.messageSupport.message);
			setSentStatus(result.data.messageSupport.message);
			setIsLoading(false);
			setContactMessage('');
			setContactEmail('');
			setContactName('');
		},
		onError(err) {
			setSentError('Email does not seem to exist, Please try again later');
			setIsLoading(false);
		}
	});
	return (
		<div className="bg_footer container-fluid p-2 mt-4">
			<img src="./assets/loanith-logo.png" width={155} height={40} loading="lazy" />
			<div className="row">
				<div className="col-md-3 col-sm-6">
					<ul>
						<li>Careers</li>
						<li>
							<Link to="/waitlist">Waitlist</Link>
						</li>
						<li>About Us</li>
						<li>Developers</li>
						<li>
							<Link to="/blog">Knowledge Center</Link>
						</li>
						<li>
							<Link to="/privacy">Privacy Policy</Link>
						</li>
						<li>
							<Link to="/terms">Terms & Conditions</Link>
						</li>
					</ul>
				</div>
				<div className="col-md-3 col-sm-6">
					<ul>
						<li className="text_loanith font-weight-bold">Download The App</li>
						<li className="text-w text-light">
							<Link to="/waitlist">
								{' '}
								<a> Google Playstore</a>{' '}
							</Link>
						</li>
						<li className="text-w">
							<Link to="/waitlist">Apple App Store</Link>
						</li>
					</ul>
				</div>
				<div className="col-md-3 col-sm-6">
					<ul>
						<li className="text_loanith font-weight-bold">Follow us</li>
						<li>
							{' '}
							<a className="text-w" href="">
								Linkedin
							</a>{' '}
						</li>
						<li>
							<a className="text-w" target="_blank" href="https://www.facebook.com/myloanith">
								Facebook
							</a>
						</li>
						<li>
							<a className="text-w" target="_blank" href="https://www.instagram.com/myloanith">
								Twitter
							</a>
						</li>
					</ul>
				</div>
				<div className="col-md-3 col-sm-6">
					{sentStatus.length > 0 ? <p className="successMsg">{sentStatus}</p> : null}
					{sentError.length > 0 ? <p className="errorMsg">{sentError}</p> : null}
					<form action="">
						<ul>
							<li className="text_loanith font-weight-bold">Support</li>
							<li>
								<input
									type="text"
									placeholder="Full name"
									onChange={handleChange}
									name="fullname"
									className="form-control"
									value={contactName}
								/>
							</li>
							<li>
								<input
									type="text"
									placeholder="email"
									name="email"
									onChange={handleChange2}
									className="form-control"
									value={contactEmail}
								/>
							</li>
							<li>
								<textarea
									className="form-control"
									placeholder="message"
									onChange={handleChangeText}
									name=""
									id=""
									cols={30}
									rows={3}
									value={contactMessage}
								/>
							</li>
							<li>
								<div>
									{isLoading ? <LoadingOutlined /> : null}
									<button className="bg_loanith btn mt-2" onClick={handleSubmit}>
										Submit
									</button>
								</div>
							</li>
						</ul>
					</form>
				</div>
			</div>
			<div className="bgg_footer p-2">
				<div className="d-flex justify-content-center">
					<div className="text-center">Copyright 2020 | Loanith Inc</div>
				</div>
			</div>
		</div>
	);
};

const MESSAGE_SUPPORT = gql`
	mutation messageSupport($name: String, $email: String, $message: String) {
		messageSupport(supportInput: { name: $name, email: $email, message: $message }) {
			message
		}
	}
`;

export default Footer;
