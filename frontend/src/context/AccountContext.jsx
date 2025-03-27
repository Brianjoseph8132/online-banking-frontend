import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";
import { toast } from "react-toastify";



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
    }, [onChange]);



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

    // =========Transaction=========

    const addTransactions = (amount, action) => {
        toast.loading("Transacting...");
        fetch("http://127.0.0.1:5000/transaction",{
            method: "POST",
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${authToken}`,
            },
            body: JSON.stringify({
                amount, action
            }),
        })
        .then((resp) => resp.json())
        .then((response) =>{
            console.log(response);

            if (response.message) {
                toast.dismiss();
                toast.message(response.message);
                setOnChange(!onchange)
            } else if (response.error){
                toast.dismiss();
                toast.error(response.error)
            }else {
                toast.dismiss();
                toast.error("Failed to add")
            }
        })

    }

    // ===========Create Account=====
    const createAccount = (initial_deposit) => {
        toast.loading("Creating Account...");
        fetch("http://127.0.0.1:5000/create_account",{
            method: "POST",
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${authToken}`,
            },
            body: JSON.stringify({
                initial_deposit
            }),
        })
        .then((resp) => resp.json())
        .then((response) =>{
            console.log(response);

            if (response.message) {
                toast.dismiss();
                toast.message(response.message);
                setOnChange(!onchange)
            } else if (response.error){
                toast.dismiss();
                toast.error(response.error)
            }else {
                toast.dismiss();
                toast.error("Failed to create")
            }
        })

    }








    const data = {
        balance,
        transactions,

        addTransactions,

        createAccount
    };


    return (
        <AccountContext.Provider value={data}>
             {children}
        </AccountContext.Provider>
    );
};