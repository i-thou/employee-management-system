'use client'
import React, { useState, useEffect } from "react";

interface Employee {
  id: number;
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

const EmployeeList: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editedEmployee, setEditedEmployee] = useState<Employee>({
    id: 0,
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

  useEffect(() => {
    const savedEmployees = localStorage.getItem("employees");
    if (savedEmployees) {
      try {
        const parsedEmployees = JSON.parse(savedEmployees);
        setEmployees(parsedEmployees);
      } catch (e) {
        console.error("Invalid data in localStorage");
        localStorage.removeItem("employees");
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  const handleDelete = (id: number) => {
    setEmployees((prev) => prev.filter((emp) => emp.id !== id));
  };

  const handleEdit = (id: number) => {
    const employee = employees.find((emp) => emp.id === id);
    if (employee) {
      setEditingId(id);
      setEditedEmployee({ ...employee });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEditedEmployee((prev) => ({
      ...prev,
      [name]: name === "phone" || name === "emergencyContact" ? Number(value) : value,
    }));
  };

  const handleSave = (id: number) => {
    setEmployees((prev) =>
      prev.map((emp) => (emp.id === id ? { ...editedEmployee } : emp))
    );
    setEditingId(null);
  };

  const filteredEmployees = employees.filter(
    (emp) =>
      (emp.username?.toLowerCase().includes(search.toLowerCase()) ?? false) ||
      emp.id.toString().includes(search)
  );

  return (
  <div className="p-4 shadow-xl shadow-gray-300 mt-32">
    <h2 className="text-2xl font-bold mb-4">Employee List</h2>

    <input
      type="text"
      placeholder="Search by username or ID"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="mb-4 px-3 py-2 border border-gray-300 rounded w-full sm:w-1/2"
    />

    <div className="overflow-x-auto">
      <table className="min-w-full text-sm border border-gray-300">
        <thead className="bg-lightPurple text-left">
          <tr>
            {[
              "ID", "Username", "First Name", "Last Name", "Email", "Phone",
              "Department", "Role", "Supervisor", "Contract Type", "Hire Date",
              "Emergency Contact", "Actions"
            ].map((heading, idx) => (
              <th key={idx} className="p-2 border-b border-gray-300 whitespace-nowrap">
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.length > 0 ? (
            filteredEmployees.map((emp) => (
              <tr key={emp.id} className="hover:bg-gray-50">
                {editingId === emp.id ? (
                  <>
                    <td className="p-2 border-b">{emp.id}</td>
                    <td className="p-2 border-b">
                      <input
                        name="username"
                        value={editedEmployee.username}
                        onChange={handleChange}
                        className="border px-2 py-1 rounded w-full"
                      />
                    </td>
                    <td className="p-2 border-b">
                      <input
                        name="firstName"
                        value={editedEmployee.firstName}
                        onChange={handleChange}
                        className="border px-2 py-1 rounded w-full"
                      />
                    </td>
                    <td className="p-2 border-b">
                      <input
                        name="lastName"
                        value={editedEmployee.lastName}
                        onChange={handleChange}
                        className="border px-2 py-1 rounded w-full"
                      />
                    </td>
                    <td className="p-2 border-b">
                      <input
                        name="email"
                        type="email"
                        value={editedEmployee.email}
                        onChange={handleChange}
                        className="border px-2 py-1 rounded w-full"
                      />
                    </td>
                    <td className="p-2 border-b">
                      <input
                        name="phone"
                        type="number"
                        value={editedEmployee.phone}
                        onChange={handleChange}
                        className="border px-2 py-1 rounded w-full"
                      />
                    </td>
                    <td className="p-2 border-b">
                      <select
                        name="department"
                        value={editedEmployee.department}
                        onChange={handleChange}
                        className="border px-2 py-1 rounded w-full"
                      >
                        <option value="HR">HR</option>
                        <option value="IT">IT</option>
                        <option value="Finance">Finance</option>
                        <option value="Marketing">Marketing</option>
                      </select>
                    </td>
                    <td className="p-2 border-b">
                      <input
                        name="role"
                        value={editedEmployee.role}
                        onChange={handleChange}
                        className="border px-2 py-1 rounded w-full"
                      />
                    </td>
                    <td className="p-2 border-b">
                      <input
                        name="supervisor"
                        value={editedEmployee.supervisor}
                        onChange={handleChange}
                        className="border px-2 py-1 rounded w-full"
                      />
                    </td>
                    <td className="p-2 border-b">
                      <select
                        name="contractType"
                        value={editedEmployee.contractType}
                        onChange={handleChange}
                        className="border px-2 py-1 rounded w-full"
                      >
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Contract">Contract</option>
                      </select>
                    </td>
                    <td className="p-2 border-b">
                      <input
                        name="hireDate"
                        type="date"
                        value={editedEmployee.hireDate}
                        onChange={handleChange}
                        className="border px-2 py-1 rounded w-full"
                      />
                    </td>
                    <td className="p-2 border-b">
                      <input
                        name="emergencyContact"
                        type="number"
                        value={editedEmployee.emergencyContact}
                        onChange={handleChange}
                        className="border px-2 py-1 rounded w-full"
                      />
                    </td>
                    <td className="p-2 border-b space-x-2">
                      <button
                        onClick={() => handleSave(emp.id)}
                        className="bg-green-600 text-white px-3 py-1 rounded"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditingId(null)}
                        className="bg-gray-400 text-white px-3 py-1 rounded"
                      >
                        Cancel
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="p-2 border-b">{emp.id}</td>
                    <td className="p-2 border-b">{emp.username}</td>
                    <td className="p-2 border-b">{emp.firstName}</td>
                    <td className="p-2 border-b">{emp.lastName}</td>
                    <td className="p-2 border-b">{emp.email}</td>
                    <td className="p-2 border-b">{emp.phone}</td>
                    <td className="p-2 border-b">{emp.department}</td>
                    <td className="p-2 border-b">{emp.role}</td>
                    <td className="p-2 border-b">{emp.supervisor}</td>
                    <td className="p-2 border-b">{emp.contractType}</td>
                    <td className="p-2 border-b">{emp.hireDate}</td>
                    <td className="p-2 border-b">{emp.emergencyContact}</td>
                    <td className="p-2 border-b space-x-2">
                      <button
                        onClick={() => handleEdit(emp.id)}
                        className="bg-blue-600 text-white px-3 py-1 rounded"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(emp.id)}
                        className="bg-red-600 text-white px-3 py-1 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={13} className="text-center py-4">
                No employees found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>
);

};

export default EmployeeList;
