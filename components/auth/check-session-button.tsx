"use client";
import { User } from "next-auth";
import { useState } from "react";

export function CheckSessionButton() {
  const [userName, setUserName] = useState<String>();
  async function checkSession() {
    const response = await fetch("http://localhost:3000/api/session", {
      method: "POST",
    });
    if (response.ok) {
      const user = (await response.json()).user as User;
      setUserName(user?.name || "user name is undefined");
    } else {
      setUserName("session is undefined");
    }
  }
  return (
    <div>
      {userName && <p>user: {userName}</p>}
      <button onClick={checkSession} type="submit">
        Check Session
      </button>
    </div>
  );
}
