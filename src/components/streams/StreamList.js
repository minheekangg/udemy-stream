import React from 'react';
import { connect } from 'react-redux';

import { fetchStreams } from '../../actions/index';

class StreamList extends React.Component {
    componentDidMount() {
        console.log('props', this.props)
        this.props.fetchStreams()
    }
    render() {
        return <div>hiStreamList</div>
    }
}

export default connect(null, { fetchStreams })(StreamList);