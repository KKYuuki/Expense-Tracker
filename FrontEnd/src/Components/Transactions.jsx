import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Compo.css';

const Transactions = () => {
  const [employee, setEmployee] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/employee")
      .then((result) => {
        if (result.data.Status) {
          setEmployee(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this employee?");

    if (confirmDelete) {
      axios.delete(`http://localhost:3000/auth/delete_employee/${id}`)
        .then(result => {
          if (result.data.Status) {
            alert("Employee deleted successfully!");
            window.location.reload();
          } else {
            alert(result.data.Error);
          }
        })
        .catch(error => {
          console.error("Error deleting employee:", error);
          alert("An error occurred while deleting the employee.");
        });
    }
  };

  return (
    <div className="mainTrans">
      <div className="leftCont">
        <div className="title">
          <span>Transactions</span>
        </div>

        <div className="wholeTable">
          <div className="mt-3">
            <table className="table rounded-3">
              <thead>
                <tr>
                  <th>NAME</th>
                  <th>AMOUNT</th>
                  <th>CATEGORY</th>
                  <th>DATE</th>


                </tr>
              </thead>
              <tbody>
                {employee.map((e) => (
                  <tr>
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                    <td>{e.address}</td>
                    <td>{e.salary}</td>
                    <td>
                      <Link
                        to={`/dashboard/edit_employee/` + e.id}
                        className="btn btn-info btn-sm me-2"
                      >
                        Edit
                      </Link>
                      <button
                        className="btn btn-warning btn-sm"
                        onClick={() => handleDelete(e.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>


      </div>
      <div className="rightCont">
        <div className="rightboxes contnrFunds">
          <span>Funds</span>
          <div className="fundsBox">
            <div className="fundsData">
              <span>₱80.50</span>
            </div>
          </div>
          <div className="addFunds">
            <span>Add Funds</span>
          </div>

          <div className="amountCntnr">
            <div className="titleAmount">
              <span>Amount</span>
            </div>
            <div className="inputAmnt">
              <label htmlFor="p_1000s" className="form-label"></label>
              <input
                type="number"
                id="p_1000s"
                name="p_1000s"
                className="form-control"
                onChange={(e) => setRemittance({ ...remittance, p_1000s: e.target.value })}
                required
              />
            </div>

          </div>

          <div className="secconfirmButton">
            <button type="button" className="employeeButton" >
              Confirm
            </button>
          </div>




        </div>

        <div className="rightboxes contnrAddTran">


          <div className="addFunds">
            <span>Add Funds</span>
          </div>
          <div className="addFndsInput">
            <div className="nameInpt">
              <label htmlFor="p_1000s" className="namelabel">Name</label>
              <input
                type="text"
                id="p_1000s"
                name="p_1000s"
                className="inptBoxLwrRight"
                onChange={(e) => setRemittance({ ...remittance, p_1000s: e.target.value })}
                required
              />
            </div>

            <div className="amountInpt">
              <label htmlFor="p_500s" className="namelabel">Amount</label>
              <input
                type="text"
                id="p_500s"
                name="p_500s"
                className="inptBoxLwrRight"
                onChange={(e) => setRemittance({ ...remittance, p_500s: e.target.value })}
                required
              />
            </div>
            <div className="categInpt">
              <label htmlFor="p_200s" className="namelabel">Category</label>
              <input
                type="text"
                id="p_200s"
                name="p_200s"
                className="inptBoxLwrRight"
                onChange={(e) => setRemittance({ ...remittance, p_200s: e.target.value })}
                required
              />
            </div>
          </div>
          <div className="confirmButton">
            <button type="button" className="employeeButton" >
              Confirm
            </button>
          </div>
        </div>








      </div>



    </div>




  );
};

export default Transactions;