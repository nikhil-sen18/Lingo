import { auth } from "@clerk/nextjs";

const adminIds = ["user_2eNsHgIDvViLwq558GLTc2pzfnb"];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
