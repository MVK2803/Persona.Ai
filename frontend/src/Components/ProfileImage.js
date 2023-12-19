export default function ProfileImage({ imageUrl }) {
  return (
    <div className="bg-white bg-opacity-[20%] w-full h-[50%] rounded-lg flex items-center justify-center filter grayscale">
      <img src={imageUrl} className="w-full h-full rounded-lg" />
    </div>
  );
}
