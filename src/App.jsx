import { Route, Routes } from 'react-router-dom';
import Topbar from './scenes/global/Topbar';
import { colorModeContext, useMode } from './them';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Dashboard from './scenes/dashboard';
import SideBar from './scenes/global/Sidebar';
import Team from './team/Team';
import Contacts from './scenes/contacts/Contacts';
import Invoices from './scenes/invoices/Invoices';
import Form from './scenes/form/FormComponent';
import Calendar from './scenes/calendar/Calendar';
import Faq from './scenes/faq/Faq';
import BarChart from './components/BarChart';
import Bar from './scenes/bar/Bar';
import Pie from './scenes/pie/Pie';
import Line from './scenes/Line/Line';
import Geography from './scenes/geography/Geography';

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
              <Route
                path="invoices"
                element={<Invoices />}
              />

              <Route
                path="/form"
                element={<Form />}
              />
              <Route
                path="pie"
                element={<Pie />}
              />
              <Route
                path="bar"
                element={<Bar />}
              />

              <Route
                path="line"
                element={<Line />}
              />
              <Route
                path="faq"
                element={<Faq />}
              />
              <Route
                path="geography"
                element={<Geography />}
              />
              <Route
                path="calendar"
                element={<Calendar />}
              />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </colorModeContext.Provider>
  );
}

export default App;
