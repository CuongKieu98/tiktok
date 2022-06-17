import { forwardRef, useState } from "react";
import images from "~/assets/images";

const Image = forwardRef(({ src, alt,customImage = images.noimage, ...props }, ref) => {
  const [failBack, setFailBack] = useState("");
  const handleError = () => {
    setFailBack(customImage);
  };
  return (
    <img
      ref={ref}
      src={failBack || src}
      alt={alt}
      {...props}
      onError={handleError}
    />
  );
});

export default Image;
