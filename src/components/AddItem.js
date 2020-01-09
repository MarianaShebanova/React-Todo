import React from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';
import { connect } from 'react-redux';
import axios from 'axios';

class AddItem extends React.Component {
    state = {
        credentials: {
            item_name: '',
            item_description: '',
            item_price: 0.0,
            l_id: 1,
            c_id: 1
        },
        username: ''
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    add = e => {        
        e.preventDefault();
        console.log(this.state.credentials);
        axiosWithAuth()
            .post('https://build-week-africanmarketplace.herokuapp.com/api/users/1/items', this.state.credentials)
            .then(res => {
                this.props.history.push('/set-price');
            })
            .catch(err => console.log(err.response));
    };

    render() {
        console.log(this.state.username);
        return (
            <div className="home-page">
                <h1>Add Item</h1>
                <div className="addFormStyles">
                    <form onSubmit={this.add} className="regFormStyles">
                        <div>
                            <label className="label" htmlFor="item_name">Name:</label>
                            <input className="titleStyles"
                                type="text"
                                name="item_name"
                                value={this.state.credentials.item_name}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div>
                            <label className="label" htmlFor="item_price">Price:</label>
                            <input className="titleStyles"
                                type="number"
                                name="item_price"
                                value={this.state.credentials.item_price}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div>
                            <label className="label" htmlFor="item_description">Description:</label>
                            <input className="titleStyles"
                                type="text"
                                name="item_description"
                                value={this.state.credentials.item_description}
                                onChange={this.handleChange}
                            />
                        </div>
                        <button className="postButton">Add</button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        username: state.username
    }
};

export default connect(
    mapStateToProps
)(AddItem);

