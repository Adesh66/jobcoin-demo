import React, { useEffect } from 'react';
import BalanceCard from '../components/BalanceCard';
import TransactionHistory from '../components/TransactionHistory';
import TransferCard from '../components/TransferCard';
import { useJobcoin } from '../context/JobcoinContext';

const Transaction = () => {
    const { jobcoinContainer, createNewLisOfCoins } = useJobcoin();
    useEffect(() => {
        createNewLisOfCoins();
    }, []);

    return (
        <div className='transaction-container'>
            <BalanceCard balance={jobcoinContainer.balance} />
            <TransferCard />
            {jobcoinContainer.sentCoins?.length > 0 && (
                <TransactionHistory
                    coinsHistroy={jobcoinContainer.sentCoins || []}
                />
            )}
        </div>
    );
};

export default Transaction;
