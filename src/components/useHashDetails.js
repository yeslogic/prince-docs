import { useEffect } from "react";
import { openDetails } from "./openDetails";

const useHashDetails = () => {
  useEffect(() => {
    // On page load/after first render, if there's a hash in the URL, open that id's parent `details` element:
    openDetails();

    // On "hashchange"/click of hash-links, open the corresponding id's parent `details` element:
    window.addEventListener("hashchange", openDetails);

    // When the css-props component unmounts, remove the hashchange event listener:
    return () => {
      window.removeEventListener("hashchange", openDetails);
    };
  }, []);
};

export default useHashDetails;
