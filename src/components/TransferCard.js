import React, { useState } from 'react';
import { useJobcoin } from '../context/JobcoinContext';

const TransferCard = () => {
    const { jobcoinContainer, sendJobcoin } = useJobcoin();
    const [transactionData, setTransactionData] = useState({
        id: '',
        newAddress: '',
    });
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setTransactionData({ ...transactionData, [name]: value });
    };
    const sendBtnClickHandler = (e) => {
        if (!transactionData.id || !transactionData.id.trim()) {
            window.alert('Jobcoin address is required');
            return;
        }
        if (!transactionData.newAddress || !transactionData.newAddress.trim()) {
            window.alert('Jobcoin new address is required');
            return;
        }
        sendJobcoin(transactionData);
        setTransactionData({ id: '', newAddress: '' });
    };
    return (
        <div className='transfer-card'>
            <div className='form-group'>
                <label>Select Jobcoin</label>
                <select
                    className='form-control'
                    onChange={(e) => handleChange(e)}
                    name='id'
                    value={transactionData.id}
                >
                    <option value='' disabled>
                        ---select Jobcoin---
                    </option>
                    {jobcoinContainer.allCoins?.map((item) => (
                        <option key={item.id} value={item.id}>
                            {item.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className='form-group'>
                <label>
                    Enter new address{' '}
                    <small>
                        <small>(any random Address)</small>
                    </small>
                </label>
                <input
                    name='newAddress'
                    type='text'
                    className='form-control'
                    placeholder='Enter Address'
                    value={transactionData.newAddress}
                    onChange={(e) => handleChange(e)}
                />
            </div>

            <button className='btn-send' onClick={sendBtnClickHandler}>
                Send
            </button>
        </div>
    );
};

export default TransferCard;
