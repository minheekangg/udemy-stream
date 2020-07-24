import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';

import StreamForm from './StreamForm';

class StreamEdit extends React.Component{
    componentDidMount(){
        this.props.fetchStream(this.props.streamId);
    }

    onSubmit = formValues => {
        this.props.editStream(this.props.streamId, formValues)
    }

    render() {
        if (!this.props.stream) return <div>Loading...</div>

        return (
            <div>
                <h3>Stream Edit</h3>
                <StreamForm onSubmit={this.onSubmit} initialValues={ _.pick(this.props.stream, 'title', 'description' ) } />
            </div >
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.stream[ownProps.match.params.id],
        streamId: ownProps.match.params.id
    }
}

const actions = {
    editStream,
    fetchStream
}

export default connect(mapStateToProps, actions)(StreamEdit);