import Footer from "./footer";
import LanguageBar from "./language-bar";

export default ({ preview, children }) => (
  <div className="min-h-screen bg-slate-50">
    <LanguageBar />
    <main>{children}</main>
    <Footer />
  </div>
);

