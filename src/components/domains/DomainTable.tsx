"use client";

import { useId, useMemo, useState } from "react";
import { ArrowDown, ArrowUp, ChevronsUpDown } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { domainRegisterUrl } from "@/data/domains";
import { formatRupees, hasBigRenewalJump, renewalMultiple } from "@/lib/domain-utils";
import type { DomainLabel, DomainPrice } from "@/types/domains";

type SortKey = "ext" | "firstYear" | "renewal" | "transfer";
type SortDir = "asc" | "desc";

// Shuru mein kitni rows dikhani hain (live site jaisa)
const INITIAL_ROWS = 18;

const labelTone: Record<DomainLabel, "brand" | "success" | "neutral"> = {
  Sale: "brand",
  New: "success",
  Hot: "neutral",
};

// Table ke header ka sort button
function SortHeader({
  label,
  column,
  sortKey,
  sortDir,
  onSort,
}: {
  label: string;
  column: SortKey;
  sortKey: SortKey | null;
  sortDir: SortDir;
  onSort: (column: SortKey) => void;
}) {
  const active = sortKey === column;
  const ariaSort = active ? (sortDir === "asc" ? "ascending" : "descending") : "none";
  const Icon = active ? (sortDir === "asc" ? ArrowUp : ArrowDown) : ChevronsUpDown;

  return (
    <th scope="col" aria-sort={ariaSort} className="px-4 py-3 text-left">
      <button
        type="button"
        onClick={() => onSort(column)}
        className="inline-flex items-center gap-1 font-semibold hover:text-brand-700"
      >
        {label}
        <Icon size={14} aria-hidden="true" />
      </button>
    </th>
  );
}

// Price ke saath term likhta hai: "/yr" ya .ai ke liye "/2 yr"
function perTerm(domain: DomainPrice, amount: number) {
  const term = domain.termYears && domain.termYears > 1 ? `${domain.termYears} yr` : "yr";
  return `${formatRupees(amount)}/${term}`;
}

export function DomainTable({ domains }: { domains: DomainPrice[] }) {
  const [filter, setFilter] = useState("");
  const [hideBigJumps, setHideBigJumps] = useState(false);
  const [sortKey, setSortKey] = useState<SortKey | null>(null);
  const [sortDir, setSortDir] = useState<SortDir>("asc");
  const [expanded, setExpanded] = useState(false);
  const filterId = useId();

  const isFiltering = filter.trim() !== "" || hideBigJumps;

  const rows = useMemo(() => {
    // ".com" type kiya to bhi chalega, shuru ka dot hata dete hain
    const text = filter.trim().toLowerCase().replace(/^\./, "");
    // filter() nayi list deta hai, isliye neeche sort se original list nahi badalti
    let list = domains.filter((domain) => domain.ext.slice(1).includes(text));
    if (hideBigJumps) list = list.filter((domain) => !hasBigRenewalJump(domain));

    if (sortKey) {
      list.sort((a, b) => {
        const diff = sortKey === "ext" ? a.ext.localeCompare(b.ext) : a[sortKey] - b[sortKey];
        return sortDir === "asc" ? diff : -diff;
      });
    }
    return list;
  }, [domains, filter, hideBigJumps, sortKey, sortDir]);

  // Filter lagne par saare matches dikhte hain, warna shuru ki 18 rows
  const showAll = expanded || isFiltering;
  const shown = showAll ? rows : rows.slice(0, INITIAL_ROWS);

  function handleSort(column: SortKey) {
    if (sortKey === column) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortKey(column);
      setSortDir("asc");
    }
  }

  function clearFilters() {
    setFilter("");
    setHideBigJumps(false);
  }

  return (
    <div>
      {/* Filter controls */}
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="sm:w-72">
          <label htmlFor={filterId} className="mb-1 block text-sm font-medium text-ink">
            Filter extensions
          </label>
          <input
            id={filterId}
            type="search"
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
            placeholder="e.g. shop"
            autoComplete="off"
            className="w-full rounded-(--radius-control) border border-line bg-white px-4 py-2.5 text-ink placeholder:text-ink-faint"
          />
        </div>
        <label className="flex items-center gap-2 text-sm text-ink">
          <input
            type="checkbox"
            checked={hideBigJumps}
            onChange={(event) => setHideBigJumps(event.target.checked)}
            className="h-4 w-4 accent-brand-600"
          />
          Hide big renewal jumps (3x or more)
        </label>
      </div>

      <p aria-live="polite" className="mb-2 text-sm text-ink-soft">
        Showing {shown.length} of {domains.length} extensions
      </p>

      <div className="overflow-x-auto rounded-(--radius-card) border border-line bg-white">
        <table className="w-full min-w-[720px] border-collapse text-sm">
          <caption className="sr-only">Domain prices in rupees: first year, renewal and transfer</caption>
          <thead className="bg-surface-alt">
            <tr>
              <SortHeader label="Extension" column="ext" sortKey={sortKey} sortDir={sortDir} onSort={handleSort} />
              <SortHeader label="First year" column="firstYear" sortKey={sortKey} sortDir={sortDir} onSort={handleSort} />
              <SortHeader label="Renewal" column="renewal" sortKey={sortKey} sortDir={sortDir} onSort={handleSort} />
              <SortHeader label="Transfer" column="transfer" sortKey={sortKey} sortDir={sortDir} onSort={handleSort} />
              <th scope="col" className="px-4 py-3 text-left font-semibold">
                Register
              </th>
            </tr>
          </thead>
          <tbody>
            {shown.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-10 text-center text-ink-soft">
                  <p className="font-medium text-ink">No extensions match “{filter.trim()}”.</p>
                  <p className="mt-1">Try a shorter search, or clear the filters to see all of them.</p>
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="mt-4 rounded-(--radius-control) border border-brand-600 px-4 py-2 font-semibold text-brand-700 hover:bg-brand-50"
                  >
                    Clear filters
                  </button>
                </td>
              </tr>
            ) : (
              shown.map((domain) => (
                <tr key={domain.ext} className="border-t border-line">
                  <th scope="row" className="px-4 py-3 text-left font-semibold text-ink">
                    {domain.ext}
                    {domain.label && (
                      <span className="ml-2">
                        <Badge tone={labelTone[domain.label]}>{domain.label}</Badge>
                      </span>
                    )}
                  </th>
                  <td className="px-4 py-3 text-ink">{perTerm(domain, domain.firstYear)}</td>
                  <td className="px-4 py-3 text-ink">
                    {perTerm(domain, domain.renewal)}
                    {hasBigRenewalJump(domain) && (
                      <span className="ml-2">
                        <Badge tone="warning">{renewalMultiple(domain)}x first year</Badge>
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-ink">{formatRupees(domain.transfer)}</td>
                  <td className="px-4 py-3">
                    <a
                      href={domainRegisterUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-brand-700 underline hover:text-brand-900"
                    >
                      Register<span className="sr-only"> {domain.ext} on the secure portal</span>
                    </a>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {!showAll && rows.length > INITIAL_ROWS && (
        <button
          type="button"
          onClick={() => setExpanded(true)}
          className="mt-4 rounded-(--radius-control) border border-brand-600 px-5 py-2.5 text-sm font-semibold text-brand-700 hover:bg-brand-50"
        >
          Show all {domains.length} extensions
        </button>
      )}

      <p className="mt-4 text-xs text-ink-faint">
        Register opens the registration page on our secure portal, where you enter the name you
        want. Prices are in ₹ and exclude applicable taxes, calculated at checkout.
      </p>
    </div>
  );
}