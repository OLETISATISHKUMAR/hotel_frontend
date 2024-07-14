const RecentActivity = () => {
    const activities = [
      { avatar: 'https://via.placeholder.com/150', message: 'requested a room', time: '2 hours ago', name: 'John Doe' },
      { avatar: 'https://via.placeholder.com/150', message: 'requested a room', time: '3 hours ago', name: 'Jane Smith' },
      { avatar: 'https://via.placeholder.com/150', message: 'requested a room', time: '4 hours ago', name: 'Michael Brown' },
    ];
  
    return (
      <div className="bg-white w-[550px] rounded-lg shadow-md p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Recent Activity</h2>
          <a href="/view-all" className="text-blue-500 hover:underline">View All</a>
        </div>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-center p-4 border rounded-lg shadow-sm">
              <img src={activity.avatar} alt={activity.name} className="w-12 h-12 rounded-full mr-4" />
              <div>
                <p className="text-sm font-medium text-gray-800">{activity.name} <span className="text-xs text-gray-600">{activity.message}</span></p>
                <p className="text-xs text-gray-600">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default RecentActivity;
  