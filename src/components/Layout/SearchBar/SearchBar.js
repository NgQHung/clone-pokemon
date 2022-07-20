import React from "react";
import Button from "../../Ui/Button/Button";
import classes from "./SearchBar.module.css";

function SearchBar() {
    return (
        <div className={classes.SearchBar}>
            <div className={classes.SearchBarWrapper}>
                <input placeholder="Search Your Pokemon" />
                <Button>logo</Button>
            </div>
        </div>
    );
}

export default SearchBar;
