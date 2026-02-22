export default function SectionContainer({ id, title, subtitle, children, className = '' }) {
  return (
    <section id={id} className={`mx-auto w-full max-w-6xl px-4 py-12 md:px-6 md:py-16 ${className}`}>
      {(title || subtitle) && (
        <div className="mb-8">
          {title ? <h2 className="section-title">{title}</h2> : null}
          {title ? <div className="mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-amber-300 to-sky-300 dark:from-amber-300 dark:to-cyan-300" /> : null}
          {subtitle ? <p className="section-subtext">{subtitle}</p> : null}
        </div>
      )}
      {children}
    </section>
  );
}
