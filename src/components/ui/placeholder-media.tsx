import { cn } from "@/lib/utils";

type PlaceholderMediaProps = {
  className?: string;
  label?: string;
};

export function PlaceholderMedia({ className, label }: PlaceholderMediaProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "flex items-center justify-center overflow-hidden bg-placeholder text-sm text-black",
        className,
      )}
    >
      {label ?? null}
    </div>
  );
}
