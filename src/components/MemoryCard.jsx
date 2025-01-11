import { decodeEntity } from "html-entities";

export default function MemoryCard({ handleClick, data }) {
  let emojiArray = ["🐶", "🐷", "🐙", "🐛", "🐵", "🐶", "🐷", "🐙", "🐛", "🐵"];

  const decodedData = data
    .map((d) => d.htmlCode[0])
    .map((d) => decodeEntity(d));
  console.log(decodedData);
  emojiArray = [...decodedData];

  const emojiEl = emojiArray.map((emoji, index) => (
    <li key={index} className="card-item">
      <button className="btn btn--emoji" onClick={handleClick}>
        {emoji}
      </button>
    </li>
  ));

  return <ul className="card-container">{emojiEl}</ul>;
}
