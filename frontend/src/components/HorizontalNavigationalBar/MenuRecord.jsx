import React from 'react';
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import styles from './MenuRecord.scss';

class MenuRecord extends React.Component {
    constructor() {
        super();
        this.state = {isOpen : false}
    }
    // Вызывается после удаления компонента из DOM
    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside, false);
    }

    // Вызывается до рендера
    componentWillMount() {
        document.addEventListener('click', this.handleClickOutside, false);
    }
    handleClickOutside = (event) => {
        // Получаем элемент, на который произведен клик        
        const domNode = ReactDOM.findDOMNode(this);
        // Проверяем, что элемент присутствует в переменной,
        // а так же, является ли "domNode" узел потомком "event.target" узла.
        // Если не является, то скрываем элемент.
        if ((!domNode || !domNode.contains(event.target))) {
            if (this.state.isOpen)
            {
                this.setState({ isOpen : false});
            }
        }
        else {
            if (!this.state.isOpen)
            {
                this.setState({isOpen: true});
            }
        }
    }
    render(props, state) {
        let {name, records} = this.props;
        return <div className = 'menu-record' ref={ref => { this.myElement = ref; }}>
                <div className = 'menu-record__title'>{name}<span className = 'caret'/></div>

                <div className = {`menu-record__records${this.state.isOpen ? '' : '__concealed'}`}>
                    {records.map(record => 
                        <div key = {record.text} className = 'menu-record__record'>
                            <a href = {record.link}>{record.text}</a>
                        </div>
                    )}
                </div>
        	</div>
    }
}

MenuRecord.propTypes = {
    name: PropTypes.string,
    records: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string,
            link: PropTypes.string
        })
    )
};

export default MenuRecord;
