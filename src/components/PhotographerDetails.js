import { useEffect, useState } from "react";
import { useParams } from "react-router";

export const PhotographerDetails = () => {
  const { userId } = useParams(); // <- Get back the id from the url
  const [isLoading, setIsLoading] = useState(true);
  const [photographer, setPhotographer] = useState([]);

  const url =
    "https://iamromeo-dev.github.io/aaaaaaaaaaaaaaaaaaaaaaaaaaa/data.json";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setIsLoading(false);

        for (let i = 0; i < result.photographers.length; i++) {
          const IdNumber = result.photographers[i].id; // <- //typeof id === Number
          const IdString = IdNumber.toString(); // <- //typeof id === String

          if (IdString === userId) {
            setPhotographer(result.photographers[i]);
          }
        }
      });
  }, [userId]);
  console.log(photographer);

  return (
    <>
      {photographer ? (
        <h2 className="photographerName">{photographer.name}</h2>
      ) : null}

      {isLoading ? <span>Loading...</span> : null}
    </>
  );
};
