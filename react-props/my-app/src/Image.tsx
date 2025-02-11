import './Image.css';

type Prop = {
  src: string;
};

// or (prop:Prop)
// or using destructuring
export function Image({ src }: Prop) {
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img className="image-fill" src={src} alt="space-image" />
        {/* or use src={prop.src} */}
      </div>
    </div>
  );
}
