type CardProps = {
  title?: string;
  color?: string;
};

/**
 * Cards
 */
const Card = ({ title, color }: CardProps) => {
  return (
    <div className={`border shadow-sm rounded-xl p-4 md:p-5 ${color}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-file-plus text-white"
      >
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="M9 15h6" />
        <path d="M12 18v-6" />
      </svg>
      <h1 className="text-white mt-2">{title}</h1>
    </div>
  );
};

export default Card;
