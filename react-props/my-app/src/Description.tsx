// declare type to make our code safer
// we can use interface
type Props = {
  description: string;
};

export function Description(props: Props) {
  return <p>{props.description}</p>;
}
