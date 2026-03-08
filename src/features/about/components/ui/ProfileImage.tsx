import ProfileImg from "../../../../assets/images/Profile_Framzy.webp";

export default function ProfileImage() {
  return (
    <img
      className="w-full h-auto"
      src={ProfileImg}
      alt="profile image"
      fetchPriority="high"
      decoding="async"
    />
  );
}
