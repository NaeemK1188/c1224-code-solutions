type Props = {
  label: string;
};
export function Button({ label }: Props) {
  function handleClick() {
    console.log('Button was clicked');
  }

  return <button onClick={handleClick}>{label}</button>;
}
