const Preloader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-background text-foreground flex-col gap-6 px-4 text-center">


      <div className="w-16 h-16 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>

      <div>
        <h1 className="text-2xl font-semibold">Welcome to My Portfolio</h1>
        <p className="text-sm mt-2 animate-pulse">
          Preparing your experience... Please wait a moment.
        </p>
      </div>
    </div>
  );
};

export default Preloader;
