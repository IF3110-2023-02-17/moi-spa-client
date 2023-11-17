import { Subscription } from "../../types/subscription";
import Button from "../utils/Button";

interface SubscriptionCardProps {
  subscription: Subscription;
  onAccept: () => void;
  onReject: () => void;
}

function SubscriptionCard({
  subscription,
  onAccept,
  onReject,
}: SubscriptionCardProps) {
  return (
    <li className="bg-primary shadow-lg w-[80%] m-auto rounded-lg">
      <div className="p-6 flex sm:flex-row sm:justify-between sm:gap-0 flex-col justify-center gap-4">
        <div className="flex">
          <h2 className="font-bold text-2xl text-white sm:m-0 m-auto">
            {subscription.subsName}
          </h2>
        </div>
        <div className="flex sm:flex-row gap-5">
          <Button type="submit" onClick={onAccept}>
            Accept
          </Button>
          <Button type="submit" onClick={onReject}>
            Reject
          </Button>
        </div>
      </div>
    </li>
  );
}

export default SubscriptionCard;
