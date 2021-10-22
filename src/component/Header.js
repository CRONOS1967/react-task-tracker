import React from 'react'
import Button from './Button'
const Header = ({title, showAdd,show}) => {
    // const onClick = ()=>{
    //     console.log('click');
    // }
    return (
        <header className='header'>
            <h1 >{title}</h1>
           <Button color = {show ? 'red':'green'} text ={show ? 'Close' : 'Add Task'} onClick={showAdd}/>
        </header>
    )
}
Header.defaultProps={
    title: 'Task Tracker'
}
//  const headingStyle = {
//     color:'red', backgroundColor:'black'
//  }

export default Header
