import React from 'react'
import NavigationPC from './NavigationPC'
import NavigationPhone from './NavigationPhone'

const MainNavigation = (props) => {
    return (
        <>
            <NavigationPC onFind={props.findTask}/>
            <NavigationPhone onFind={props.findTask} />
        </>
    )
}

export default MainNavigation