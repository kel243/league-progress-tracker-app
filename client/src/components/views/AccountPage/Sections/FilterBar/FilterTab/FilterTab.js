import React, { useEffect } from "react";

function FilterTab(props) {
  let filtered = [];

  useEffect(() => {
    if (props.active === props.name) {
      props.forwardedRef.current.classList.add("filter-tab-active");
    } else {
      props.forwardedRef.current.classList.remove("filter-tab-active");
    }
  });

  const onClickHandler = () => {
    if (props.filter === "all") {
      props.filterMatches(props.allMatches);
    } else {
      props.allMatches.forEach((match) => {
        if (match.lane === props.filter) {
          filtered.push(match);
        }
      });
      props.filterMatches(filtered);
    }
  };

  return (
    <div
      className="filter-tab"
      ref={props.forwardedRef}
      onClick={() => props.onClick(props.name)}
    >
      <button className="filter-btn" onClick={onClickHandler} id={props.filter}>
        {props.name}
      </button>
    </div>
  );
}

export default FilterTab;
