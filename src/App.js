import React, { useState, useEffect } from "react";
import "./styles/app.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import i18n from "./i18n/i18n"; // Translating content
import Loading from "./components/Loading";
import { DataProvider } from "./components/Context";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);

  // Equivalent to ComponentWillMount in class components. Renders executes when the component has finished rendering
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  if (loading) return <Loading />;
  else
    return (
      <body>
        <DataProvider>
          <Header />
          <Main />
          <Footer />
        </DataProvider>
      </body>
    );
}

export default App;
