export default function LinkLandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border border-gray-200 m-4 rounded-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
            <span className="text-2xl font-semibold text-header">Stellar Certification Protocol</span>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-3">
            <button className="px-6 py-2.5 text-sm font-medium text-gray-700 bg-gray-50 rounded-full hover:bg-gray-200 transition-colors">
              For businesses
            </button>
            <button className="px-6 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              Log in
            </button>
            <button className="px-6 py-2.5 text-sm font-medium text-white bg-black rounded-full hover:bg-gray-800 transition-colors">
              Sign up
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-block">
              <span className="px-4 py-2 text-sm font-medium bg-white border border-gray-200 rounded-full">
                Built by <span className="font-semibold">stripe</span>
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight text-balance">
              The wallet designed for the internet
            </h1>

            {/* Subheading */}
            <p className="text-xl text-gray-700 leading-relaxed">
              Link helps you pay quickly and securely with your preferred
              payment methods
            </p>

            {/* CTA Card */}
            <div className="inline-block">
              <button className="group px-6 py-4 bg-gray-50 hover:bg-gray-100 rounded-2xl transition-colors flex items-center gap-3">
                <span className="text-base font-medium">
                  You can now shop with Link on ChatGPT
                </span>
                <svg
                  className="w-5 h-5 text-gray-700 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 7l9.586 9.586M17 7v10H7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative h-[600px] bg-gray-100 rounded-3xl flex items-center justify-center">
            {/* Floating Link Logo */}
            <div className="bg-green-500 rounded-full px-8 py-4 flex items-center gap-3 shadow-lg">
              <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              <span className="text-3xl font-semibold text-green-900">
                link
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}