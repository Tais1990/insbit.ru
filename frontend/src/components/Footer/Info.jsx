import React from 'react'
import PropTypes from 'prop-types';
import styles from './Info.scss';

class ColumnInfo extends React.Component {
    constructor() {
        super();
    }
    render(props, state) {
    	let {params} = this.props;
        return <div className = 'info__column'> 
        	<div className='info__column__title'>{params.title}</div>
        	{params.records.map(record =>  
                <a key = {record.text} href = {record.link} className='info__column__link'>
                	{record.text}
                </a>
            )}  
        </div>
    }
}
ColumnInfo.propTypes = {
	params: PropTypes.shape({
		title: PropTypes.string,
		records: PropTypes.arrayOf(
			PropTypes.shape({
				text: PropTypes.string,
				link: PropTypes.string
			})
		)
	})
}
class Info extends React.Component {
    constructor() {
        super();
    }
    render(props, state) {
    	let {data} = this.props;
        return <div className='info'> 
        	{data.map(col =>  
                <ColumnInfo params = {col} key = {col.title}/> 
            )}  
        </div>
    }
}
Info.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string,
			records: PropTypes.arrayOf(
				PropTypes.shape({
					text: PropTypes.string,
					link: PropTypes.string
				})
			)
		})
	).isRequired	
};
export default Info;