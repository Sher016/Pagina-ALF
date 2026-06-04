import './SuccessModal.css';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function SuccessModal({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={e => e.stopPropagation()}>
        <div className="modal-icon">✓</div>
        <h3 className="modal-title">¡Mensaje enviado!</h3>
        <p className="modal-text">
          Recibimos tu consulta. Un asesor de ALF te contactará pronto.
        </p>
        <button className="modal-btn" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}