import { Menfess } from "../../types/menfess";

function MenfessCard({ menfess }: { menfess: Menfess }) {
  return (
    <li className="bg-primary shadow-lg w-[80%] m-auto rounded-lg">
      <div className="p-6 flex flex-col justify-between gap-0">
        <div className="font-bold text-white text-2xl mb-3">
          <h1>{menfess.sender}</h1>
        </div>
        <div className="text-white bg-opacity-25 bg-white rounded-lg p-3">
          <p>{menfess.body}</p>
        </div>
      </div>
    </li>
  );
}

export default MenfessCard;
