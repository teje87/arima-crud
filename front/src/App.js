import "./App.css";
/* External */
import { Grid, IconButton, Dialog } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import AddCircleIcon from "@material-ui/icons/AddCircle";

/* Internal */
import { EgurreLogo } from "./common/EgurreLogo";
import { useGym } from "./hooks/useGym";
import GymForm from "./gyms/components/GymForm";
import GymCardList from "./gyms/components/GymCardList";
import MainContainer from "./common/MainContainer";

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
    <div className="App">
      {/* Modal  */}
      <Dialog open={modal} onClose={() => setModal(false)}>
        <GymForm gymFormProps={gymFormProps}></GymForm>
      </Dialog>

      {/* Main view */}
      <MainContainer>
        <Grid
          container
          lg={8}
          md={8}
          direction="column"
          justify="center"
          alignItems="center"
        >
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
        </Grid>
      </MainContainer>
    </div>
  );
}

export default App;
