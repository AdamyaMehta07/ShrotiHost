import { Button } from "@/components/ui/Button";
import type { ContactChannel } from "@/types/contact";

export function ChannelCard({ channel }: { channel: ContactChannel }) {
  return (
    <article className="flex flex-col rounded-(--radius-card) border border-line bg-white p-6">
      <h3 className="text-lg font-bold text-ink">{channel.name}</h3>
      {channel.description && <p className="mt-2 flex-1 text-sm text-ink-soft">{channel.description}</p>}
      <div className={channel.description ? "mt-5" : "mt-auto pt-5"}>
        <Button href={channel.href} variant="secondary">
          {channel.actionLabel}
        </Button>
      </div>
    </article>
  );
}