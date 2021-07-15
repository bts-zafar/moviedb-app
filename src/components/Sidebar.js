import React from 'react'
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import FavoriteIcon from '@material-ui/icons/Favorite'
import VisibilityIcon from '@material-ui/icons/Visibility'
import Divider from "@material-ui/core/Divider"
import IconButton from "@material-ui/core/IconButton"
import {GitHub, Instagram, LinkedIn, Menu as MenuIcon, TimelineSharp} from "@material-ui/icons"
import Typography from "@material-ui/core/Typography"
import {Link} from "react-router-dom"
import {makeStyles} from "@material-ui/core"
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'

const useStyles = makeStyles(theme => ({
    list: {
        width: 250,
    },
    brand: {
        textDecoration: 'none',
        color: 'inherit'
    },
    text :{
       textAlign: 'center',
       marginTop: '500px'

    },
    social: {
       marginRight: '15px',
       textAlign: 'center'
    }
}))

function Sidebar({open, onClose}) {
    const classes = useStyles()

    return (
        <Drawer anchor="left" variant="temporary" open={open} onClose={onClose}>
            <List className={classes.list}>
                <ListItem button key="favorite">
                    <IconButton onClick={onClose} edge="start" color="inherit" aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        <Link className={classes.brand} to="/">Movie App 👋</Link>
                    </Typography>
                </ListItem>
                <Divider />
                <ListItem component={Link} to="/favorites" button key="favorite">
                    <ListItemIcon><FavoriteIcon/></ListItemIcon>
                    <ListItemText primary="Favorites" />
                </ListItem>
                <ListItem>
                <Typography variant="h6" overflowWrap>
                        <ListItemText className={classes.text} to="/">This App is Made by Zafar Abbas</ListItemText>
                    </Typography>
                </ListItem>
                <ListItem className={classes.social}>
                <Link to={{ pathname: "https://www.instagram.com/az.zzzafar/" }} target="_blank">
                    <ListItemIcon>
                        <Instagram />
                    </ListItemIcon>
                 </Link>  
                 
                 <Link to={{ pathname: "https://github.com/bts-zafar" }} target="_blank">
                    <ListItemIcon>
                        <GitHub />
                    </ListItemIcon>
                 </Link>  
                 <Link to={{ pathname: "https://github.com/bts-zafar" }} target="_blank">
                    <ListItemIcon>
                        <LinkedIn />
                    </ListItemIcon>
                 </Link>   
                </ListItem>
            </List>
        </Drawer>
    )
}

export default Sidebar
