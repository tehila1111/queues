import React from 'react';

const RoomMonitor = ({ title, currentQueue, renderNextCustomer }) => {
  return (
    <div className={`roomMonitor roomScreen ${title.toLowerCase()}Monitor`}>
      <div className='roomTitle'>{title}</div>
      <div>מטופל נוכחי</div>
      <div className='currentNum'>{currentQueue[0]}</div>
      {renderNextCustomer(currentQueue)}
    </div>
  );
};

export default RoomMonitor;
