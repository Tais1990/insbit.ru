import React from 'react'
import PropTypes from 'prop-types';
import styles from './Catalog.scss';
import List from '../List/List.jsx';
import VendorsStore from '../../stores/Vendors.jsx';
import { observer } from 'mobx-react';

@observer
class Catalog extends React.Component {
    constructor() {
        super();      
    }

    render(props, state) {        
        return <div className='catalog'>
            {VendorsStore.getList.map(vendor =>
                <List key = {vendor.name} data = {vendor}/>
            )}        
        </div>
    }
}
export default Catalog;