import React from "react";
import NextLink from "next/link";
import Head from "next/head";
import {
  AppBar,
  Typography,
  Toolbar,
  Container,
  Link,
  ThemeProvider,
  CssBaseline
} from "@material-ui/core";
import {createTheme}from "@material-ui/core";
import useStyle from "../utils/style";

export default function Layout({ title,children }) {
  const classes = useStyle();
  const theme =createTheme({
    typography:{
     h1:{
      fontSize:'1.6rem',
      fontWeight:'400',
      margin:'1rem 0'
     },
    },
     palette:{
      type:'light',
      primary:{
        main:'#f0c000',
      },
      secondary:{
        main:'#208080'
      }
     }


    
  })

  return (
    <div>
      <Head>
        <title>{title?`${title}-AMAZON-NEXT`:'AMAZON-NEXT'}</title>
      </Head>
<ThemeProvider theme={theme}>
<CssBaseline/>
<AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <NextLink href="/" passHref>
            <Link>
              <Typography className={classes.brand}>AMAZON</Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <NextLink href="/" passHref>
            <Link>
            <Typography>Cart</Typography>
            </Link>
        
          </NextLink>

          <NextLink href="/" passHref>
            <Link>
            <Typography>Login</Typography>
            </Link>
        
          </NextLink>
        </Toolbar>
      </AppBar>
</ThemeProvider>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.foot}>
        <Typography>All rights are reserved @ Shibu A</Typography>
      </footer>
    </div>
  );
}
