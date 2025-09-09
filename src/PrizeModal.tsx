import Rodal from "rodal";
import "rodal/lib/rodal.css";

const PrizeModal = ({
  visible,
  onClose,
  prize,
}: {
  visible: boolean;
  onClose: () => void;
  prize: string;
}) => {
  return (
    <Rodal
      visible={visible}
      onClose={onClose}
      animation="zoom"
      customStyles={{
        borderRadius: "1rem",
        padding: "1rem",
      }}
    >
      <div className="p-4 text-center">
        <h2 className="text-2xl font-bold mb-4">🎉 Congratulations! 🎉</h2>
        <p className="text-lg mb-6">
          You have won:{" "}
          <span className="font-semibold text-green-600">{prize}</span>
        </p>
        <button
          onClick={onClose}
          className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
        >
          Close
        </button>
      </div>
    </Rodal>
  );
};

export default PrizeModal;
