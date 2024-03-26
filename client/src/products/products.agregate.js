import Corner from './corner/Page'
import Profile from './profile/Page'


export const usePages = (id) => {
    if(id === 'construct-corner') return Corner 
    if(id === 'construct-profile') return Profile 

    return <div></div>
}

