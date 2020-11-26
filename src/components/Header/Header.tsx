import React, {FC} from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {makeStyles} from "@material-ui/core/styles";
import {SearchForm} from "./index";

interface Props {
    text: string;
    setText: (s: string) => void;
    setQuery: (s: string) => void;
}

const useStyles = makeStyles({
    header: {
        opacity: 0.9
    },
    toolBar: {
        margin: '0 auto',
        maxWidth: 1024,
        width: '100%'
    },
});

const Header: FC<Props> = (props: Props) => {
    const classes = useStyles();
    return (
        <AppBar position="fixed" className={classes.header} color="inherit">
            <Toolbar className={classes.toolBar}>
                <p>
                    PHOTO SEARCH APP
                </p>
                <div className="spacer-horizontal"></div>
                <SearchForm text={props.text} setText={props.setText} setQuery={props.setQuery}/>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
