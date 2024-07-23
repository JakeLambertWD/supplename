"use client";

import { useEffect, useState } from "react";
import Works from "../components/Works";
import NavigationBar from "../components/NavigationBar";
import { getPageInfo } from "../lib/sanity";

function page() {
  const [active, setActive] = useState(0);
  const [pageInfo, setPageInfo] = useState<any>({});
  useEffect(() => {
    const fetchData = async () => {
      const data = await getPageInfo();
      setPageInfo(data[0]);
    };
    fetchData();
  }, []);

  return (
    <>
      <NavigationBar logo={pageInfo.imageURL} />
      <Works active={active} setActive={setActive} />
    </>
  );
}

export default page;
