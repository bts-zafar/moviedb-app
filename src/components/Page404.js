import React from 'react'
import Container from "@material-ui/core/Container"
import {makeStyles} from "@material-ui/core"
import {Link} from "react-router-dom"
import ReactHlsPlayer from 'react-hls-player';
const useStyles = makeStyles(theme => ({
    container: {
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center"
    },
    subtitle: {
        fontSize: '14pt'
    },
    action: {
        textDecoration: 'none',
        color: '#0037ff',
        margin: 6,
        "&:hover": {
            textDecoration: 'underline'
        }
    }
}))

function Page404(props) {
    const classes = useStyles()

    return (
        <Container className={classes.container}>
           
            <ReactHlsPlayer
    src="https://content.jwplatform.com/manifests/yp34SRmf.m3u8"
    autoPlay={true}
    controls={true}
    width="100%"
    height="auto"
  >

  </ReactHlsPlayer>
                 
            <div className={classes.subtitle}>
                Go back to 
                <Link className={classes.action} to="/">Home page.</Link>
            </div>
        </Container>
    )
}

export default Page404
