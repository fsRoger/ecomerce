interface Props {
  amount: number
}

const FmtPrice = ({ amount }: Props) => {
  const FormattedAmount = new Number(amount).toLocaleString("pt-BR", {
    style: 'currency',
    currency: "BRL",
    minimumFractionDigits: 2
  });
  return <span>{FormattedAmount}</span>;

};

export default FmtPrice;