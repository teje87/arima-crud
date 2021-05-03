import "./App.css";
/* External */
import { IconButton, Dialog } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { StylesProvider } from "@material-ui/core/styles";

/* Internal */
import { EgurreLogo } from "./common/EgurreLogo";
import { useGym } from "./hooks/useGym";
import GymForm from "./gyms/components/GymForm";
import GymCardList from "./gyms/components/GymCardList";
import { MainContainer } from "./common/MainContainer";
import { MainContentContainer } from "./common/MainContentContainer";
import { ThemeProvider } from "styled-components";
import { theme } from './styles/theme'

function App() {
  const {
    modal,
    paginationCount = 0,
    setModal,
    setPage,
    gymCardListProps,
    gymFormProps,
    handleNew,
  } = useGym();

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <MainContainer>
          {/* Modal  */}
          <Dialog open={modal} onClose={() => setModal(false)}>
            <GymForm gymFormProps={gymFormProps}></GymForm>
          </Dialog>
          {/* Main view */}

          <MainContentContainer>
            <EgurreLogo />

            <IconButton onClick={() => handleNew()}>
              <AddCircleIcon />
            </IconButton>

            <GymCardList gymCardListProps={gymCardListProps}></GymCardList>

            <Pagination
              onChange={(event, page) => setPage(page)}
              styles={{ marginTop: 50 }}
              count={paginationCount}
              variant="outlined"
            />
          </MainContentContainer>
        </MainContainer>
        </ThemeProvider>
    </StylesProvider>
  );
}

export default App;
