import React from 'react'
import PropTypes from 'prop-types';
import styles from './Item.scss';
import List from '../List/List.jsx';

class Item extends React.Component {
    constructor() {
        super();
    }
    render(props, state) {
        let {title, data, type, beforeData} = this.props;     
        if (type == 'paragraph')
        {
            return <div className = 'item'>
                { title && <div className = 'item__title'> {title} </div>}
                <div className = 'item__data'> {data} </div>
            </div>  
        }
        if (type == 'list')
        {
            return <div className = 'item'>
                { title && <div className = 'item__title'> {title} </div>}
                <div className = 'item__data'> 
                    {beforeData && <div>{beforeData}</div>}
                    <ul>
                        {data.map(record =>  
                            <li key = {record}>{record}</li>
                        )}
                    </ul>
                </div>
            </div>  
        }
        if (type == 'html')
        {
            return <div className = 'item item_type_html'>
                { title && <div className = 'item__title'> {title} </div>}
                <div className = 'item__data' dangerouslySetInnerHTML={{__html: data}} />
            </div>  
        }
        if (type === 'multiList')
        {
            return  <div className = 'item_type_multiList' >
            { title && <div className = 'item__title'> {title} </div>}
            <ol>
                { data.map(mode => <li key = {mode.name} ><List data = {mode} type = 'course'/></li>) }
            </ol>
            </div>
        }

    }
}
Item.propTypes = {
    title: PropTypes.string,    
    data: PropTypes.any,
    type: PropTypes.oneOf(['paragraph', 'list', 'html', 'multiList']),
    beforeData: PropTypes.string
};
Item.defaultProps = {
  type: 'paragraph'
};

export default Item;