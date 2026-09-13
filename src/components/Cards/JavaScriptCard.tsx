import { SiJavascript } from "react-icons/si";
import Card from "./Card";

type Props = {
  isAdded: boolean;
  onAdd: () => void;
};

const JavaScriptCard = ({ isAdded, onAdd }: Props) => {
  return (
    <Card
      name="JavaScript"
      description="The versatile, ubiquitous scripting language powering dynamic behavior across the web."
      category="Language"
      level="Beginner-Friendly"
      rating="4.9"
      badge="Ubiquitous"
      badgeColor="bg-yellow-50 text-yellow-600"
      icon={<SiJavascript className="text-yellow-400" />}
      isAdded={isAdded}
      onAdd={onAdd}
    />
  );
};

export default JavaScriptCard;