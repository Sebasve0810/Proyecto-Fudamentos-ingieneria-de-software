export default function Loader({ size = 6 }) {
  return (
    <div className="flex items-center justify-center p-6">
      <div
        style={{ width: size * 4, height: size * 4 }}
        className="animate-spin rounded-full border-4 border-t-blue-600 border-gray-200"
      />
    </div>
  );
}

