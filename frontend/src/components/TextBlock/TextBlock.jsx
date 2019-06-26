import React from 'react'
import PropTypes from 'prop-types';
import styles from './TextBlock.scss';

class TextBlock extends React.Component {
    constructor() {
        super();
    }
    render(props, state) {
        let {children} = this.props;
        return <div className = 'text-block'>{children}</div>
    }
}
TextBlock.propTypes = {
	children: PropTypes.any
};
export default TextBlock;