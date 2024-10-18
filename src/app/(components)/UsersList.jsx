"use client";

import React from "react";
import Link from "next/link";
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function UsersList({ user }) {
  const router = useRouter();

  async function handleDelete() {
    const res = await fetch(`/api/users/${user.email}`, {
      method: "DELETE",
    });
    await res?.json();
    if (res.status === 200) {
      router.push("/admin");
      router.refresh();
    }
  }

  return (
    <li className="border-0 p-3">
      <div className="flex items-center space-x-4 rounded-lg border-0 bg-zinc-800 p-3 shadow-md shadow-zinc-500 drop-shadow-md rtl:space-x-reverse">
        <div className="min-w-0 flex-1 rounded-xl">
          <p className="text-xs font-light text-gray-200">{user.email}</p>
          <p className="text-sm font-semibold text-gray-200">{user.name}</p>
        </div>
        <Link href={`/admin/${user.email}/edit`} className="text-emerald-400">
          <FaPencilAlt className="edit" />
        </Link>
        <FaTrashAlt className="trash" onClick={handleDelete} />
      </div>
    </li>
  );
}
