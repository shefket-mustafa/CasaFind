import { Link } from "react-router";
import LegalLayout from "./LegalLayout";

export default function Sitemap() {
  return (
    <LegalLayout title="Sitemap" updated="August 19, 2025">
      <nav aria-label="Sitemap">
        <ul className="grid sm:grid-cols-2 gap-3 list-none p-0">
          {/* Top-level */}
          <li><Link className="text-blue-600 hover:underline" to="/">Home</Link></li>
          <li><Link className="text-blue-600 hover:underline" to="/catalog">Catalog</Link></li>
          <li><Link className="text-blue-600 hover:underline" to="/agents">Agents</Link></li>
          <li><Link className="text-blue-600 hover:underline" to="/contact">Contact</Link></li>

          {/* Legal */}
          <li><Link className="text-blue-600 hover:underline" to="/legal/terms">Terms of Service</Link></li>
          <li><Link className="text-blue-600 hover:underline" to="/legal/privacy">Privacy Policy</Link></li>
          <li><Link className="text-blue-600 hover:underline" to="/legal/ccpa">CCPA Privacy Policy</Link></li>
          <li><Link className="text-blue-600 hover:underline" to="/legal/disclaimer">Legal Disclaimer</Link></li>
        </ul>
      </nav>
    </LegalLayout>
  );
}
