import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@mui/material";
import AppRoutes from "./routes/AppRoutes";
import { Layout } from "@components/Layout/Layout.style";

export default function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>          
          <Button color="inherit" component={Link} to="/product/create">
            Cadastrar Produto
          </Button>
          <Button color="inherit" component={Link} to="/product/list">
            Listar Produtos
          </Button>
        </Toolbar>
      </AppBar>
      <Layout.Container>
        <AppRoutes />
      </Layout.Container>
    </Router>
  );
}
