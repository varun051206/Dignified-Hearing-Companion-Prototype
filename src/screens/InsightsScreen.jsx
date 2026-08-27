import React from 'react';

export const InsightsScreen = () => {
  return (
    <div className="flex-1 px-5 md:px-12 py-6 max-w-7xl mx-auto w-full md:pl-64">
      <header className="mb-6">
        <h1 className="font-headline-lg text-headline-lg font-semibold text-on-surface mb-1">
          Listening Insights
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Your personal activity dashboard.
        </p>
      </header>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Daily Listening Time (Primary Metric) */}
        <div className="md:col-span-8 bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-5 flex flex-col shadow-xs">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-label-lg text-label-lg font-semibold text-on-surface">
              Daily Listening Time
            </h2>
            <span className="font-label-sm text-xs text-secondary bg-surface-container px-3 py-1 rounded-full">
              Last 7 Days
            </span>
          </div>

          <div className="flex-1 flex items-end justify-between gap-2 h-48 mt-auto pb-4 border-b border-outline-variant/30 relative">
            <div className="absolute w-full h-full flex flex-col justify-between pointer-events-none opacity-20">
              <div className="w-full border-t border-outline-variant"></div>
              <div className="w-full border-t border-outline-variant"></div>
              <div className="w-full border-t border-outline-variant"></div>
            </div>

            {/* Bar Charts */}
            <div className="flex flex-col items-center gap-2 z-10 group">
              <div className="w-8 md:w-12 bg-secondary-container group-hover:bg-primary-container transition-colors rounded-t-xs h-[60%] chart-bar"></div>
              <span className="font-label-sm text-xs text-on-surface-variant">M</span>
            </div>
            <div className="flex flex-col items-center gap-2 z-10 group">
              <div className="w-8 md:w-12 bg-secondary-container group-hover:bg-primary-container transition-colors rounded-t-xs h-[75%] chart-bar"></div>
              <span className="font-label-sm text-xs text-on-surface-variant">T</span>
            </div>
            <div className="flex flex-col items-center gap-2 z-10 group">
              <div className="w-8 md:w-12 bg-primary group-hover:bg-primary-container transition-colors rounded-t-xs h-[90%] chart-bar"></div>
              <span className="font-label-sm text-xs text-on-surface-variant font-bold">W</span>
            </div>
            <div className="flex flex-col items-center gap-2 z-10 group">
              <div className="w-8 md:w-12 bg-secondary-container group-hover:bg-primary-container transition-colors rounded-t-xs h-[65%] chart-bar"></div>
              <span className="font-label-sm text-xs text-on-surface-variant">T</span>
            </div>
            <div className="flex flex-col items-center gap-2 z-10 group">
              <div className="w-8 md:w-12 bg-secondary-container group-hover:bg-primary-container transition-colors rounded-t-xs h-[80%] chart-bar"></div>
              <span className="font-label-sm text-xs text-on-surface-variant">F</span>
            </div>
            <div className="flex flex-col items-center gap-2 z-10 group">
              <div className="w-8 md:w-12 bg-secondary-container group-hover:bg-primary-container transition-colors rounded-t-xs h-[40%] chart-bar"></div>
              <span className="font-label-sm text-xs text-on-surface-variant">S</span>
            </div>
            <div className="flex flex-col items-center gap-2 z-10 group">
              <div className="w-8 md:w-12 bg-secondary-container group-hover:bg-primary-container transition-colors rounded-t-xs h-[50%] chart-bar"></div>
              <span className="font-label-sm text-xs text-on-surface-variant">S</span>
            </div>
          </div>

          <div className="mt-3 flex justify-between items-center">
            <p className="font-body-md text-sm text-on-surface-variant">
              Avg: <span className="font-bold text-primary">12.4 hrs/day</span>
            </p>
            <p className="font-label-sm text-xs text-primary font-semibold flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">trending_up</span> +8%
            </p>
          </div>
        </div>

        {/* Secondary Metrics Column */}
        <div className="md:col-span-4 flex flex-col gap-4">
          {/* Top Environment */}
          <div className="bg-primary-container text-on-primary-container rounded-xl p-5 flex flex-col relative overflow-hidden shadow-xs">
            <h2 className="font-label-sm text-xs text-primary-fixed-dim mb-1 uppercase tracking-widest font-semibold">
              Top Environment
            </h2>
            <div className="flex items-center gap-3 mt-1">
              <span className="material-symbols-outlined text-4xl">restaurant</span>
              <div>
                <p className="font-headline-md text-headline-md font-bold">Restaurant</p>
                <p className="font-body-sm text-xs opacity-90">42% of total usage</p>
              </div>
            </div>
          </div>

          {/* Conversation Sessions */}
          <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-5 shadow-xs">
            <h2 className="font-label-sm text-xs text-secondary mb-1 uppercase tracking-widest font-semibold">
              Conversation Sessions
            </h2>
            <div className="flex items-baseline gap-2">
              <span className="font-display-lg text-display-lg text-on-surface font-bold">18</span>
              <span className="font-body-sm text-xs text-on-surface-variant">today</span>
            </div>
            <p className="font-body-sm text-xs text-on-surface-variant mt-1">
              Focus mode active for 6.2 hrs
            </p>
          </div>
        </div>

        {/* Bottom Row Metrics */}
        <div className="md:col-span-6 bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-5 shadow-xs">
          <h2 className="font-label-sm text-xs text-secondary mb-2 uppercase tracking-widest font-semibold">
            Noise Reduction Usage
          </h2>
          <div className="flex items-center gap-4">
            <div className="flex-1 bg-surface-container h-2 rounded-full overflow-hidden">
              <div className="bg-primary h-full w-[65%]"></div>
            </div>
            <span className="font-label-lg text-label-lg font-bold text-on-surface">65%</span>
          </div>
          <p className="font-body-sm text-xs text-on-surface-variant mt-2">
            Active suppression in high-decibel zones.
          </p>
        </div>

        <div className="md:col-span-6 bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-5 flex items-center justify-between shadow-xs">
          <div>
            <h2 className="font-label-sm text-xs text-secondary mb-1 uppercase tracking-widest font-semibold">
              Battery Performance
            </h2>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-xl">battery_very_low</span>
              <span className="font-headline-md text-headline-md font-bold text-on-surface">16.5 hrs</span>
            </div>
            <p className="font-body-sm text-xs text-on-surface-variant mt-1">
              Projected daily runtime
            </p>
          </div>
          <div className="w-24 h-12 flex items-end gap-1">
            <div className="flex-1 bg-outline-variant/40 h-[80%] rounded-t-xs"></div>
            <div className="flex-1 bg-outline-variant/40 h-[85%] rounded-t-xs"></div>
            <div className="flex-1 bg-primary h-[70%] rounded-t-xs"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
