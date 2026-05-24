type SectionHeadingProps = {
  id: string;
  eyebrow?: string;
  title: string;
  className?: string;
};

export default function SectionHeading({ id, eyebrow, title, className = '' }: SectionHeadingProps) {
  return (
    <div className={`mb-10 md:mb-14 ${className}`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className="font-serif text-3xl font-medium leading-tight text-ink md:text-4xl lg:text-[2.75rem]"
      >
        {title}
      </h2>
      <span aria-hidden="true" className="mt-5 block h-px w-16 bg-accent" />
    </div>
  );
}
