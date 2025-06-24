export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 text-gray-400 text-sm py-6 px-4 text-center">
      <p>
        © {new Date().getFullYear()} Nimora Digital. All rights reserved.
      </p>
    </footer>
  );
}
