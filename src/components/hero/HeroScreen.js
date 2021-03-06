import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom"
import { getHeroById } from "../../selectors/getHeroById";

const imgPath = require.context('../../assets', true);

export const HeroScreen = () => {

  const { id } = useParams();
  const hero = useMemo(() => getHeroById( id ) , [ id ]); 
  
  const navigate = useNavigate();
  
  const handleReturn = () => {
    navigate(-1);
  };

  if (!hero) {
    return <Navigate to={ `${process.env.PUBLIC_URL}/` } />;
  }

  // const imgPath = `./assets/${ hero.id }.jpg`; assets en public

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img src={ imgPath(`./${ hero.id }.jpg`) } alt={ hero.superhero } className="img-thumbnail animate__animated animate__fadeInLeft" />
      </div>
      <div className="col-8 animate__animated animate__fadeInLeft">
          <h3>{ hero.superhero }</h3>
          <ul className="list-group list-group-flush">
              <li className="list-group-item"><b>Alter ego: </b>{ hero.alter_ego }</li>
              <li className="list-group-item"><b>Publisher: </b>{ hero.publisher }</li>
              <li className="list-group-item"><b>Primera aparición: </b>{ hero.first_appearance }</li>
          </ul>
          <h5 className="mt-3">Characters</h5>
          <p>{ hero.characters }</p>

          <button 
            className="btn btn-outline-info"
            onClick={ handleReturn }
            >Back</button>          

      </div>
    </div>
  )
}
