import { FormEvent, useState } from "react";
import { DatePicker } from "../plugins/DatePicker";
import { Modal } from "../plugins/Modal";
import { SelectMenu } from "../plugins/SelectMenu";

import { useEmployeeStore } from "../store/useEmployeeStore";

export const Home = () => {
  const { employees, addNewEmployee } = useEmployeeStore();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const options = [
    { label: "Sales", value: "sales" },
    { label: "Marketing", value: "marketing" },
    { label: "Engineering", value: "engineering" },
    { label: "Human Resources", value: "human-resources" },
    { label: "Legal", value: "legal" },
  ];

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const employee = {
      id: employees.length + 1,
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      dateOfBirth: formData.get("dateOfBirth") as string,
      startDate: formData.get("startDate") as string,
      department: formData.get("department") as string,
    };

    addNewEmployee(employee);
  };

  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen gap-14">
      <div>
        <h1 className="text-xl">Create Employee</h1>
      </div>

      <div>
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

          <DatePicker name="dateOfBirth" label="Date Of Birth" />
          <DatePicker name="startDate" label="Start Date" />

          <SelectMenu options={options} />

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
          <div>Ceci est le contenu de la modal</div>
        </Modal>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          Open Modal
        </button>
      </div>
    </main>
  );
};
