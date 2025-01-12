import { decodeEntity } from "html-entities";
import EmojiButton from "./EmojiButton";

export default function MemoryCard({
  handleClick,
  data,
  selectedCards,
  matchedCards,
}) {
  const cardEl = data.map((emoji, index) => {
    const selectedCardEntry = selectedCards.find(
      (card) => card.index === index
    );
    const matchedCardEntry = matchedCards.find((card) => card.index);

    return (
      <li key={index} className="card-item">
        <EmojiButton
          content={decodeEntity(emoji.htmlCode[0])}
          style={"btn btn--emoji"}
          handleClick={() => handleClick(emoji.name, index)}
          selectedCardEntry={selectedCardEntry}
          matchedCardEntry={matchedCardEntry}
        />
      </li>
    );
  });

  return <ul className="card-container">{cardEl}</ul>;
}
