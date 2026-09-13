import { SiOpenjdk } from "react-icons/si";
import Card from "./Card";

type Props = {
  isAdded: boolean;
  onAdd: () => void;
};

const JavaCard = ({ isAdded, onAdd }: Props) => {
  return (
    <Card
      name="Java"
      description="A secure, object-oriented programming language designed for portability and scale."
      category="Language"
      level="Intermediate"
      rating="4.6"
      badge="Robust"
      badgeColor="bg-sky-50 text-sky-500"
      icon={<SiOpenjdk className="text-red-500" />}
      isAdded={isAdded}
      onAdd={onAdd}
    />
  );
};

export default JavaCard;