export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-clean text-center text-sm text-gray-700 py-6 px-4 border-t border-gray-300">
      <p>
        &copy; {year} <span className="font-semibold text-vermilion">TechSolutions</span>. Todos los derechos reservados.
      </p>
    </footer>
  );
}
