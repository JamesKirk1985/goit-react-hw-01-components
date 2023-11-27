import { Profile } from "./Profile/Profile";

import  userInfo  from '../data/user.json';
export const App = () => {
  console.log(userInfo.username)
  console.log(userInfo.stats.followers)
  return (
  
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
    
      
      <Profile userInfo={userInfo}></Profile>
    </div>
      
     
  );
};
