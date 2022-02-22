import React from "react";
import { Button } from "@material-ui/core";
import "./SearchPage.css";
import SearchResult from "../SearchResult/SearchResult";

function SearchPage() {
  return (
    <div className="searchPage">
      <div data-testid='searchpage_test' className="searchPage__info">
        <p>62 stays · 26 august to 30 august · 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Free cancellation</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">Filters</Button>
      </div>
      <SearchResult
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
        location="Private room in center of New York"
        title="Stay at this spacious Edwardian House"
        description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={4.73}
        price="$30 CAD / night"
        total="$117 CAD total"
      />

      <SearchResult
        img="https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg"
        location="Entire residential home in Newmarket"
        title="Cosy 2 bedroom bungalow"
        description="2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen"
        star={4.3}
        price="$40 CAD / night"
        total="$157 CAD total"
      />

      <SearchResult
        img="https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg"
        location="Entire guest suite in Richmond Hill"
        title="Brand new 2-bedroom apt"
        description="4 guest · 2 bedroom · 2 bed · 2 bathrooms · Free parking · Washing Machine"
        star={3.8}
        price="$35 CAD / night"
        total="$207 CAD total"
      />
      <SearchResult
        img="https://cdn.bisnow.net/fit?height=489&type=jpeg&url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.bisnow.net%2Fcontent%2Fimages%2F2017%2F05%2F59151d0978bbf_https_press_atairbnb_com_app_uploads_2016_12_midtown_4.jpeg&width=717&sign=FeltIPi9cOWA36nVIeDvZxwgtiCZrpUyMRdvyZviTUI"
        location="Entire rental unit in Bradford West"
        title="2 bedroom seperate entrance apartment"
        description="1 guest · 2 bedroom · 2 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={4.1}
        price="$55 CAD / night"
        total="$320 CAD total"
      />
      <SearchResult
        img="https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1500,c_limit/airbnb-plus-london.jpg"
        location="Entire residdential home in Richmond Hill"
        title="Beautiful, Clean, and spacious basement"
        description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning"
        star={5.0}
        price="$60 CAD / night"
        total="$450 CAD total"
      />
      <SearchResult
        img="https://static.trip101.com/paragraph_media/pictures/001/676/061/large/969ae4bb-efd1-4fb9-a4e3-5cb3316dd3c9.jpg?1562227937"
        location="Private room in center of London"
        title="The Blue Room In London"
        description="2 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Washing Machine"
        star={4.23}
        price="$65 CAD / night"
        total="$480 CAD total"
      />
      <SearchResult
        img="https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp"
        location="Private room in center of Calgary"
        title="5 Star Luxury Apartment"
        description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={3.85}
        price="$90 CAD / night"
        total="$650 CAD total"
      />
    </div>
  );
}

export default SearchPage;
