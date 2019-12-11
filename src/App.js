import React, { Component } from 'react';
import Layout from "../src/components/Layout/Layout";
import {Route,Switch} from "react-router-dom";
import PostsGrid from "../src/components/Posts/PostsGrid/PostsGrid";
import Upload from "../src/components/Upload/Upload";
class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
        <Route path="/" exact component={PostsGrid}></Route>
        <Route path="/upload"  component={Upload}></Route>
        </Switch>
        </Layout>
       
    );
  }
}

export default App;
