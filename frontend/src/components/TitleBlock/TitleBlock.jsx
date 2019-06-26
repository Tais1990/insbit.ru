import React from 'react'
import PropTypes from 'prop-types';

class TitleBlock extends React.Component {
    constructor() {
        super();
    }
    render(props, state) {
        let {text} = this.props;
        return <h2>{text}</h2>
    }
}
TitleBlock.propTypes = {
	text: PropTypes.string
};
export default TitleBlock;