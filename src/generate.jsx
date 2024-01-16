import React, { useState } from 'react';
import './reception.css';
import logo from './logo.png'
import RoomMonitor from './roomMonitor';
import PatientEnter from './patientEnter';
import ReceptionActions from './receptionActions';
import CurrentQueueDisplay from './currentQueueDisplay';
import DoctorActions from './doctorActions';

const QueueSystem = () => {
    const [receptionQueue, setReceptionQueue] = useState([]);
    const [doctorQueue, setDoctorQueue] = useState([]);
    const [treatmentQueue, setTreatmentQueue] = useState([]);
    const [triageQueue, setTriageQueue] = useState([]);
    const [ECGQueue, setECGQueue] = useState([]);

    const [uniqueNumber, setUniqueNumber] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState('');
    const [selectedRoom, setSelectedRoom] = useState('reception');

    const generateUniqueNumber = () => {
        if (uniqueNumber <= 300) {
            setUniqueNumber(uniqueNumber + 1);
            return uniqueNumber;
        }
        return null;
    };

    const handleEnterReception = () => {
        const uniqueNumber = generateUniqueNumber();
        setReceptionQueue([...receptionQueue, uniqueNumber]);
    };


    // פעולות קבלה
    const handleRedirectToDoctor = (number) => {
        setReceptionQueue(receptionQueue.filter((num) => num !== number));
        setDoctorQueue([...doctorQueue, number]);
    };

    const handleRedirectToTreatment = (number) => {
        setReceptionQueue(receptionQueue.filter((num) => num !== number));
        setTreatmentQueue([...treatmentQueue, number]);
    };

    const handleRedirectToTriage = (number) => {
        setReceptionQueue(receptionQueue.filter((num) => num !== number));
        setTriageQueue([...triageQueue, number]);
    };

    const handleRedirectToECG = (number) => {
        setReceptionQueue(receptionQueue.filter((num) => num !== number));
        setECGQueue([...ECGQueue, number]);
    };

    const handleDeleteNumber = () => {
        setReceptionQueue(receptionQueue.slice(1));
    };

    const handleMoveToHead = () => {
        const selectedQueue = getSelectedQueue();
        const updatedQueue = [parseInt(selectedNumber, 10), ...selectedQueue.filter((num) => num !== parseInt(selectedNumber, 10))];
        updateSelectedQueue(updatedQueue);
    };


    // פעולות רופא
    const handleRedirectToReception_doctor = (number) => {
        setDoctorQueue(doctorQueue.filter((num) => num !== number));
        setReceptionQueue([...receptionQueue, number]);
    };

    const handleRedirectToTreatment_doctor = (number) => {
        setDoctorQueue(doctorQueue.filter((num) => num !== number));
        setTreatmentQueue([...treatmentQueue, number]);
    };

    const handleRedirectToTriage_doctor = (number) => {
        setDoctorQueue(doctorQueue.filter((num) => num !== number));
        setTriageQueue([...triageQueue, number]);
    };

    const handleRedirectToECG_doctor = (number) => {
        setDoctorQueue(doctorQueue.filter((num) => num !== number));
        setECGQueue([...ECGQueue, number]);
    };

    // const handleDeleteNumber = () => {
    //     setReceptionQueue(receptionQueue.slice(1));
    // };

    // const handleMoveToHead = () => {
    //     const selectedQueue = getSelectedQueue();
    //     const updatedQueue = [parseInt(selectedNumber, 10), ...selectedQueue.filter((num) => num !== parseInt(selectedNumber, 10))];
    //     updateSelectedQueue(updatedQueue);
    // };


    // פעולות טיפולים






    const getSelectedQueue = () => {
        switch (selectedRoom) {
            case 'doctor':
                return doctorQueue;
            case 'treatment':
                return treatmentQueue;
            case 'triage':
                return triageQueue;
            case 'ECG':
                return ECGQueue;
            default:
                return receptionQueue;
        }
    };

    const updateSelectedQueue = (updatedQueue) => {
        switch (selectedRoom) {
            case 'doctor':
                setDoctorQueue(updatedQueue);
                break;
            case 'treatment':
                setTreatmentQueue(updatedQueue);
                break;
            case 'triage':
                setTriageQueue(updatedQueue);
                break;
            case 'ECG':
                setECGQueue(updatedQueue);
                break;
            default:
                setReceptionQueue(updatedQueue);
                break;
        }
    };

    const renderNextCustomer = (queue) => {
        if (queue.length > 1) {
            return (
                <>
                    <div>מטופל הבא</div>
                    <div className='nextNum'>{queue[1]}</div>
                </>
            );
        }
        return null;
    };

    return (
        <div>
            <div className='cont'>
                <PatientEnter handleEnterReception={handleEnterReception} />

                <CurrentQueueDisplay
                    receptionQueue={receptionQueue}
                    doctorQueue={doctorQueue}
                    triageQueue={triageQueue}
                    treatmentQueue={treatmentQueue}
                    ECGQueue={ECGQueue}
                />
            </div>

            <div className='patientsScreen'>
                <div className='messages'>
                    <div>
                        <img className='logo' alt='logo' style={{ height: '70px', margin: '20px' }} src={logo}></img>

                    </div>
                    <div>מוניטור ראשי</div>
                </div>
                <div className='rooms'>
                    <RoomMonitor title='קבלה' currentQueue={receptionQueue} renderNextCustomer={renderNextCustomer} />
                    <RoomMonitor title='חדר טיפולים' currentQueue={treatmentQueue} renderNextCustomer={renderNextCustomer} />
                    <RoomMonitor title='חדר רופא' currentQueue={doctorQueue} renderNextCustomer={renderNextCustomer} />
                    <RoomMonitor title='חדר טריאג' currentQueue={triageQueue} renderNextCustomer={renderNextCustomer} />
                    <RoomMonitor title='חדר אקג' currentQueue={ECGQueue} renderNextCustomer={renderNextCustomer} />
                </div>
            </div>

            <hr />

            <div className='receptionScreen'>

                <ReceptionActions
                    receptionQueue={receptionQueue}
                    handleRedirectToDoctor={handleRedirectToDoctor}
                    handleRedirectToTreatment={handleRedirectToTreatment}
                    handleRedirectToTriage={handleRedirectToTriage}
                    handleRedirectToECG={handleRedirectToECG}
                    handleDeleteNumber={handleDeleteNumber}
                    selectedNumber={selectedNumber}
                    setSelectedNumber={setSelectedNumber}
                    selectedRoom={selectedRoom}
                    setSelectedRoom={setSelectedRoom}
                    handleMoveToHead={handleMoveToHead}
                />
                <div className='rooms'>
                    <RoomMonitor title='קבלה' currentQueue={receptionQueue} renderNextCustomer={renderNextCustomer} />
                    <RoomMonitor title='חדר טיפולים' currentQueue={treatmentQueue} renderNextCustomer={renderNextCustomer} />
                    <RoomMonitor title='חדר רופא' currentQueue={doctorQueue} renderNextCustomer={renderNextCustomer} />
                    <RoomMonitor title='חדר טריאג' currentQueue={triageQueue} renderNextCustomer={renderNextCustomer} />
                    <RoomMonitor title='חדר אקג' currentQueue={ECGQueue} renderNextCustomer={renderNextCustomer} />
                </div>

            </div>
            <hr />
            <div className='doctorScreen'>
                <DoctorActions
                    doctorQueue={doctorQueue}
                    handleRedirectToReception={handleRedirectToReception_doctor}
                    handleRedirectToTreatment={handleRedirectToTreatment_doctor}
                    handleRedirectToTriage={handleRedirectToTriage_doctor}
                    handleRedirectToECG={handleRedirectToECG_doctor}

                />
                <div className='rooms'>
                    <RoomMonitor title='קבלה' currentQueue={receptionQueue} renderNextCustomer={renderNextCustomer} />
                    <RoomMonitor title='חדר טיפולים' currentQueue={treatmentQueue} renderNextCustomer={renderNextCustomer} />
                    <RoomMonitor title='חדר רופא' currentQueue={doctorQueue} renderNextCustomer={renderNextCustomer} />
                    <RoomMonitor title='חדר טריאג' currentQueue={triageQueue} renderNextCustomer={renderNextCustomer} />
                    <RoomMonitor title='חדר אקג' currentQueue={ECGQueue} renderNextCustomer={renderNextCustomer} />
                </div>
            </div>

        </div >
    );
};

export default QueueSystem;
