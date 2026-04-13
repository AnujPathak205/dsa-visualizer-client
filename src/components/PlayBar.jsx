import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  RotateCcw,
  X,
} from "lucide-react";

export default function PlayBar({isPlaying,setIsPlaying,step,setStep,speed,setSpeed,totalSteps,onQuit}) {
  return (
    <div className="
        border-t border-slate-200/70 dark:border-slate-700/60
        bg-white/80 dark:bg-slate-900/80
        backdrop-blur-md
        px-3 py-2
      ">

            {/* 🔹 Progress Bar */}
            <input
            type="range"
            min={0}
            max={Math.max(totalSteps - 1, 0)}
            value={step}
            onChange={(e) => {
                setIsPlaying(false);
                setStep(Number(e.target.value));
            }}
            className="
                w-full h-1 rounded-lg appearance-none cursor-pointer
                bg-slate-300 dark:bg-slate-700
                accent-indigo-500 mb-2
            "
            />

            {/* 🔹 Controls Row (Single Line Always) */}
            <div className="flex items-center justify-between gap-2 text-xs text-slate-600 dark:text-slate-300">

            {/* 🔸 LEFT: Speed */}
            <div className="flex items-center gap-2 min-w-[90px]">
                <span className="text-[11px] whitespace-nowrap">
                {(2000 / speed).toFixed(1)}x
                </span>

                <input
                type="range"
                min={200}
                max={2000}
                step={100}
                value={speed}
                onChange={(e) => setSpeed(Number(e.target.value))}
                className="
                    w-16 h-1 rounded-lg appearance-none cursor-pointer
                    bg-slate-300 dark:bg-slate-700
                    accent-indigo-500
                "
                />
            </div>

            {/* 🔸 CENTER: Controls */}
            <div className="flex items-center gap-1">

                <button
                onClick={() => {
                    setIsPlaying(false);
                    setStep(0);
                }}
                className="icon-btn-sm"
                >
                <RotateCcw size={14} />
                </button>

                <button
                onClick={() => {
                    if(totalSteps === 0) return;
                    setIsPlaying(false);
                    setStep((s) => Math.max(s - 1, 0));
                }}
                className="icon-btn-sm"
                >
                <SkipBack size={14} />
                </button>

                <button
                onClick={() => setIsPlaying((p) => !p)}
                className="
                    flex items-center justify-center
                    w-8 h-8 rounded-full
                    bg-indigo-500 text-white
                    hover:bg-indigo-600 active:scale-95
                    transition
                "
                >
                {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                </button>

                <button
                onClick={() => {
                    if(totalSteps === 0) return;
                    setIsPlaying(false);
                    setStep((s) =>
                    Math.min(s + 1, totalSteps - 1)
                    );
                }}
                className="icon-btn-sm"
                >
                <SkipForward size={14} />
                </button>
            </div>

            {/* 🔸 RIGHT: Step + Close */}
            <div className="flex items-center gap-2 min-w-[80px] justify-end">

                <span className="text-[11px] whitespace-nowrap">
                {step+1}/{totalSteps}
                </span>

                <button
                onClick={onQuit}
                className="
                    flex items-center justify-center
                    w-7 h-7 rounded-md
                    bg-slate-200 dark:bg-slate-700
                    hover:bg-red-500 hover:text-white
                    transition
                "
                >
                <X size={14} />
                </button>
            </div>
            </div>
        </div>
  )
}
