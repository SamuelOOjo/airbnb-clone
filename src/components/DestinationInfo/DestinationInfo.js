import React from "react";
import Divider from "@mui/material/Divider";
import SearchIcon from "@mui/icons-material/Search";
import "./DestinationInfo.css";
import { useHistory } from "react-router-dom";

function DestinationInfo() {
  const history = useHistory();

  return (
    <div data-testid='destinationInfo_test' className="destinationInfo">
      <div className="destinationInfo__inputs">
        <div className="destinationInfo__location">
          <label>Location</label>
          <input type="text" placeholder="Where are you going?" />
        </div>
        <Divider
          style={{ marginLeft: "75px" }}
          orientation="vertical"
          variant="middle"
          flexItem
        />
        <div className="destinationInfo__checkin">
          <label>Check in</label>
          <input type="date" placeholder="Add dates" />
        </div>
        <Divider
          style={{ marginLeft: "15px" }}
          orientation="vertical"
          variant="middle"
          flexItem
        />
        <div className="destinationInfo__checkout">
          <label>Check out</label>
          <input type="date" placeholder="Add dates" />
        </div>
        <Divider
          style={{ marginLeft: "15px" }}
          orientation="vertical"
          variant="middle"
          flexItem
        />
        <div className="destinationInfo__guest">
          <label>Guest</label>
          <input type="number" placeholder="Add guests" />
        </div>
        <SearchIcon className="destinationInfo__search" onClick={(e) => history.push("/search")}/>
      </div>
    </div>
  );
}

export default DestinationInfo;
