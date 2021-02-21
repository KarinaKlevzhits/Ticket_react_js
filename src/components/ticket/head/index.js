import React from 'react'
import Logo from './logo'
import Title from './title'
import styles from './style.module.css'

class TicketHead extends React.Component{
    render(){
        return(
            <div className = {styles.head}>
                <Logo></Logo>
                <Title></Title>
            </div>
        )
    }
}
export default TicketHead;