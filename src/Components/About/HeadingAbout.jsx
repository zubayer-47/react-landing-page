/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./HeadingAbout.css";

const workLink = [
	'YouTuber',
	'Instagram',
	'Google',
	'Facebook',
	'Github'
]

const aboutDetails = ['User Id', 'Name', 'Email', 'Phone', 'Profession']

const skills = ['MERN Dev', 'Web Dev', 'PHP Dev']

export default function HeadingAbout() {
	return (
		<div className="Heading__About--wrapper">
			<div className="Heading__About--box bg-light">
				<div className="row">
					<div className="col-sm-12">
						<div className="d-flex justify-content-between align-items-center display-b">
							<div className="AboutHeading__child1">
								<button className="btn btn-secondary">Change Photo</button>
							</div>
							<p className="text-left">Rankings: 1/10</p>
							<button className="btn-custom">Edit Profile</button>
						</div>
					</div>
				</div>
				<div className="row mt">
					<div className="col-md-4">
						<p className="text-muted">Work Link</p>
						{workLink.map((link) => (
							<p>
								<a href="#" className="btn">
									{link}
								</a>
							</p>
						))}
						<p className="text-muted my-3">Skills</p>
						{skills.map((skill) => (
							<p>{skill}</p>
						))}
					</div>

					<div className="col-md-8">
						<div className="about__header">
							<ul className="d-flex justify-content-start align-items-center">
								<li>
									<h6>About</h6>
								</li>
								<li>
									<h6>Timeline</h6>
								</li>
							</ul>
						</div>
						<div className="details">
							{aboutDetails.map(detail => <p>{detail}</p>)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
