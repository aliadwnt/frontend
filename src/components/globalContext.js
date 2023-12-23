import React, { useContext, useState } from "react"
import axios from 'axios'


const BASE_URL = "http://localhost:3000/income";


const GlobalContext = createContext()

export const GlobalProvider = ({children}) => {

    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState(null)

    //calculate incomes
    const addIncome = async (income) => {
        const response = await axios.post(`${BASE_URL}add-income`, income)
            .catch((err) =>{
                setError(err.response.data.message)
            })
        getIncomes()
    }

    const getIncomes = async () => {
        const response = await axios.get(`${BASE_URL}get-incomes`)
        setIncomes(response.data)
        console.log(response.data)
    }

    const deleteIncome = async (id) => {
        const res  = await axios.delete(`${BASE_URL}delete-income/${id}`)
        getIncomes()
    }

    const totalIncome = () => {
        let totalIncome = 0;
        incomes.forEach((income) =>{
            totalIncome = totalIncome + income.amount
        })

        return totalIncome;
    }


    //calculate incomes
    const addExpense = async (income) => {
        const response = await axios.post(`${BASE_URL}add-expense`, income)
            .catch((err) =>{
                setError(err.response.data.message)
            })
        getExpenses()
    }

    const getExpenses = async () => {
        const response = await axios.get(`${BASE_URL}get-expenses`)
        setExpenses(response.data)
        console.log(response.data)
    }

    const deleteExpense = async (id) => {
        const res  = await axios.delete(`${BASE_URL}delete-expense/${id}`)
        getExpenses()
    }

    const totalExpenses = () => {
        let totalIncome = 0;
        expenses.forEach((income) =>{
            totalIncome = totalIncome + income.amount
        })

        return totalIncome;
    }


    const totalBalance = () => {
        return totalIncome() - totalExpenses()
    }

    const transactionHistory = () => {
        const history = [...incomes, ...expenses]
        history.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })

        return history.slice(0, 3)
    }


    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            incomes,
            deleteIncome,
            expenses,
            totalIncome,
            addExpense,
            getExpenses,
            deleteExpense,
            totalExpenses,
            totalBalance,
            transactionHistory,
            error,
            setError
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}
// import React, { createContext, useContext, useState } from "react";
// import axios from "axios";

// const BASE_URL = "http://localhost:3000/income";

// const GlobalContext = createContext();

// export const GlobalProvider = ({ children }) => {
//   const [incomes, setIncomes] = useState([]);
//   const [expenses, setExpenses] = useState([]);
//   const [error, setError] = useState(null);

//   //calculate incomes
//   const addIncome = async (income) => {
//     try {
//       const response = await axios.post(`${BASE_URL}/add-income`, income);
//       getIncomes();
//     } catch (err) {
//       setError(err.response.data.message);
//     }
//   };

//   const getIncomes = async () => {
//     try {
//       const response = await axios.get(`${BASE_URL}/get-incomes`);
//       setIncomes(response.data);
//       console.log(response.data);
//     } catch (err) {
//       setError(err.response.data.message);
//     }
//   };

//   const deleteIncome = async (id) => {
//     try {
//       await axios.delete(`${BASE_URL}/delete-income/${id}`);
//       getIncomes();
//     } catch (err) {
//       setError(err.response.data.message);
//     }
//   };

//   const totalIncome = () => {
//     let totalIncome = 0;
//     incomes.forEach((income) => {
//       totalIncome = totalIncome + income.amount;
//     });

//     return totalIncome;
//   };

//   //calculate expenses
//   const addExpense = async (expense) => {
//     try {
//       const response = await axios.post(`${BASE_URL}/add-expense`, expense);
//       getExpenses();
//     } catch (err) {
//       setError(err.response.data.message);
//     }
//   };

//   const getExpenses = async () => {
//     try {
//       const response = await axios.get(`${BASE_URL}/get-expenses`);
//       setExpenses(response.data);
//       console.log(response.data);
//     } catch (err) {
//       setError(err.response.data.message);
//     }
//   };

//   const deleteExpense = async (id) => {
//     try {
//       await axios.delete(`${BASE_URL}/delete-expense/${id}`);
//       getExpenses();
//     } catch (err) {
//       setError(err.response.data.message);
//     }
//   };

//   const totalExpenses = () => {
//     let totalExpense = 0;
//     expenses.forEach((expense) => {
//       totalExpense = totalExpense + expense.amount;
//     });

//     return totalExpense;
//   };

//   const totalBalance = () => {
//     return totalIncome() - totalExpenses();
//   };

//   const transactionHistory = () => {
//     const history = [...incomes, ...expenses];
//     history.sort((a, b) => {
//       return new Date(b.createdAt) - new Date(a.createdAt);
//     });

//     return history.slice(0, 3);
//   };

//   return (
//     <GlobalContext.Provider
//       value={{
//         addIncome,
//         getIncomes,
//         incomes,
//         deleteIncome,
//         expenses,
//         totalIncome,
//         addExpense,
//         getExpenses,
//         deleteExpense,
//         totalExpenses,
//         totalBalance,
//         transactionHistory,
//         error,
//         setError,
//       }}
//     >
//       {children}
//     </GlobalContext.Provider>
//   );
// };

// export const useGlobalContext = () => {
//   return useContext(GlobalContext);
// };
