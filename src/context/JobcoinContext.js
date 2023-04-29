import React, { createContext, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
const JobcoinContext = createContext();

export const useJobcoin = () => useContext(JobcoinContext);

function JobcoinContextProvider(props) {
    const [jobcoinContainer, setJobcoinContainer] = useState({
        sentCoins: [],
        allCoins: [],
        balance: null,
    });

    const updateBalace = () => {
        const sum = jobcoinContainer.allCoins?.reduce(
            (acc, curr) => acc + curr.balance,
            0
        );
        setJobcoinContainer({ ...jobcoinContainer, balance: sum });
    };
    const sendJobcoin = (coinData) => {
        console.log(coinData);
        const getCoin = jobcoinContainer.allCoins?.find(
            (item) => item.id === coinData.id
        );
        const newAllCoinsList = jobcoinContainer.allCoins.filter(
            (item) => item.id !== coinData.id
        );
        setJobcoinContainer({
            ...jobcoinContainer,
            allCoins: newAllCoinsList,
            sentCoins: [
                ...jobcoinContainer.sentCoins,
                { ...getCoin, ...coinData },
            ],
            balance: newAllCoinsList.reduce(
                (acc, curr) => acc + curr.balance,
                0
            ),
        });
    };
    const createNewLisOfCoins = () => {
        // creating random 5 coins with Id balance
        let newCoins = [];
        for (let i = 0; i < 10; i++) {
            const obj = {
                id: uuidv4(),
                name: `Jobcoin ${i + 1}`,
                balance: Math.floor(Math.random() * 20 + 5),
            };
            newCoins.push(obj);
        }
        const freshbalance = newCoins.reduce(
            (acc, curr) => acc + curr.balance,
            0
        );
        setJobcoinContainer({
            ...jobcoinContainer,
            sentCoins:[],
            allCoins: newCoins,
            balance: freshbalance,
        });
    };
    const value = {
        jobcoinContainer,
        updateBalace,
        sendJobcoin,
        createNewLisOfCoins,
    };
    return (
        <JobcoinContext.Provider value={value}>
            {props.children}
        </JobcoinContext.Provider>
    );
}

export default JobcoinContextProvider;
