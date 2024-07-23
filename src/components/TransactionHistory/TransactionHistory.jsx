import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.itemTable}>
      <thead className={css.itemThead}>
        <tr className={css.itemTheadTr}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={css.itemTbody}>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <td className={css.itemType}>{type}</td>
              <td className={css.itemAmount}>{amount}</td>
              <td className={css.itemCurrency}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
