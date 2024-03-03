"use client";

import Link from "next/link";
import React from "react";

const ButtonRedirect = (props: { label: string; redirect: string }) => {
  const { label, redirect } = props;

  return (
    <div className="px-6 py-4">
      <Link href={redirect}>{label}</Link>
    </div>
  );
};

export default ButtonRedirect;
