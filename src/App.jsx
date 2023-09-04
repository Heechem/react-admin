import { Route, Routes } from 'react-router-dom';
import Topbar from './scenes/global/Topbar';
import { colorModeContext, useMode } from './them';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Dashboard from './scenes/dashboard';
import SideBar from './scenes/global/Sidebar';
import Team from './team/Team';
import Contacts from './scenes/contacts/Contacts';
// import Team from './scenes/team';
// import Invoices from './scenes/invoices';

// import Form from './scenes/form';
// import Pie from './scenes/pie';
// import Line from './scenes/line';
// import FAQ from './scenes/faq';
// import Bar from './scenes/bar';
// import Geography from './scenes/geography';
// import Calendar from './scenes/calendar';

function App() {
  const [theme, colorMode] = useMode();
  return (
    <colorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route
                path="/"
                element={<Dashboard />}
              />
              <Route
                path="team"
                element={<Team />}
              />
              <Route
                path="contacts"
                element={<Contacts />}
              />

              {/* <Route
                path="/form"
                element={<Form />}
              /> */}
              {/* <Route
                path="pie"
                element={<Pie />}
              /> */}
              {/* <Route
                path="bar"
                element={<Bar />}
              /> */}

              {/* <Route
                path="line"
                element={<Line />}
              /> */}
              {/* <Route
                path="faq"
                element={<FAQ />}
              /> */}
              {/* <Route
                path="geography"
                element={<Geography />}
              /> */}
              {/* <Route
                path="calendar"
                element={<Calendar />}
              /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </colorModeContext.Provider>
  );
}

export default App;
