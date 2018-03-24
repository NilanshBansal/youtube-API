import React, { Component } from "react";
import SearchBar from "../../ui/SearchBar";
import Signup from "../../ui/Signup";

import { Tracker } from "meteor/tracker";

export default class AppMain extends Component {

	constructor(props) {
		super(props);
		this.state = { auth: false }
	}
	
	componentDidMount() {
		Tracker.autorun(() => {
			let auth = !!Meteor.userId();
			this.setState({ auth });
		});
	}

	render() {
		return (
			<div>
				{this.state.auth ? <SearchBar /> : <Signup />}
			</div>

        )
    }
}