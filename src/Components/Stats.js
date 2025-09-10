export function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>start adding items to your packing-list 🚀</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = (numPacked / numItems) * 100;
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "you get everything ready to go"
          : `You have ${numItems} items on your list and you already packed
        ${numPacked} [${percentage}%]`}
      </em>
    </footer>
  );
}
