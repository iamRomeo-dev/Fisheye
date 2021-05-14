import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import { fetchPhotographers } from "../API";

export const PhotographerDetails = () => {
  const { userId } = useParams(); // <- Get back the id from the url
  const [photographer, setPhotographer] = useState([]);

  const { data, status } = useQuery(
    "I Don't Know Why I need this parameter",
    fetchPhotographers
  );

  useEffect(() => {
    const aaa = () => {
      for (let i = 0; i < data.photographers.length; i++) {
        const IdNumber = data.photographers[i].id; // <- //typeof id === Number
        const IdString = IdNumber.toString(); // <- //typeof id === String

        if (IdString === userId) {
          setPhotographer(data.photographers[i]);
        }
      }
    };
    aaa();
  }, [userId, setPhotographer, data.photographers]);

  return (
    <>
      {status === "loading" && <div>Loading data</div>}

      {status === "error" && <div>Error fetching data</div>}

      {status === "success" && (
        <h2 className="photographerName">{photographer.name}</h2>
      )}
    </>
  );
};
