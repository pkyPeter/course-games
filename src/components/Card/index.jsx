import classNames from "classnames";
import CardImg from "assets/music.png";

const imageBase = process.env.NODE_ENV === "development" ? "" : "/course-games";

const Card = ({ flipped, over, imgSrc, name, onClick, onClose, onRemove }) => {
  const clickHandler = (e) => {
    onClick(e, name);
  };

  return (
    <div
      className={classNames("flip-card w-[12.5rem] h-[12.5rem] bg-transparent rounded-md	overflow-hidden shadow-md", {
        "opacity-0": over,
      })}
      onClick={clickHandler}
    >
      <div
        className={classNames(
          "flip-card-inner relative w-full h-full text-center transition-transform	duration-[800ms] transform-style-3d",
          {
            "rotateY-180": flipped,
          }
        )}
      >
        <div className="flip-card-front rounded-md absolute w-full h-full backface-hidden">
          <img src={imageBase + CardImg} alt="Card" />
        </div>
        <div className="flip-card-back rounded-md absolute w-full h-full backface-hidden rotateY-180">
          <img src={imageBase + imgSrc} alt="樂器" />
          <div className="flex justify-center gap-4 absolute bottom-3 w-full">
            <button
              className="rounded border text-main-green px-1.5 py-1 border-main-green bg-white hover:bg-main-green-opacity-6 hover:text-white hover:border-white"
              onClick={(e) => {
                e.stopPropagation();
                onRemove(e, name);
              }}
            >
              答對囉
            </button>
            <button
              className="rounded border text-main-green px-1.5 py-1 border-main-green bg-white hover:bg-main-green-opacity-6 hover:text-white hover:border-white"
              onClick={(e) => {
                e.stopPropagation();
                onClose(e, name);
              }}
            >
              答錯囉
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
