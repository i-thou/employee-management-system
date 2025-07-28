'use client';
import React, { ChangeEvent, FormEvent, useState } from 'react';

// Employee type
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
};

const CreateEmployee = () => {
  const [employee, setEmployee] = useState<Employee>({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: 0,
    department: '',
    role: '',
    supervisor: '',
    contractType: '',
    hireDate: '',
    emergencyContact: 0,
  });

  // Handle input
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEmployee((prev) => ({ ...prev, [name]: value }));
  };

  // Submit handler
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const existingEmployee: Employee[] = JSON.parse(localStorage.getItem('employees') || '[]');
    const updatedEmployees = [...existingEmployee, employee];
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
    alert(`Employee Added!\nName: ${employee.username}`);
  };

  return (
    <div className=" max-w-5xl mx-auto p-4 shadow-xl shadow-gray-300">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center bg-lightPurple p-2 text-white @3xl:p-5">Create a New Employee</h1>
      <form
        onSubmit={handleSubmit}
        className="grid gap-6 sm:grid-cols-2 @container bg-white shadow-md rounded-xl p-6"
      >
        {/* Username */}
        <div className="flex flex-col gap-1">
          <label className="text-base @sm:text-lg font-medium">Username</label>
          <input
            type="text"
            name="username"
            value={employee.username}
            onChange={handleChange}
            placeholder="Enter username"
            className="input-style"
            required
            minLength={5}
            maxLength={20}
          />
        </div>

        {/* First Name */}
        <div className="flex flex-col gap-1">
          <label className="text-base @sm:text-lg font-medium">First Name</label>
          <input
            type="text"
            name="firstName"
            value={employee.firstName}
            onChange={handleChange}
            placeholder="Enter first name"
            className="input-style"
            required
            minLength={2}
          />
        </div>

        {/* Last Name */}
        <div className="flex flex-col gap-1">
          <label className="text-base @sm:text-lg font-medium">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={employee.lastName}
            onChange={handleChange}
            placeholder="Enter last name"
            className="input-style"
            required
            minLength={2}
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label className="text-base @sm:text-lg font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={employee.email}
            onChange={handleChange}
            placeholder="Enter email"
            className="input-style"
            required
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1">
          <label className="text-base @sm:text-lg font-medium">Phone</label>
          <input
            type="number"
            name="phone"
            value={employee.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
            className="input-style"
            required
          />
        </div>

        {/* Department */}
        <div className="flex flex-col gap-1">
          <label className="text-base @sm:text-lg font-medium">Department</label>
          <select
            name="department"
            value={employee.department}
            onChange={handleChange}
            className="input-style"
            required
          >
            <option value="">Select Department</option>
            <option value="ux">UX Engineers</option>
            <option value="engineers">Engineers</option>
            <option value="developers">Developers</option>
            <option value="researchers">Researchers</option>
          </select>
        </div>

        {/* Role */}
        <div className="flex flex-col gap-1">
          <label className="text-base @sm:text-lg font-medium">Role</label>
          <select
            name="role"
            value={employee.role}
            onChange={handleChange}
            className="input-style"
          >
            <option value="">Select Role</option>
            <option value="lead">Team Lead</option>
            <option value="senior">Senior Dev</option>
            <option value="junior">Junior Dev</option>
          </select>
        </div>

        {/* Contract Type */}
        <div className="flex flex-col gap-1">
          <label className="text-base @sm:text-lg font-medium">Contract Type</label>
          <select
            name="contractType"
            value={employee.contractType}
            onChange={handleChange}
            className="input-style"
            required
          >
            <option value="">Select Contract Type</option>
            <option value="permanent">Permanent</option>
            <option value="temporal">Temporal</option>
            <option value="middle">Middle</option>
          </select>
        </div>

        {/* Hire Date */}
        <div className="flex flex-col gap-1">
          <label className="text-base @sm:text-lg font-medium">Hire Date</label>
          <input
            type="date"
            name="hireDate"
            value={employee.hireDate}
            onChange={handleChange}
            className="input-style"
            required
          />
        </div>

        {/* Supervisor */}
        <div className="flex flex-col gap-1">
          <label className="text-base @sm:text-lg font-medium">Supervisor</label>
          <input
            type="text"
            name="supervisor"
            value={employee.supervisor}
            onChange={handleChange}
            placeholder="Enter supervisor name"
            className="input-style"
            required
          />
        </div>

        {/* Emergency Contact */}
        <div className="flex flex-col gap-1">
          <label className="text-base @sm:text-lg font-medium">Emergency Contact</label>
          <input
            type="number"
            name="emergencyContact"
            value={employee.emergencyContact}
            onChange={handleChange}
            placeholder="Enter emergency contact"
            className="input-style"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="sm:col-span-2 flex justify-end mt-4">
          <button
            type="submit"
            className="bg-lightPurple text-white px-6 py-2 rounded-lg hover:bg-darkPurple transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEmployee;
