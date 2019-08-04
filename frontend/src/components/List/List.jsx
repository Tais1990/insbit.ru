import React from 'react'
import PropTypes from 'prop-types';
import styles from './List.scss';
import Icon from '../Icon/Icon.jsx';
//import TrainingProgram from './TrainingProgram.jsx';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
        this.changeState = this.changeState.bind(this);
    }
    changeState() {
        this.setState({isOpen: !this.state.isOpen})
    }
    render() {
        let {data} = this.props; 
        return <div className = 'list'>
            <div className = {`list list__header list__header${this.state.isOpen ? '__invers' : ''}`} onClick={this.changeState}>{data.name}</div>
            <div className = {`list list__body${this.state.isOpen ? '' : '__concealed'}`}>
                {data.records.map(record =>
                    <a href={record.link} className = 'list list__record' key = {record.name}>
                        <div>{record.name}</div> 
                        <Icon code = {String.fromCharCode(parseInt("f054", 16))} font = "faFree"  className = "list__record" />
                    </a>
                )}
            </div>
        </div>
    }
}

List.propTypes = {    
    data:  PropTypes.shape(
        {
            name: PropTypes.string,
            records: PropTypes.arrayOf(
                PropTypes.shape(
                {
                    name: PropTypes.string,
                    link: PropTypes.string
                }
            ))
        }
    ),
    //type: PropTypes.oneOf(['catalog'])
};
export default List;