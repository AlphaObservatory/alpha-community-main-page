
export default function Layout({ preview, children }) {
  return (
    <>
      <div className="min-h-screen bg-slate-50">
        <main>{children}</main>
      </div>
    </>
  );
}
