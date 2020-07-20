/* eslint-disable */

import React from 'react';
import { connect } from "react-redux";
import PropTypes  from "prop-types";
import { addFlashMessage } from '../_actions/auth.actions';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({component: Component, auth:{ isAuthenticated  },...rest}) => {

    return (
        <Route {...rest} render={ props => (
            !isAuthenticated ? <Redirect to="/login"/> : <Component {...props} />


        )} />
    );
};

PrivateRoute.protoTypes = {
    auth: PropTypes.object.isRequired
}

const mapState = (state) => ({
    auth: state.user
});

export default connect(mapState)(PrivateRoute);