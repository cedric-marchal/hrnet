import { SelectMenu } from "../plugins/SelectMenu";

export const Home = () => {
  const options = [
    { label: "Sales", value: "sales" },
    { label: "Marketing", value: "marketing" },
    { label: "Engineering", value: "engineering" },
    { label: "Human Resources", value: "human-resources" },
    { label: "Legal", value: "legal" },
  ];

  return (
    <main className="flex flex-col items-center justify-center w-full h-screen">
      <h1>Home</h1>
      <SelectMenu options={options} />
    </main>
  );
};
