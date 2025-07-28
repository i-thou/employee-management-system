'use client'
import React, { ChangeEvent, FormEvent, useState } from 'react'


// Definition of employee type
type Employee = {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: number;
    department: string;
    role: string;
    supervisor: string;
    contractType: string;
    hireDate: string;
    emergencyContact: number;
}


const CreateEmployee = () => {

    const [employee, setEmployee] = useState<Employee>({
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: 0,
        department: "",
        role: "",
        supervisor: "",
        contractType: "",
        hireDate: "",
        emergencyContact: 0,
    });

    // Handle input change
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setEmployee((prev) => ({...prev, [name]: value}))
    }


    // Handle submit
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const existingEmployee: Employee[] = JSON.parse(localStorage.getItem("list_of_employees") || "[]");
        const updatedEmployees = [...existingEmployee, employee];

        // saving the updated list to localstorage
        localStorage.setItem("list_of_employees", JSON.stringify(updatedEmployees));

        // Giving alert
        alert(`
                Employee Added!
                Name: ${employee.username}
            `)
    }
  return (
      <div>
          <h1>Create a new employee</h1>
          <form onSubmit={handleSubmit}>
              <div>
                  <label htmlFor="">Username: </label>
                  <input type="text" placeholder='Enter username' name="username" value={employee.username} onChange={handleChange}/>
              </div>
              <div>
                  <label htmlFor="">First Name: </label>
                  <input type="text" placeholder='Enter first name' name="firstName" value={employee.firstName} onChange={handleChange}/>
              </div>
              <div>
                  <label htmlFor="">Last name: </label>
                  <input type="text" placeholder='Enter last name' name="lastName" value={employee.lastName} onChange={handleChange}/>
              </div>
              <div>
                  <label htmlFor="">Email: </label>
                  <input type="email" placeholder='Enter email' name="email" value={employee.email} onChange={handleChange}/>
              </div>
              <div>
                  <label htmlFor="">Phone </label>
                  <input type="number" placeholder='Enter phone' name="phone" value={employee.phone} onChange={handleChange}/>
              </div>
              <div>
                  <p>Department</p>
                  <select name="department" value={employee.department} onChange={handleChange}>
                      <option value="ux">UX Engineers</option>
                      <option value="engineers">Engineers</option>
                      <option value="developers">Developers</option>
                      <option value="researchers">Researchers</option>
                  </select>
              </div>
              <div>
                  <p>Role</p>
                  <select name="role" value={employee.role} onChange={handleChange}>
                      <option value="">UX Engineers</option>
                  </select>
              </div>
              <div>
                  <p>Contract Type</p>
                  <select name="contractType" value={employee.contractType} onChange={handleChange}>
                      <option value="pernament">Pernament</option>
                      <option value="temporal">Temporal</option>
                      <option value="middle">Middle</option>
                  </select>
              </div>
              <div>
                  <label htmlFor="">Hire date: </label>
                  <input type="number" placeholder='Enter hire date' name="hireDate" value={employee.hireDate} onChange={handleChange}/>
              </div>
              <div>
                  <label htmlFor="">Supervisor: </label>
                  <input type="text" placeholder='Enter supervisor' name="supervisor" value={employee.supervisor} onChange={handleChange}/>
              </div>
              <div>
                  <label htmlFor="">Emercency contact: </label>
                  <input type="number" placeholder='Enter emergency contact' name="emergencyContact" value={employee.emergencyContact} onChange={handleChange}/>
              </div>
              <div>
                  <button type='submit'>Submit</button>
              </div>
          </form>
    </div>
  )
}

export default CreateEmployee