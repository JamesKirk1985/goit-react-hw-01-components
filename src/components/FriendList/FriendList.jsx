import css from './FriendList.module.css'
export const FriendList = ({ friends }) => {
    return  <ul className={css.friendList}>{
        friends.map(({ avatar, name, isOnline, id }) => {
               
        return (
            <li className={css.item} id={id}>
                
                <span className={css.status} style={{ backgroundColor: ( isOnline ? 'green': 'red' ) }}></span>
                <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                <p className={css.name}>{name}</p>
                </li>
            
                )
        })}
   </ul> 
}