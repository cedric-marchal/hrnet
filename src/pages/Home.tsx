import { FormEvent, useEffect, useState } from "react";
import { Modal } from "../plugins/Modal";

import { useEmployeeStore } from "../store/useEmployeeStore";

export const Home = () => {
  const { employees, addNewEmployee } = useEmployeeStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const requiredFields = [
      "firstName",
      "lastName",
      "dateOfBirth",
      "startDate",
      "department",
    ];

    if (!requiredFields.every((field) => formData.get(field))) {
      setModalMessage("A required field is missing or invalid.");
      return setIsModalOpen(true);
    }

    const employee = {
      id: employees.length + 1,
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      dateOfBirth: formData.get("dateOfBirth") as string,
      startDate: formData.get("startDate") as string,
      department: formData.get("department") as string,
    };

    addNewEmployee(employee);

    setModalMessage("Successfully created new employee");
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (!isModalOpen) {
      setModalMessage("");
    }
  }, [isModalOpen]);

  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen gap-14">
      <div className="flex flex-col gap-8 p-8 shadow-md">
        <div>
          <h1 className="text-xl">Create Employee</h1>
        </div>
        <form action="post" onSubmit={onSubmit} className="flex flex-col gap-8">
          <div className="flex gap-8">
            <div className="flex flex-col gap-2">
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                placeholder="First Name"
                className="p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="dateOfBirth" className="text-gray-700">
              Date Of Birth
            </label>
            <input
              type="date"
              name="dateOfBirth"
              id="dateOfBirth"
              className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="startDate" className="text-gray-700">
              Start Date
            </label>
            <input
              type="date"
              name="startDate"
              id="startDate"
              className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex flex-col">
            <select
              name="department"
              className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="sales">Sales</option>
              <option value="marketing">Marketing</option>
              <option value="engineeringr">Engineering</option>
              <option value="human-resources">Human Resourcest</option>
              <option value="legal">Legal</option>
            </select>
          </div>

          <button
            type="submit"
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>

      <div>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <div>{modalMessage}</div>
        </Modal>
      </div>
    </main>
  );
};

// l'utilisateur a é
