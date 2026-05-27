'use client';

import { useState } from 'react';

type PaperViewerProps = {
  src: string;
  title: string;
  heading?: string;
};

export default function PaperViewer({
  src,
  title,
  heading = 'Research Paper',
}: PaperViewerProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="mt-12" aria-labelledby="paper-viewer-heading">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <h2
          id="paper-viewer-heading"
          className="font-serif text-xl font-medium text-ink md:text-2xl"
        >
          {heading}
        </h2>

        <div className="flex flex-wrap items-center gap-5 text-sm font-medium">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="text-ink transition-colors hover:text-accent"
          >
            {expanded ? 'Collapse' : 'Expand'}
            <span aria-hidden="true" className="ml-1">
              {expanded ? '↑' : '↓'}
            </span>
          </button>
          <a
            href={src}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${title} — open paper in a new tab`}
            className="text-ink transition-colors hover:text-accent"
          >
            Open
            <span aria-hidden="true" className="ml-1">↗</span>
          </a>
          <a
            href={src}
            download
            aria-label={`${title} — download paper`}
            className="text-ink transition-colors hover:text-accent"
          >
            Download
            <span aria-hidden="true" className="ml-1">↓</span>
          </a>
        </div>
      </div>

      <div
        className="mt-4 overflow-hidden rounded-lg bg-accent-soft/30 ring-1 ring-rule transition-[height] duration-300 ease-out"
        style={{ height: expanded ? '90vh' : '70vh' }}
      >
        <iframe
          src={`${src}#view=FitH&toolbar=1&navpanes=0`}
          title={`${title} — research paper`}
          className="h-full w-full"
        />
      </div>

      <p className="mt-2 text-xs text-ink-muted">
        Can&rsquo;t see the paper inline?{' '}
        <a
          href={src}
          target="_blank"
          rel="noreferrer noopener"
          className="underline underline-offset-2 hover:text-accent"
        >
          Open it in a new tab
        </a>
        .
      </p>
    </section>
  );
}
