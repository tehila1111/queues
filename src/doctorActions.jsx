// RoomActions.js
import React from 'react';

const DoctorActions = ({
    doctorQueue,
    handleRedirectToReception,
    handleRedirectToTreatment,
    handleRedirectToTriage,
    handleRedirectToECG,
}) => {
    return (
        <div className='reception'>
            <div className='roomTitle'>חדר רופא  </div>
            {doctorQueue.length > 0 ? (<>
                <div>מטופל מספר: {doctorQueue[0]}</div>
                <div className='allSendBtns'>
                    <div>
                        <button className='sendBtn' onClick={() => handleRedirectToReception(doctorQueue[0])}>
                            העבר לקבלה
                        </button>
                    </div>
                    <div>
                        <button className='sendBtn' onClick={() => handleRedirectToTreatment(doctorQueue[0])}>
                            העבר לחדר טיפולים
                        </button>
                    </div>
                    <div>
                        <button className='sendBtn' onClick={() => handleRedirectToTriage(doctorQueue[0])}>
                            העבר לחדר טריאג
                        </button>
                    </div>
                    <div>
                        <button className='sendBtn' onClick={() => handleRedirectToECG(doctorQueue[0])}>
                            העבר לחדר אקג
                        </button>
                    </div>
                </div>
            </>
            ) : (
                <p>תור רופא ריק</p>
            )}
        </div>
    );
};

export default DoctorActions;
