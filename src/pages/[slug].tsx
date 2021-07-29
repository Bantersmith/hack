import { useRouter } from "next/router";
import { useEffect } from "react";

const getUrl = async (slug) => {
  const response = await fetch(`https://url.davidwalker.dev/${slug}`, {
    method: "GET",
    mode: "cors",
  });
  // console.log("response", response);

  const data = await response.text();
  // console.log("data", data);

  return data;
};

const shortUrl = () => {
  const router = useRouter();

  useEffect(() => {
    const slug = window.location.href.substring(
      window.location.href.lastIndexOf("/") + 1
    );

    getUrl(slug).then((url) => {
      console.log("url", url);
      if (url.startsWith("Slug")) router.push("/");
      else if (url.startsWith("http")) {
        router.push(url);
      } else {
        router.push("https://" + url);
      }
    });
  }, []);
  return null;
};

export default shortUrl;
