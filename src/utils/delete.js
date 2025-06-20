"use server";

import { revalidatePath } from "next/cache";
import { db } from "./dbConnection";

export async function deleteComment(Id, worldID) {
  await db.query("DELETE FROM world_comments WHERE id = $1", [Id]);
  revalidatePath(`/${worldID}`);
}
