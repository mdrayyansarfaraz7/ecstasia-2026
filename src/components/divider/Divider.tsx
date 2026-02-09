import PrimaryTape from "./PrimaryTape";
import AngledTape from "./AngledTape";

const Divider = () => {
  return (
    <div className="absolute w-screen overflow-hidden py-6 h-59 bg-transparent -mt-25">
      <PrimaryTape />
      <AngledTape />
    </div>
  );
};

export default Divider;
