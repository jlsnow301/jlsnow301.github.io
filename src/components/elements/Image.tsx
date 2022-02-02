import "../css/image.css";

interface ImageData {
  alt?: string;
  source: string;
}

export const Image: React.FC<ImageData> = (props) => {
  const { alt, source } = props;

  return <img alt={alt || "image"} className="image" src={source} />;
};
