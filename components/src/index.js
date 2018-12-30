import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";


const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<CommentDetail
					author="Cat"
					timeAgo="Today"
					content="CATCATCAT"
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>

			<ApprovalCard>
				<h4>Warning!</h4>
				<div>
					Are you sure?
				</div>
			</ApprovalCard>
		</div>
	);
};

ReactDOM.render(
	<App/>,
	document.querySelector('#root')
);