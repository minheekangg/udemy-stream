import { connect } from 'react-redux';

import GoogleAuth from './GoogleAuth';
import { signIn, signOut } from '../../actions';

const mapStateToProps = state => {
    return {
        isSignedIn: state.auth.isSignedIn
    }
}

const actions = {
    signIn, signOut
}

export default connect(mapStateToProps, actions)(GoogleAuth);