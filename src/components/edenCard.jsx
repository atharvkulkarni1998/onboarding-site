import React, { useState, useContext } from "react";
import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";
import { AppContext } from "../routing/Routing";

const EdenCard = (props) => {
  
  //used to toggle the color of the selected card
  const { setContextUsingEdenData } = useContext(AppContext);
  const [selectedCard, setSelectedCard] = useState("");

  return (
    <div className="flex justify-center gap-10 mb-6">
      {props.edenCards.map((eachRecord, index) => {
        return (
          <div
            key={index}
            id={eachRecord.cardHeader}
            style={{
              width: "25%",
              textAlign: "left",
              borderColor:
                selectedCard === eachRecord.cardHeader ? "#674EE7" : "",
            }}
            className="border-2 py-7 px-5 rounded-lg cursor-pointer"
            onClick={(e) => {
              setContextUsingEdenData(e.target.id);
              setSelectedCard(e.target.id);
            }}
          >
            {/* display icon at the start of card */}
            {index === 0 ? (
              <PersonIcon
                id={eachRecord.cardHeader}
                sx={{
                  fontSize: "30px",
                  color:
                    selectedCard === eachRecord.cardHeader ? "#674EE7" : "",
                }}
              />
            ) : (
              <GroupsIcon
                sx={{
                  fontSize: "30px",
                  color:
                    selectedCard === eachRecord.cardHeader ? "#674EE7" : "",
                }}
              />
            )}

            {/* display card content */}
            <div id={eachRecord.cardHeader} className="font-semibold mb-2 mt-4">
              {eachRecord.cardHeader}
            </div>
            <div id={eachRecord.cardHeader} style={{ color: "#9c9c9c" }}>
              {eachRecord.cardText}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EdenCard;
