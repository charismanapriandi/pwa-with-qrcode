import './Snackbar.css';

interface SnackbarProps {
  message: string;
  show: boolean;
}

// Snackbar for show error
export default function Snackbar({ message, show }: SnackbarProps) {
  return (
    <div className={`Snackbar-root ${show ? 'Snackbar-show' : ''}`}>
      {message}
    </div>
  )
}