

export const PromptSkeleton = () => {
  return (
    <div className="space-y-10 animate-pulse">

      {[1, 2, 3].map((section) => (
        <div key={section}>

          {/* Header */}
          <div className="flex items-center justify-between mb-5">
            <div>
              <div className="h-7 w-48 bg-gray-200 rounded-xl mb-2"></div>
              <div className="h-4 w-72 bg-gray-100 rounded-lg"></div>
            </div>

            <div className="h-10 w-24 bg-gray-200 rounded-2xl"></div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {[1, 2, 3, 4].map((card) => (
              <div
                key={card}
                className="bg-white border border-gray-100 rounded-[28px] overflow-hidden shadow-sm"
              >
                <div className="aspect-[4/5] bg-gray-200"></div>

                <div className="p-4 space-y-3">

                  <div className="h-5 w-3/4 bg-gray-200 rounded-lg"></div>

                  <div className="space-y-2">
                    <div className="h-3 bg-gray-100 rounded"></div>
                    <div className="h-3 bg-gray-100 rounded w-5/6"></div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <div className="h-8 w-20 bg-gray-200 rounded-full"></div>
                    <div className="h-8 w-16 bg-gray-100 rounded-full"></div>
                  </div>

                </div>
              </div>
            ))}

          </div>

        </div>
      ))}

    </div>
  );
};