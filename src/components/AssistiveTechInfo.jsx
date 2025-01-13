export default function AssistiveTechInfo({ emojisData, matchedCards }) {
  console.log(emojisData);
  console.log(matchedCards);
  return (
    <section className="sr-only">
      <h2>Game status</h2>
      <p>Number of matched pairs: {matchedCards.length / 2}.</p>
      <p>
        Number of cards left to match: {emojisData.length - matchedCards.length}
        .
      </p>
    </section>
  );
}
