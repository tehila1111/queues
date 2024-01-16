// CurrentQueueDisplay.js
import React from 'react';

const CurrentQueueDisplay = ({ receptionQueue, doctorQueue, triageQueue, treatmentQueue, ECGQueue }) => {
  return (
    <div className='allQueues'>
      <div>
        <strong>תור קבלה:</strong> {receptionQueue.join(', ')}
      </div>
      <div>
        <strong>תור רופא:</strong> {doctorQueue.join(', ')}
      </div>
      <div>
        <strong>תור טריאג':</strong> {triageQueue.join(', ')}
      </div>
      <div>
        <strong>תור טיפולים:</strong> {treatmentQueue.join(', ')}
      </div>
      <div>
        <strong>תור אקג:</strong> {ECGQueue.join(', ')}
      </div>
      <hr />
    </div>
  );
};

export default CurrentQueueDisplay;
