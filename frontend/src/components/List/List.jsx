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
        let {data, type} = this.props;         
        if (type === 'catalog')
        {
            return <div className = 'list list_type_catalog'>
                <div className = {`list list_type_catalog__header list__header${this.state.isOpen ? '__invers' : ''}`} onClick={this.changeState}>{data.name}</div>
                <div className = {`list list__body${this.state.isOpen ? '' : '__concealed'}`}>
                    {data.records.map(record =>
                        <a href={record.link} className = 'list list__record list_type_catalog__record ' key = {record.name}>
                            <div>{record.name}</div> 
                            <Icon code = {String.fromCharCode(parseInt("f054", 16))} font = "faFree"  className = "list__record" />
                        </a>
                    )}
                </div>
            </div>
        }
        if (type === 'course')
        {
            return <div className = 'list list_type_course'>
                <div className = {`list list_type_course__header `} onClick={this.changeState}>{data.name} 
                        <span className = {`caret caret${this.state.isOpen ? '__concealed' : ''}`}/>
                </div>
                <div className = {`list list__body${this.state.isOpen ? '' : '__concealed'}`}>
                    <ol>
                    {data.records.map(record =>
                        <li key = {record.name} className = 'list list__record list_type_course__record' >{record.name}</li>
                    )}
                    </ol>
                </div>
            </div>
        }
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
    type: PropTypes.oneOf(['catalog', 'course'])
};
List.defaultProps = {
    type: 'catalog'
};
export default List;