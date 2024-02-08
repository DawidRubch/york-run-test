"use client";

import { useEffect, useState } from "react";

export default function Screen1() {
  const [data, setData] = useState<any[]>([]);

  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    // Set up a delay for the search operation
    const delayDebounce = setTimeout(() => {
      getData(search).then((res) => {
        setData(res);
      });
    }, 300); // 300ms delay

    // Cleanup function to cancel the timeout if the component is unmounted
    // or if the user starts typing again within the 300ms period
    return () => clearTimeout(delayDebounce);
  }, [search]);

  return (
    <section className="w-4/5 flex-col">
      <div>
        <span>Search</span>
        <input
          type="text"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
        />
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Status</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.status}</td>
              <td>{item.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

const getData = async (search: string) => {
  const res = await fetch("/api/data/1", {
    method: "POST",
    body: JSON.stringify({ search }),
  });
  const data = await res.json();
  return data;
};
