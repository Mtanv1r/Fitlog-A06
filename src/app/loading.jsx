
const Loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="flex flex-col items-center">

        {/* Logo */}
        <div className="mb-8 flex items-center gap-2">
          <img
            src="/Img.png"
            alt="FitLog"
            className="h-10 w-auto animate-pulse"
          />

          <span className="text-2xl font-bold tracking-[0.2em]">
            FITLOG
          </span>
        </div>

        {/* Smooth Loader */}
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-zinc-800 border-t-white" />

        {/* Text */}
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
          Loading
        </p>

      </div>
    </div>
  );
};

export default Loading;
