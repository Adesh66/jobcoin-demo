import React from 'react';

const BalanceCard = ({balance}) => {
    return (
        <div className='balance-card'>
            <div className='balance-title'>Balance: </div>
            <div className='balance-number'>$ {balance ?? 0}</div>
        </div>
    );
};

export default BalanceCard;
