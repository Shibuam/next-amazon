import React from "react";
import NextLink from "next/link";
import Head from "next/head";
import {
  AppBar,
  Typography,
  Toolbar,
  Container,
  Link,
} from "@material-ui/core";

import useStyle from "../utils/style";

export default function Layout({ children }) {
  const classes = useStyle();

  return (
    <div>
      <Head>
        <title>AMAZON-NEXT</title>
      </Head>

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
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.foot}>
        <Typography>All rights are reserved @ Shibu A</Typography>
      </footer>
    </div>
  );
}
