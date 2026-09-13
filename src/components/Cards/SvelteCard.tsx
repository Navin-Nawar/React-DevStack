import { SiSvelte } from "react-icons/si";
import Card from "./Card";

type Props = {
  isAdded: boolean;
  onAdd: () => void;
};

const SvelteCard = ({ isAdded, onAdd }: Props) => {
  return (
    <Card
      name="Svelte"
      description="Cybernetically enhanced web apps with compile-time reactivity and zero virtual DOM overhead."
      category="Frontend"
      level="Intermediate"
      rating="4.8"
      badge="Fast"
      badgeColor="bg-orange-50 text-orange-500"
      icon={<SiSvelte className="text-orange-500" />}
      isAdded={isAdded}
      onAdd={onAdd}
    />
  );
};

export default SvelteCard;