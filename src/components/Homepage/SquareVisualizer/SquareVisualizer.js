import { Border, Wrapper } from "./style";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SquareVisualizer = ({ data }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate("/articles:article=" + e.target.id);
  };

  return (
    <>
      <Wrapper>
        <Grid container spacing={30}>
          {data.map((thumbnail) => {
            return (
              <Grid item xs={3} key={JSON.stringify(thumbnail)}>
                <div className="container">
                  <Border>
                    <div className="square">
                      <div className="image">
                        <img src={thumbnail.thumbnail} alt="fuck" />
                      </div>
                      <h3 onClick={handleClick} id={thumbnail.id}>
                        {thumbnail.titolo}
                      </h3>
                      <p>
                        {thumbnail.autore} &#8226; {/*thumbnail.read_time*/}
                      </p>
                    </div>
                  </Border>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </Wrapper>
    </>
  );
};

export default SquareVisualizer;
