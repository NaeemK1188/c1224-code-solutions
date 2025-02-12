type Props = {
  label: string;
  onHandleClick: () => void;
};
export function Button({ label, onHandleClick }: Props) {
  // this is the actual function returned by App()
  return <button onClick={onHandleClick}>{label}</button>;
}
