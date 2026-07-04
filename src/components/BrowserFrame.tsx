export default function BrowserFrame({
  url,
  image,
  showBar = true,
}: {
  url?: string;
  image: string;
  showBar?: boolean;
}) {
  return (
    <div className="rounded-xl overflow-hidden border border-border">
      {showBar && (
        <div className="flex items-center gap-2 bg-[#1a1f36] px-4 py-2">
          <span className="w-3 h-3 rounded-full bg-rose"></span>
          <span className="w-3 h-3 rounded-full bg-amber"></span>
          <span className="w-3 h-3 rounded-full bg-teal"></span>
          <span className="ml-3 text-xs text-text-dim bg-bg px-3 py-1 rounded-md truncate">
            {url}
          </span>
        </div>
      )}
      <img src={image} alt="project preview" className="w-full object-cover" />
    </div>
  );
}