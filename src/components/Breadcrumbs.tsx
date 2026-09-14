import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import JsonLd from "@/components/JsonLd";

export interface BreadcrumbItem {
  name: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const schemaItems = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://shopatrip.in",
    },
    ...items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 2,
      name: item.name,
      item: item.href ? `https://shopatrip.in${item.href}` : undefined,
    })),
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: schemaItems,
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-6 max-w-7xl mx-auto w-full">
        <ol className="flex items-center flex-wrap gap-1.5 text-xs text-slate-500">
          <li className="flex items-center">
            <Link
              href="/"
              className="inline-flex items-center text-slate-600 hover:text-pine-800 transition-colors"
            >
              <Home className="w-3.5 h-3.5 mr-1" />
              <span>Home</span>
            </Link>
          </li>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={index} className="flex items-center">
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 mx-1 flex-shrink-0" />
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="text-slate-600 hover:text-pine-800 transition-colors font-medium truncate max-w-[200px] sm:max-w-none"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-pine-900 font-semibold truncate max-w-[240px] sm:max-w-none" aria-current="page">
                    {item.name}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
