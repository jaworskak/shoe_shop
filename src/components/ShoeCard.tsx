import { ShoeCardType } from "../types";

function ShoeCard({ imgURL, changeBigShoeImage, bigShoeImg }: ShoeCardType) {
  const handleClick = () => {
    if (bigShoeImg !== imgURL) {
      changeBigShoeImage(imgURL);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === imgURL ? "border-coral-red" : "border-transparent"
      } cursor-pointer max-sm:flex-1 hover:scale-125`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl msx-sm:p-4">
        <img
          src={imgURL.thumbnail}
          alt="Shoe"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
}

export default ShoeCard;
