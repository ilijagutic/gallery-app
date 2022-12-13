import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectIsHidden } from "../store/gallery/selectors";
import { setCurrentPage } from "../store/gallery/slice";


const GalleriesList = ({ galleries }) => {

  const dispatch = useDispatch();
  const isHidden = useSelector(selectIsHidden);
 
  return (
    <div className=' m-3 text-center'>
      {galleries.length > 0 ? (
        galleries.map((gallery, index) => (
          <div key={index}>
            <h1 className="display-3">
              <Link to={`galleries/${gallery.id}`}>
                {gallery.name}
              </Link>
            </h1>
            <img
              style={{
                width: "25%",
                height: "25%",
              }}
              src={
                gallery.images[0]?.image_url
              }
              alt='picture'
            />
            <p>{gallery.description}</p>
            <span>
              Kreirao: {" "}
              <Link to={`/authors/${gallery.user_id}`}>
                {gallery.user.first_name} {gallery.user.last_name}
              </Link>{" "}
              <em>{gallery.created_at}</em>
            </span>
            <hr />
          </div>
        ))
      ) : (
        <>
          <div>Empty</div>
          <Link to="/create"> <button className="btn">Kreiraj galeriju:</button> </Link>
        </>
      )}
      {!isHidden && (
        <button
          className='btn'
          type='button'
          onClick={() => dispatch(setCurrentPage())}
        >
          More..
        </button>
      )}
    </div>
  );
}

export default GalleriesList;