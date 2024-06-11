"use server";

import { cookies } from "next/headers";

export async function storeToken(value: string) {
  cookies().set({
    name: "accessToken",
    value,
    httpOnly: true,
    sameSite: "strict",
    secure: true,
  });
}

export async function getToken() {
  return cookies().get("accessToken")?.value;
}
