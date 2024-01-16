// ReceptionActions.js
import React from 'react';

const ReceptionActions = ({
  receptionQueue,
  handleRedirectToDoctor,
  handleRedirectToTreatment,
  handleRedirectToTriage,
  handleRedirectToECG,
  handleDeleteNumber,
  selectedNumber,
  setSelectedNumber,
  selectedRoom,
  setSelectedRoom,
  handleMoveToHead,
}) => {
  return (
    <div className='reception'>
      <div className='roomTitle'>דלפק קבלה </div>
      {receptionQueue.length > 0 ? (
        <>
          <div>מטופל מספר: {receptionQueue[0]}</div>
          <div className='allSendBtns'>
            <div>
              <button className='sendBtn' onClick={() => handleRedirectToDoctor(receptionQueue[0])}>
                העבר לרופא
              </button>
            </div>
            <div>
              <button className='sendBtn' onClick={() => handleRedirectToTreatment(receptionQueue[0])}>
                העבר לחדר טיפולים
              </button>
            </div>
            <div>
              <button className='sendBtn' onClick={() => handleRedirectToTriage(receptionQueue[0])}>
                העבר לחדר טריאג
              </button>
            </div>
            <div>
              <button className='sendBtn' onClick={() => handleRedirectToECG(receptionQueue[0])}>
                העבר לחדר אקג
              </button>
            </div>
          </div>



          <div className='actions'>
            <div>
              <button className='endTreatment' onClick={handleDeleteNumber}>
                סיום טיפול
              </button>
            </div>

          </div></>
      ) : (
        <p>תור הקבלה ריק</p>
      )}

    </div>
  );
};

export default ReceptionActions;
