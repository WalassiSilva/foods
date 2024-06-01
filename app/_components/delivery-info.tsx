import { BikeIcon, TimerIcon } from "lucide-react";
import { Card } from "./ui/card";
import { formatCurrency } from "../helpers/price";
import { Restaurant } from "@prisma/client";

type DeliveryInfoProsp = {
  restaurant: Pick<Restaurant, "deliveryFee" | "deliveryTimeMinutes">;
};

export default function DeliveryInfo({ restaurant }: DeliveryInfoProsp) {
  return (
    <>
      <Card className="mt-6 flex justify-around py-3">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1 text-muted-foreground">
            <span className="text-xs">Entrega</span>
            <BikeIcon size={14} />
          </div>

          {Number(restaurant.deliveryFee) > 0 ? (
            <p className="text-xs font-semibold">
              {formatCurrency(Number(restaurant.deliveryFee))}
            </p>
          ) : (
            <p className="text-xs font-semibold">Grátis</p>
          )}
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1 text-muted-foreground">
            <span className="text-xs">Entrega</span>
            <TimerIcon size={14} />
          </div>

          <p className="text-xs font-semibold">
            {restaurant.deliveryTimeMinutes} min
          </p>
        </div>
      </Card>
    </>
  );
}
