import type { AnchorHTMLAttributes, ReactNode } from 'react'

type ExternalLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
  children: ReactNode
}

export default function ExternalLink({
  children,
  rel,
  target,
  ...props
}: ExternalLinkProps) {
  return (
    <a
      target={target ?? '_blank'}
      rel={rel ?? 'noopener noreferrer'}
      {...props}
    >
      {children}
    </a>
  )
}
