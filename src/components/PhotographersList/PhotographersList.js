import "./PhotographersList.css";
import { useQuery } from "react-query";
import { fetchPhotographers } from "../../API";
import { PhotographersListComponent } from "./PhotographersListComponent";
import { Navbar } from "../Navbar/Navbar";

export const PhotographersList = ({ filter, setFilter }) => {
  const { data, status } = useQuery(
    "fetchPhotographers",
    fetchPhotographers
  );

  return (
    <>
      {status === "loading" && <div>Loading data</div>}

      {status === "error" && <div>Error fetching data</div>}

      {status === "success" && (
        <>
          <Navbar setFilter={setFilter} />
          <div className="PhotographerListWrapper">
            {filter
              ? data
                  .filter((photographer) => photographer.tags.includes(filter))
                  .map((photographer, index) => (
                    <PhotographersListComponent
                      key={index}
                      photographer={photographer}
                    />
                  ))
              : data.map((photographer, index) => (
                  <PhotographersListComponent
                    key={index}
                    photographer={photographer}
                  />
                ))}
          </div>
        </>
      )}
    </>
  );
};
