import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";



export const AccountContext = createContext();


export const AccountProvider = ({children}) => {
    const navigate = useNavigate();
    const { authToken } = useContext(UserContext);

    const [balance, setBalance] = useState(0)
    const [transactions, setTransactions] = useState([]);
    const [onChange, setOnChange] = useState(true);

    // =============Dashboard==============
    useEffect(() => {
        fetch('http://127.0.0.1:5000/balance', {
            method: "GET",
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${authToken}`,
            },
        })
        .then((response) => response.json())
        .then((response) => {
            setBalance(response.balance);
        });
    }, []);



    // =========Transaction History======
    useEffect(() => {
        fetch('http://127.0.0.1:5000/transaction_history', {
            method: "GET",
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${authToken}`,
            },
        })
        .then((response) => response.json())
        .then((response) => {
            setTransactions(response.transactions);
        });
    }, []);








    const data = {
        balance,
        transactions
    };


    return (
        <AccountContext.Provider value={data}>
             {children}
        </AccountContext.Provider>
    );
};