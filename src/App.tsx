import React from 'react';
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Layout from './components/layout/Layout';

import Stake from './components/Stake';
import Claim from './components/Claim';
import Lock from './components/Lock';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/stake" element={<Stake />} />
        <Route path="/claim" element={<Claim />} />
        <Route path="/lock" element={<Lock />} />
        <Route
          path="*"
          element={<Navigate to="/stake" replace />}
        />
      </Routes>
    </Layout>

  );
}

export default App;
