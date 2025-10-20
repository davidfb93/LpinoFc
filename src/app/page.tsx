"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RootPage() {
    const { push } = useRouter();

    useEffect(() => {
        push("/home");
    }, [push]); 

    return null;
}
