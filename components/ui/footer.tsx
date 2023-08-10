import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div className="gap-8 py-8 md:py-12 border-t border-gray-200">
          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4">
            Thanks to{" "}
            <Link
              href={"https://github.com/cruip/tailwind-landing-page-template"}
            >
              Cruip.com
            </Link>{" "}
            that create this awesome web template
          </div>
        </div>
      </div>
    </footer>
  );
}
