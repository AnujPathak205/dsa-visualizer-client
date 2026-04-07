

export default function PlayerBar({
  isPlaying,
  setIsPlaying,
  step,
  setStep,
  totalSteps,
  speed,
  setSpeed,
  onQuit
}) {
  return (
    <div
      className="
      fixed bottom-0 left-0 w-full
      border-t border-white/10
      bg-white/60 dark:bg-slate-900/60
      backdrop-blur-xl
      px-4 py-2
    "
    >
      {/* 🔥 Progress Bar */}
      <input
        type="range"
        min={0}
        max={Math.max(totalSteps - 1, 0)}
        value={step}
        onChange={(e) => {
          setIsPlaying(false);
          setStep(Number(e.target.value));
        }}
        className="progress-bar w-full mb-2"
      />

      {/* 🔥 Controls Row */}
      <div className="flex items-center justify-between">

        {/* LEFT: Speed */}
        <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
          <span>{(2000 / speed).toFixed(1)}x</span>

          <input
            type="range"
            min={200}
            max={2000}
            step={100}
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
            className="speed-bar"
          />
        </div>

        {/* CENTER: Controls */}
        <div className="flex items-center gap-2">

          {/* Restart */}
          <button
            onClick={() => {
              setIsPlaying(false);
              setStep(0);
            }}
            className="icon-btn"
          >
            <RotateCcw size={16} />
          </button>

          {/* Prev */}
          <button
            onClick={() => {
              setIsPlaying(false);
              setStep((prev) => Math.max(prev - 1, 0));
            }}
            className="icon-btn"
          >
            <SkipBack size={16} />
          </button>

          {/* 🔥 Play / Pause */}
          <button
            onClick={() => setIsPlaying((prev) => !prev)}
            className="play-btn"
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
          </button>

          {/* Next */}
          <button
            onClick={() => {
              setIsPlaying(false);
              setStep((prev) =>
                Math.min(prev + 1, totalSteps - 1)
              );
            }}
            className="icon-btn"
          >
            <SkipForward size={16} />
          </button>
        </div>

        {/* RIGHT: Step + Quit */}
        <div className="flex items-center gap-3 text-xs text-slate-600 dark:text-slate-400">
          <span>
            {step + 1}/{totalSteps}
          </span>

          <button onClick={onQuit} className="quit-btn">
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}