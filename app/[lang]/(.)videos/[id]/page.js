import Modal from "@/components/Modal";
import VideoDetailsModal from "@/components/videoDetailsModal";

function VidoeModal({ params }) {
  const { id, lang } = params;
  return (
    <div>
      <Modal>
        <VideoDetailsModal id={id} lang={lang} />
      </Modal>
    </div>
  );
}

export default VidoeModal;
