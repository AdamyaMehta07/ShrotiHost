"use client";

import { useId, useState } from "react";
import { AlertCircle, ExternalLink, Search } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { domainRegisterUrl } from "@/data/domains";
import { parseDomainQuery } from "@/lib/domain-utils";

// Live site ke search box ke 5 extensions
const searchExtensions = [".com", ".in", ".net", ".org", ".store"];

// Search ki teen halat: kuch nahi, galti, ya portal pe bhejne ke liye tayyar
type SearchState =
  | { status: "idle" }
  | { status: "error"; message: string }
  | { status: "ready"; domain: string };

export function DomainSearch() {
  const [query, setQuery] = useState("");
  const [ext, setExt] = useState(".com");
  const [state, setState] = useState<SearchState>({ status: "idle" });
  const inputId = useId();
  const selectId = useId();
  const errorId = useId();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = parseDomainQuery(query, ext);
    setState(result.ok ? { status: "ready", domain: result.domain } : { status: "error", message: result.error });
  }

  // Kuch badla to purana result hata do, warna purana naam dikhta rahega
  function resetResult() {
    if (state.status !== "idle") setState({ status: "idle" });
  }

  const fieldClass =
    "w-full rounded-(--radius-control) border border-line bg-white px-4 py-2.5 text-ink placeholder:text-ink-faint";

  return (
    <div className="rounded-(--radius-card) border border-line bg-white p-6 shadow-sm">
      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3 sm:flex-row sm:items-start">
        <div className="flex-1">
          <label htmlFor={inputId} className="mb-1 block text-sm font-medium text-ink">
            Domain name
          </label>
          <input
            id={inputId}
            type="text"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              resetResult();
            }}
            placeholder="yourbrand"
            autoComplete="off"
            spellCheck={false}
            aria-invalid={state.status === "error"}
            aria-describedby={state.status === "error" ? errorId : undefined}
            className={fieldClass}
          />
        </div>

        <div className="sm:w-36">
          <label htmlFor={selectId} className="mb-1 block text-sm font-medium text-ink">
            Extension
          </label>
          <select
            id={selectId}
            value={ext}
            onChange={(event) => {
              setExt(event.target.value);
              resetResult();
            }}
            className={fieldClass}
          >
            {searchExtensions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:pt-6">
          <Button type="submit" className="w-full sm:w-auto">
            <Search size={16} aria-hidden="true" />
            Search domains
          </Button>
        </div>
      </form>

      <p className="mt-2 text-xs text-ink-faint">
        If you type a full name such as yourbrand.in, the extension menu is ignored.
      </p>

      {/* Galti ya result yahan aata hai. aria-live se screen reader bhi bol deta hai */}
      <div aria-live="polite" className="mt-4">
        {state.status === "error" && (
          <p id={errorId} className="flex items-start gap-2 text-sm font-medium text-danger">
            <AlertCircle size={18} aria-hidden="true" className="mt-0.5 shrink-0" />
            {state.message}
          </p>
        )}

        {state.status === "ready" && (
          <div className="rounded-(--radius-card) bg-brand-50 p-4">
            <p className="font-semibold text-ink">
              Ready to check <span className="text-brand-700">{state.domain}</span>
            </p>
            <p className="mt-1 text-sm text-ink-soft">
              Availability is checked on our secure portal. This page never shows whether a name is
              available.
            </p>
            <div className="mt-3">
              <Button href={`${domainRegisterUrl}&query=${encodeURIComponent(state.domain)}`}>
                Check availability on the portal
                <ExternalLink size={16} aria-hidden="true" />
              </Button>
            </div>
          </div>
        )}
      </div>

      <p className="mt-4 border-t border-line pt-4 text-xs text-ink-faint">
        Demo search: this page only validates the name you type and hands it to the secure portal.
        It does not check availability itself, and nothing is registered or ordered here.
      </p>
    </div>
  );
}