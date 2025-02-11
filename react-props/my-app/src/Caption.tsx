type Prop = {
  caption: string;
};

export function Caption({ caption }: Prop) {
  return <h3>{caption}</h3>;
}
