"use client"
import React, { useEffect } from "react";
import { initWow } from "../utils/wow-init";

export default function WowJsProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    initWow();
  }, []);

  return <div>{children}</div>;
}
