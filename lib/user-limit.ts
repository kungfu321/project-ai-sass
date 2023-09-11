import { auth } from "@clerk/nextjs";

import { MAX_FREE_COUNTS, DAY_IN_MS } from "@/constants";
import prismadb from "@/lib/prismadb";

export const getUserLimit = async () => {
  const { userId } = auth();

  if (!userId) return null;

  return await prismadb.userLimit.findUnique({
    where: {
      userId
    }
  });
}

export const getUserLimitCount = async () => {
  const userLimit = await getUserLimit();

  if (!userLimit) return 0;

  return userLimit.count;
}

export const checkUserLimit = async () => {
  const userLimit = await getUserLimit();

  if (!userLimit || userLimit.count < MAX_FREE_COUNTS) {
    return true;
  }

  return false;
}

export const incrementUserLimit = async () => {
  const { userId } = auth();

  if (!userId) return null;

  const userLimit = await getUserLimit();

  if (userLimit) {

    return await prismadb.userLimit.update({
      where: { userId },
      data: { count: userLimit.count + 1 },
    });
  }

  return await prismadb.userLimit.create({
    data: { userId, count: 1 },
  });
}

export const checkSubscription = async () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  const userSubscription = await prismadb.userSubscription.findUnique({
    where: {
      userId,
    },
    select: {
      stripeCustomerId: true,
      stripeCurrentPeriodEnd: true,
      stripePriceId: true,
      stripeSubscriptionId: true,
    },
  });

  if (!userSubscription) return false;

  const isValid =
    userSubscription.stripePriceId &&
    userSubscription.stripeCurrentPeriodEnd?.getTime()! + DAY_IN_MS > Date.now()

  return !!isValid;
};
