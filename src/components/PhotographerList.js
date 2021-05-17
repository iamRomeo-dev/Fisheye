import "./PhotographerList.css";
import { useQuery } from "react-query";
import { fetchPhotographers } from "../API";
import { PhotographerListComponent } from "./PhotographerListComponent";
import { Navbar } from "./Navbar";

export const PhotographerList = ({ filter, setFilter }) => {
  const { data, status } = useQuery(
    "I Don't Know Why I need this parameter",
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
              ? data.photographers
                  .filter((photographer) => photographer.tags.includes(filter))
                  .map((photographer, index) => (
                    <PhotographerListComponent
                      key={index}
                      photographer={photographer}
                    />
                  ))
              : data.photographers.map((photographer, index) => (
                  <PhotographerListComponent
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
