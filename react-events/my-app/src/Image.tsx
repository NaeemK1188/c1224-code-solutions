import './Image.css';

type Props = {
  src: string;
};
// {src} is the property name passed by <image function in the App()
export function Image({ src }: Props) {
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        {/* only displays any image passed by App() */}
        <img className="image-fill" src={src} alt="space-image" />
      </div>
    </div>
  );
}
