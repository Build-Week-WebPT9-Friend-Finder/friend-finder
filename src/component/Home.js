import React, { useEffect } from 'react';
import { axiosWithAuth } from "./axiosWithAuth";
import { Card } from 'semantic-ui-react'

import { connect } from 'react-redux';
import { getUser } from '../actions';

function Home({ getUser, users, isFetching, error }) {
    useEffect(() => {
        axiosWithAuth()
            .get('/user')
            .then(res => {
                getUser();
            })
            .catch(err => {
                console.log(err)
            });
    }, [getUser]);

    if (isFetching) {
        return (
            <div>Fetching your data</div>
        )
    }

    return (
        <div>
            <h1>List of Users</h1>
            <div className="cards">
                {users.map(user => (
                    <Card key={user.user_id}>
                        <p>{user.name}</p>
                        <p>{user.bio}</p>
                        <p>{user.dob}</p>
                        <p>{user.gender}</p>
                        <p>{user.location}</p>
                    </Card>
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        users: state.users,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(
    mapStateToProps, { getUser })(Home);