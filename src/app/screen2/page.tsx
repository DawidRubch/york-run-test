"use client";

import { useEffect, useState } from "react";

export default function Screen2() {
  const [images, setImages] = useState<any[]>([]);
  useEffect(() => {
    getImages("nature").then((res) => {
      console.log(res);
    });
  }, []);

  return <></>;
}

//https://api.pexels.com/v1/search?query=nature&per_page=1

const getImages = async (search: string) => {
  const res = await fetch(
    `https://api.pexels.com/v1/search?query=${search}&per_page=1`,
    {
      headers: {
        Authorization:
          "NYluoxzWfoO7lLl6wVm17Gvqwc2wJjwU9LG9unBJGpwGWnWA48Oxcmz0",
      },
    }
  );

  return res.json();
};
