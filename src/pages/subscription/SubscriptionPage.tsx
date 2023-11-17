import { useQuery } from "@tanstack/react-query";
import SubscriptionCard from "../../components/Subscription/SubscriptionCard";
import { apiClient } from "../../lib/api";
import { Subscription } from "../../types/subscription";

function SubscriptionPage() {
  const { data, refetch } = useQuery({
    queryKey: ["subscription"],
    queryFn: () =>
      apiClient
        .get<{ subscriptions: Subscription[] }>("/subscription")
        .then((res) => res.data.subscriptions),
  });

  const handleAccept = (subscriber_id: number): void => {
    apiClient.post(`/subscription/accept/${subscriber_id}`).then(() => {
      refetch();
    });
  };
  const handleReject = (subscriber_id: number): void => {
    apiClient.post(`/subscription/reject/${subscriber_id}`).then(() => {
      refetch();
    });
  };

  return (
    <div className="mt-12 max-w-screen-lg mx-auto px-4">
      <div className="flex justify-between mb-8">
        <h1 className="font-bold text-4xl">Subscription Request</h1>
      </div>
      <ul className="grid grid-cols-1 gap-4 md:gap-10">
        {data?.map((subsription) => (
          <SubscriptionCard
            subscription={subsription}
            onAccept={() => handleAccept(subsription.subsId)}
            onReject={() => handleReject(subsription.subsId)}
            key={subsription.subsId}
          />
        ))}
      </ul>
    </div>
  );
}

export default SubscriptionPage;
