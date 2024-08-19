import { useAuth0 } from "@auth0/auth0-react";

type CommentFormProps = {
  text: string;
  setText: Function;
  onSubmit: (e: React.FormEvent) => Promise<void>;
};

export default function CommentForm({
  text,
  setText,
  onSubmit,
}: CommentFormProps) {
  const { isAuthenticated, logout, loginWithPopup } = useAuth0();

  return (
    <form onSubmit={onSubmit}>
      <textarea
        className="flex w-full max-h-40 p-3 rounded resize-y bg-gray-200 text-gray-900 placeholder-gray-500"
        rows={2}
        placeholder={
          isAuthenticated
            ? `What are your thoughts?`
            : "Please login to leave a comment"
        }
        onChange={(e) => setText(e.target.value)}
        value={text}
        disabled={!isAuthenticated}
      />

      <div className="flex items-center mt-4">
        {isAuthenticated ? (
          <div className="flex items-center space-x-6">
            <button
              className="bg-teal-500 hover:bg-teal-700 active:bg-teal-800 px-4 py-2 w-36 rounded-md text-white transition-colors duration-300"
              type="submit"
              disabled={!text}
            >
              Send
            </button>
            <button
              className="text-gray-900 px-4 py-2 w-36 rounded-md hover:bg-gray-100 transition-colors duration-300"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </button>
          </div>
        ) : (
          <button
            className="text-gray-900 px-4 py-2 w-36 rounded-md hover:bg-gray-100 transition-colors duration-300"
            onClick={() => loginWithPopup()}
          >
            Log In
          </button>
        )}
      </div>
    </form>
  );
}
