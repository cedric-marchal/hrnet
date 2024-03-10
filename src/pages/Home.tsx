import { FormEvent, useState } from "react";
import { DatePicker } from "../plugins/DatePicker";
import { Modal } from "../plugins/Modal";
import { SelectMenu } from "../plugins/SelectMenu";
import { useBearStore } from "../store/useBearStore";

export const Home = () => {
  const { bears, increasePopulation } = useBearStore();

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
    console.log(formData);
  };

  return (
    <main className="flex flex-col items-center justify-center w-full h-screen gap-14">
      <div>
        <p>Il y a {bears} ours.</p>
        <button onClick={increasePopulation}>Incrémenter</button>
      </div>
      <div>
        <form action="post" onSubmit={onSubmit} className="flex flex-col gap-8">
          <DatePicker name="date" label="Date" />
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
