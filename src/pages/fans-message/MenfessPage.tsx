import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../../lib/api";
import { Menfess } from "../../types/menfess";
import MenfessCard from "../../components/menfess/MenfessCard";

function SubscriptionPage() {
  const { data } = useQuery({
    queryKey: ["fans_menfess"],
    queryFn: () =>
      apiClient
        .get<{ menfesses: Menfess[] }>("/menfess")
        .then((res) => res.data.menfesses),
  });

  return (
    <div className="mt-12 max-w-screen-lg mx-auto px-4">
      <div className="flex justify-between mb-8">
        <h1 className="font-bold text-4xl">Menfess from Subscriber</h1>
      </div>
      <ul className="grid grid-cols-1 gap-4 md:gap-10">
        {data?.map((menfess) => (
          <MenfessCard menfess={menfess} key={menfess.msg_id} />
        ))}
      </ul>
    </div>
  );
}

export default SubscriptionPage;
