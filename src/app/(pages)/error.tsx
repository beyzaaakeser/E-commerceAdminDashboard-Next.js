'use client';

type Props = {
  error: Error;
  retry: () => void;
};

const Error = ({ error, retry }: Props) => {
  return (
    <div className="flex flex-col items-center mt-10 ">
      <div className="bg-red-500/30 p-5 px-10 rounded-md text-lg">
        <h1>Sorry, an error occurred.</h1>
        <h1>{error.message}</h1>
      </div>
      <button
        onClick={retry}
        className="mt-5 border py-1 px-4 shadow hover:bg-gray-300/40"
      >
        Try Again
      </button>
    </div>
  );
};

export default Error;
