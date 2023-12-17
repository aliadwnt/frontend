// // import React, { useEffect } from 'react'
// // import styled from 'styled-components'
// // import { useGlobalContext } from '../components/globalContext';
// // import { InnerLayout } from '../components/styles/Layouts';
// // import Form from '../components/Form';
// // import IncomeItem from '../components/IncomeItem';

// // function Income() {
// //     const {addIncome,incomes, getIncomes, deleteIncome, totalIncome} = useGlobalContext()

// //     useEffect(() =>{
// //         getIncomes()
// //     }, [])
// //     return (
// //         <IncomeStyled>
// //             <InnerLayout>
// //                 <h1>Incomes</h1>
// //                 <h2 className="total-income">Total Income: <span>${totalIncome()}</span></h2>
// //                 <div className="income-content">
// //                     <div className="form-container">
// //                         <Form />
// //                     </div>
// //                     <div className="incomes">
// //                         {incomes.map((income) => {
// //                             const {_id, title, amount, date, category, description, type} = income;
// //                             return <IncomeItem
// //                                 key={_id}
// //                                 id={_id} 
// //                                 title={title} 
// //                                 description={description} 
// //                                 amount={amount} 
// //                                 date={date} 
// //                                 type={type}
// //                                 category={category} 
// //                                 indicatorColor="var(--color-green)"
// //                                 deleteItem={deleteIncome}
// //                             />
// //                         })}
// //                     </div>
// //                 </div>
// //             </InnerLayout>
// //         </IncomeStyled>
// //     )
// // }

// // const IncomeStyled = styled.div`
// //     display: flex;
// //     overflow: auto;
// //     .total-income{
// //         display: flex;
// //         justify-content: center;
// //         align-items: center;
// //         background: #FCF6F9;
// //         border: 2px solid #FFFFFF;
// //         box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
// //         border-radius: 20px;
// //         padding: 1rem;
// //         margin: 1rem 0;
// //         font-size: 2rem;
// //         gap: .5rem;
// //         span{
// //             font-size: 2.5rem;
// //             font-weight: 800;
// //             color: var(--color-green);
// //         }
// //     }
// //     .income-content{
// //         display: flex;
// //         gap: 2rem;
// //         .incomes{
// //             flex: 1;
// //         }
// //     }
// // `;

// // export default Goals
// import React, {useState, useMemo} from 'react'
// import styled from "styled-components";
// import bg from '../components/img/bg.png'
// import {MainLayout} from '../components/styles/Layouts'
// import Orb from '../components/Orb'
// import Navigation from '../components/Navigation'
// import Dashboard from './dashboarddlm';
// import Income from '../components/Income'
// import Expenses from '../components/Expenses';
// import { useGlobalContext } from '../components/globalContext';

// function App() {
//   const [active, setActive] = useState(1)

//   const global = useGlobalContext()
//   console.log(global);

//   const displayData = () => {
//     switch(active){
//       case 1:
//         return <Dashboard />
//       case 2:
//         return <Dashboard />
//       case 3:
//         return <Income />
//       case 4: 
//         return <Expenses />
//       default: 
//         return <Dashboard />
//     }
//   }

//   const orbMemo = useMemo(() => {
//     return <Orb />
//   },[])

//   return (
//     <AppStyled bg={bg} className="App">
//       {orbMemo}
//       <MainLayout>
//         <Navigation active={active} setActive={setActive} />
//         <main>
//           {displayData()}
//         </main>
//       </MainLayout>
//     </AppStyled>
//   );
// }

// const AppStyled = styled.div`
//   height: 100vh;
//   background-image: url(${props => props.bg});
//   position: relative;
//   main{
//     flex: 1;
//     background: rgba(252, 246, 249, 0.78);
//     border: 3px solid #FFFFFF;
//     backdrop-filter: blur(4.5px);
//     border-radius: 32px;
//     overflow-x: hidden;
//     &::-webkit-scrollbar{
//       width: 0;
//     }
//   }
// `;

// export default App;
// import Navbar from "../components/Navbar";