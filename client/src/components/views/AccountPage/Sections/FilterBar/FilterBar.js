import React, { useState, useRef } from "react";
import FilterTab from "./FilterTab/FilterTab";

function FilterBar(props) {
  const [active, setActive] = useState("");

  const allRef = useRef(null);
  const topRef = useRef(null);
  const jungleRef = useRef(null);
  const midRef = useRef(null);
  const adcRef = useRef(null);
  const supportRef = useRef(null);

  const onClickHandler = (name) => {
    setActive(name);
  };

  return (
    <div className="filter-bar">
      <FilterTab
        name="ALL"
        filter="all"
        filterMatches={props.filterMatches}
        matches={props.matches}
        allMatches={props.allMatches}
        forwardedRef={allRef}
        onClick={onClickHandler}
        active={active}
      />
      <FilterTab
        name="TOP"
        filter="Top"
        filterMatches={props.filterMatches}
        matches={props.matches}
        allMatches={props.allMatches}
        forwardedRef={topRef}
        onClick={onClickHandler}
        active={active}
      />
      <FilterTab
        name="JNG"
        filter="Jungle"
        filterMatches={props.filterMatches}
        matches={props.matches}
        allMatches={props.allMatches}
        forwardedRef={jungleRef}
        onClick={onClickHandler}
        active={active}
      />
      <FilterTab
        name="MID"
        filter="Mid"
        filterMatches={props.filterMatches}
        matches={props.matches}
        allMatches={props.allMatches}
        forwardedRef={midRef}
        onClick={onClickHandler}
        active={active}
      />
      <FilterTab
        name="ADC"
        filter="Adc"
        filterMatches={props.filterMatches}
        matches={props.matches}
        allMatches={props.allMatches}
        forwardedRef={adcRef}
        onClick={onClickHandler}
        active={active}
      />
      <FilterTab
        name="SUP"
        filter="Support"
        filterMatches={props.filterMatches}
        matches={props.matches}
        allMatches={props.allMatches}
        forwardedRef={supportRef}
        onClick={onClickHandler}
        active={active}
      />
    </div>
  );
}

export default FilterBar;
