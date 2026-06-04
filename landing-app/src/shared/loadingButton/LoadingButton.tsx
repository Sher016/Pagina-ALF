import './LoadingButton.css';

interface Props {
  loading: boolean;
  label: string;
  loadingLabel?: string;
}

export function LoadingButton({ loading, label, loadingLabel = 'Enviando...' }: Props) {
  return (
    <button type="submit" className="loading-btn" disabled={loading}>
      {loading ? (
        <>
          <span className="loading-spinner" />
          {loadingLabel}
        </>
      ) : label}
    </button>
  );
}