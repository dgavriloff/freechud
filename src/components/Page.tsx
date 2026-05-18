import type { ReactNode } from 'react'

const classNames = (...values: Array<string | undefined>) =>
  values.filter(Boolean).join(' ')

type PageProps = {
  children: ReactNode
  className?: string
}

type PageTitleProps = {
  children: ReactNode
  as?: 'h1' | 'h2'
  className?: string
}

export function Page({ children, className }: PageProps) {
  return <article className={classNames('page', className)}>{children}</article>
}

export function PageContent({ children, className }: PageProps) {
  return <div className={classNames('page-content', className)}>{children}</div>
}

export function PageTitle({
  children,
  as: Tag = 'h2',
  className,
}: PageTitleProps) {
  return <Tag className={classNames('page-title', className)}>{children}</Tag>
}
