interface HeadingProps {
  title: string;
  subtitle?: string;
}

export default function Heading({ title, subtitle }: HeadingProps) {
  return (
    <div className="space-y-1">
      {subtitle && (
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          {subtitle}
        </p>
      )}
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
    </div>
  );
}