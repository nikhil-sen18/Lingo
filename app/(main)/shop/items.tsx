"use client";

import { refillHearts } from "@/actions/user-progress";
import { Button } from "@/components/ui/button";
import { createStripeUrl } from "@/actions/user-subscription";
import Image from "next/image";
import { useTransition } from "react";
import { toast } from "sonner";
import { POINTS_TO_REFILL } from "@/constants";


type Props = {
    hearts: number;
    points: number;
    hasActiveSubscription: boolean;
}

export const Items = ({
    hearts,
    points,
    hasActiveSubscription
}: Props) => {

    const [pending, startTransition] = useTransition();

    const onRefillHearts = () => {
        if (pending || hearts === 5 || points < POINTS_TO_REFILL) {
            return;
        }

        startTransition(() => {
            refillHearts()
                .catch(() => {
                    toast.error("Something went wrong")
                })
        })
    }

    const onUpgrade = () => {
        startTransition(async () => {
            const res = await createStripeUrl()
            if (res.data) {
                window.location.href = res.data;
                return;
            }
            toast.error("Something went wrong");
        });
    }

    return (
        <ul className=" w-full">
            <div className="flex items-center w-full p-4 gap-x-4 border-t-2">
                <Image
                    src="/heart.svg"
                    alt="Heart"
                    height={60}
                    width={60}
                />
                <div className="flex-1">
                    <p className="text-neutral-700 text-base lg:text-xl font-bold ">
                        Refill hearts
                    </p>
                </div>
                <Button
                    disabled={pending || hearts === 5 || points < POINTS_TO_REFILL}
                    onClick={onRefillHearts}
                >
                    {hearts === 5
                        ? "full"
                        : <div className="flex items-center ">
                            <Image
                                src="/points.svg"
                                alt="Points"
                                height={20}
                                width={20}
                            />
                            <p>
                                {POINTS_TO_REFILL}
                            </p>
                        </div>
                    }
                </Button>
            </div>
            <div className="flex items-center w-full p-4 pt-8 gap-x-4 border-t-2">
                <Image
                    src="/unlimited.svg"
                    alt="Unlimited"
                    height={60}
                    width={60}
                />
                <div className="flex-1">
                    <p className="text-neutral-700 text-base lg:text-xl font-bold">
                        Unlimited Hearts
                    </p>
                </div>
                <Button
                    onClick={onUpgrade}
                    disabled={pending}
                >
                    {hasActiveSubscription ? "settings" : "upgrade"}
                </Button>
            </div>
        </ul>

    )
}