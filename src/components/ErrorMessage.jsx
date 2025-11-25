export default function ErrorMessage({ children }) {
  if (!children) return null;

  return (
    <div className="bg-red-50 text-red-700 border border-red-200 p-3 rounded-xl text-sm">
      {children}
    </div>
  );
}
