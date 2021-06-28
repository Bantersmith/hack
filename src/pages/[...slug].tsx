import { useRouter } from "next/router";
import { useEffect } from "react";

const shortUrl = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  }, []);
  return null;
};

export default shortUrl;
