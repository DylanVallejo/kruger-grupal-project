import { AiOutlineGithub } from "react-icons/ai";

const Author = ({ item }) => {
  return (
    <div className="border shadow-lg rounded-md">
      <img
        src={item.image}
        alt={item.name}
        className="h-1/2 object-cover w-full"
      />
      <div className="px-4 my-4">
        <h3 className="my-2 text-xl md:text-2xl">{item.name}</h3>
        <p className="md:text-lg">👨🏻‍💻 Programador</p>
        <p className="my-2 md:text-lg">{item.activities}</p>
        <a
          href={item.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2 items-center text-lg"
        >
          <AiOutlineGithub className="text-2xl" />
          Github
        </a>
      </div>
    </div>
  );
};

export default Author;
