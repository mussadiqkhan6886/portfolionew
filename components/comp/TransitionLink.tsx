"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React from "react";

interface TransitionLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string
  rel?: string
}

export default function TransitionLink({ href, children, className, target, rel }: TransitionLinkProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // If clicking the active page, do nothing
    if (pathname === href) return;

    // 1. Dispatch custom event to tell the transition overlay to sweep up
    const event = new CustomEvent("page-transition-start", {
      detail: { targetPath: href },
    });
    window.dispatchEvent(event);

    // 2. Wait exactly for the panels to fully close over the viewport (0.8s)
    // then execute the actual router switch behind the black curtain.
    setTimeout(() => {
      router.push(href);
    }, 700); 
  };

  return (
    <Link href={href} prefetch target={target} rel={rel} onClick={handleNavigation} className={className}>
      {children}
    </Link>
  );
}