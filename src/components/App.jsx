
import UserData from './Profile/UserData.json';
import FriendListData from './FriendList/FriendListData.json';
import StatisticsData from './Statistics/StatisticsData.json';
import TransactionHistoryData from './TransactionHistory/TransactionHistoryData.json';

import { Profile } from './Profile/Profile';
import { Statistics } from  './Statistics/Statistics'
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';


export default function App() {
  return (
    <div className="wrapper">
      <Profile
        name={UserData.username}
        tag={UserData.tag}
        location={UserData.location}
        avatar={UserData.avatar}
        followers={UserData.stats.followers}
        views={UserData.stats.views}
        like={UserData.stats.likes}
      />
      <Statistics
        items={StatisticsData}
        title={StatisticsData.title}
      />
      <FriendList
        items={FriendListData}
      />
      <TransactionHistory
        items={TransactionHistoryData}
      />
    </div>
  );
};
