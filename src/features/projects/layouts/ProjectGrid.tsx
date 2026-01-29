export default function ProjectGrid(openDisplay: boolean) {
  if (!openDisplay) return null;

  return (
    <div className={`${openDisplay ? "" : "hidden"}`}>
      <h1 className="text-white">Project Grid Component</h1>
    </div>
  );
}
