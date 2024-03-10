import { useState } from "react";
import { DatePicker } from "../plugins/DatePicker";
import { Modal } from "../plugins/Modal";
import { SelectMenu } from "../plugins/SelectMenu";

export const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const options = [
    { label: "Sales", value: "sales" },
    { label: "Marketing", value: "marketing" },
    { label: "Engineering", value: "engineering" },
    { label: "Human Resources", value: "human-resources" },
    { label: "Legal", value: "legal" },
  ];

  return (
    <main className="flex flex-col items-center justify-center w-full h-screen gap-14">
      <div>
        <DatePicker name="date" label="Date" />
      </div>

      <div>
        <SelectMenu options={options} />
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
