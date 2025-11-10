export default function Footer() {
  return (
    <footer className="bg-gray-900 border-gray-900 border-t-gray-800 border-2 text-gray-400 text-center py-4">
      <p className="text-sm">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-white">Mental Master</span> — Learn Fast Math
        Calculations Easily
      </p>
    </footer>
  );
}
