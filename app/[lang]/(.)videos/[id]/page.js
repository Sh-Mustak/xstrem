import Modal from "@/components/Modal";
import VideoDetailsModal from "@/components/videoDetailsModal";

function VidoeModal({ params }) {
  const { id } = params;
  return (
    <div>
      <Modal>
        <VideoDetailsModal id={id} />
      </Modal>
    </div>
  );
}

export default VidoeModal;
