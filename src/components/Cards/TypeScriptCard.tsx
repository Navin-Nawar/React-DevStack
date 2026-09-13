import { SiTypescript } from "react-icons/si";
import Card from "./Card";

type Props = {
  isAdded: boolean;
  onAdd: () => void;
};

const TypeScriptCard = ({ isAdded, onAdd }: Props) => {
  return (
    <Card
      name="TypeScript"
      description="A strongly typed programming language that builds on JavaScript for robust tooling."
      category="Language"
      level="Intermediate"
      rating="4.9"
      badge="Essential"
      badgeColor="bg-sky-50 text-sky-500"
      icon={<SiTypescript className="text-blue-500" />}
      isAdded={isAdded}
      onAdd={onAdd}
    />
  );
};

export default TypeScriptCard;