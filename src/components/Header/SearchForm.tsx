import React, {FC} from 'react';
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import {TextInput} from "../UIKit";
import {makeStyles} from "@material-ui/core/styles";

interface Props {
    text: string;
    setText: (s: string) => void;
    setQuery: (s: string) => void;
}

const useStyles = makeStyles({
    searchField: {
        alignItems: 'center',
        display: 'flex',
        marginLeft: 32,
    }
});

const SearchForm: FC<Props> = (props: Props) => {
    const classes = useStyles();

    const inputTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.setText(e.target.value);
    };

    const searchHandler = () => {
        props.setQuery(props.text);
    };

    return (
        <div className={classes.searchField}>
            <TextInput
                fullWidth={false}
                label={"キーワードを入力"}
                multiline={false}
                required={false}
                rows={1}
                value={props.text}
                type={"search"}
                onChange={inputTextHandler}
            />
            <IconButton onClick={searchHandler}>
                <SearchIcon />
            </IconButton>
        </div>
    );
};

export default SearchForm;
