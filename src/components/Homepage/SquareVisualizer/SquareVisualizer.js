import { Border, Wrapper } from "./style";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SquareVisualizer = ({ data }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate(`/articles/${e.target.id}`);
  };

  return (
    <>
      <Wrapper>
        {data.map((thumbnail) => {
          return (
            <Border>
              <div className="square">
                <div className="image">
                  <img src={thumbnail.thumbnail} alt="" />
                </div>
              </div>
              <div className="container">
                <Link to={`articles/${thumbnail.id}`}>
                  <h3>{thumbnail.titolo}</h3>
                </Link>
                <p>{thumbnail.autore} &#8226;</p>
              </div>
            </Border>

            // <>
            //   <Grid item xs={4} key={JSON.stringify(thumbnail)}>
            //     <div className="container">
            //       <Border>
            //         <div className="square">
            //           <div className="image">
            //             <img src={thumbnail.thumbnail} alt="fuck" />
            //           </div>
            //
            //         </div>
            //       </Border>
            //     </div>
            //   </Grid>
            // </>
          );
        })}
      </Wrapper>
    </>
  );
};

export default SquareVisualizer;
