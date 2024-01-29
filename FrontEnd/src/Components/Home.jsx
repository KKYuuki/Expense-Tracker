import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [adminTotal, setAdminTotal] = useState(0)
  const [employeeTotal, setemployeeTotal] = useState(0)
  const [salaryTotal, setSalaryTotal] = useState(0)
  const [admins, setAdmins] = useState([])
  const [totalRemittance, setTotalRemittance] = useState([])

  useEffect(() => {
    adminCount();
    employeeCount();
    salaryCount();
    AdminRecords();
    remittanceCount();
  }, [])

  const AdminRecords = () => {
    axios.get('http://localhost:3000/auth/admin_records')
      .then(result => {
        if (result.data.Status) {
          setAdmins(result.data.Result)
        } else {
          alert(result.data.Error)
        }
      })
  }
  const adminCount = () => {
    axios.get('http://localhost:3000/auth/admin_count')
      .then(result => {
        if (result.data.Status) {
          setAdminTotal(result.data.Result[0].admin)
        }
      })
  }
  const employeeCount = () => {
    axios.get('http://localhost:3000/auth/employee_count')
      .then(result => {
        if (result.data.Status) {
          setemployeeTotal(result.data.Result[0].employee)
        }
      })
  }

  const salaryCount = () => {
    axios.get('http://localhost:3000/auth/salary_count')
      .then(result => {
        if (result.data.Status) {
          setSalaryTotal(result.data.Result[0].salaryOFEmp)
        } else {
          alert(result.data.Error)
        }
      })
  }

  const remittanceCount = () => {
    axios.get('http://localhost:3000/auth/remittance_total')
      .then(result => {
        if (result.data.Status) {
          setTotalRemittance(result.data.Result[0].totalRem)
        } else {
          alert(result.data.Error)
        }
      })
  }
  
  return (
    <div className='homeeeeee'>
      
      <div className="dashbMainBody">
       
       <div className="RecLog">
         <h3>Recent Log</h3>
       </div>
       <div className="containerRow">
         <div class="firstRow">
           <div class="expense-box food-drinks">
             <span>Food & Drinks</span>
             <span>₱45.00</span>
           </div>
         </div>
         <div class="secRow">
           <div class="expense-box utilities">
             <span>Utilities</span>
             <span>₱80.50</span>
           </div>
         </div>
         <div class="thirdRow">
           <div class="expense-box added-funds">
             <span>Added Funds</span>
             <span>₱120.25</span>
           </div>
         </div>
         <div class="frthRow">
           <div class="expense-box travel">
             <span>Travel</span>
             <span>₱200.00</span>
           </div>
         </div>
         SEE MORE..
         <div class="sxthRow">
           <div class="expense-boxx totalInc">
             <span>Total Income</span>
             <span>₱200.00</span>
           </div>
         </div>
         <div class="svnthRow">
           <div class="expense-boxx totalExp">
             <span>Total Expenses</span>
             <span>₱200.00</span>
           </div>
         </div>
       </div>
     </div>
     </div>
  )
}

export default Home