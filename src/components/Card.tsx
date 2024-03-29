type CardProps = {
  children: React.ReactNode;
};

function Card(props: CardProps) {
  return (
    <div className="p-6 rounded-3xl flex gap-2 md:flex-row sm:flex-col-reverse bg-white">
      {props.children}
    </div>
  );
}

export default Card;
