const Loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="flex flex-col items-center">

        {/* Spinner */}
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-zinc-800 border-t-white" />

        {/* Text */}
        <p className="mt-6 text-sm font-bold uppercase tracking-[0.25em] text-zinc-400">
          Loading workouts...
        </p>

        <p className="mt-2 text-xs text-zinc-600">
          Preparing your plan
        </p>

      </div>
    </div>
  );
};

export default Loading;