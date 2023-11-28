import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList"
import { Transaction } from "./TransactionHistory/TransactionHistory";

import userInfo from '../data/user.json';
import data from '../data/data.json'
import friends from '../data/friends.json'
import transactions from '../data/transactions.json'


export const App = () => { 
  return (  
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
    
      
      <Profile user={userInfo}></Profile>
      <Statistics data={data}></Statistics>
      <FriendList friends={friends}></FriendList>
      <Transaction items={transactions} />
    </div>
      
     
  );
};
