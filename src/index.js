// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'; // ./ says look in the same folder

// Create a react component
const App = () => {
	return (
		<div className="ui container comments">
			<CommentDetail author="Sam" timeAgo="Today at 4:45PM" commentText="Nice blog post!" avatar={faker.image.avatar()}/>
			<CommentDetail author="Alex" timeAgo="Today at 2:00PM" commentText="I totally agree." avatar={faker.image.avatar()}/>
			<CommentDetail author="Jane" timeAgo="Yesterday at 8:03AM" commentText="Samesies!" avatar={faker.image.avatar()}/>
			<CommentDetail author="Mallory" timeAgo="Yesterday at 7:45AM" commentText="I can't believe it." avatar={faker.image.avatar()} />
			<CommentDetail author="Paul" timeAgo="Yesterday at 2:23AM" commentText="Love this <333" avatar={faker.image.avatar()}/>
		</div>
	);
};



// Take the react component and show it on the screen
ReactDOM.render(
	<App />,
	document.querySelector('#root')

	);
