import React from 'react';

const PatientEnter= ({ handleEnterReception }) => {
  return (
    <div className='customer'>
      <div>לחץ כאן לקבלת מספר</div>
      <div className='enterNumber'>
        <button className='getNumber' onClick={handleEnterReception}>
          קבלת תור
        </button>
      </div>
      <div className='saveNumber'>יש לשמור את המספר לאורך הטיפול</div>
    </div>
  );
};

export default PatientEnter;
