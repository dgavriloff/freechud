import type { ReactNode } from 'react'

const classNames = (...values: Array<string | undefined | false>) =>
  values.filter(Boolean).join(' ')

type SectionKickerProps = {
  children: ReactNode
  as?: 'p' | 'span'
  className?: string
}

type SectionTitleProps = {
  children: ReactNode
  as?: 'h2' | 'h3' | 'h4'
  className?: string
}

type SectionHeadingProps = {
  eyebrow?: ReactNode
  children: ReactNode
  level?: 2 | 3
  className?: string
  eyebrowClassName?: string
  titleClassName?: string
}

export function SectionKicker({
  children,
  as: Tag = 'p',
  className,
}: SectionKickerProps) {
  return (
    <Tag className={classNames('section-kicker', className)}>
      {children}
    </Tag>
  )
}

export function SectionTitle({
  children,
  as: Tag = 'h3',
  className,
}: SectionTitleProps) {
  return <Tag className={classNames('section-title', className)}>{children}</Tag>
}

export default function SectionHeading({
  eyebrow,
  children,
  level = 2,
  className,
  eyebrowClassName,
  titleClassName,
}: SectionHeadingProps) {
  const Title = level === 2 ? 'h2' : 'h3'

  return (
    <div className={className}>
      {eyebrow ? (
        <SectionKicker className={eyebrowClassName}>{eyebrow}</SectionKicker>
      ) : null}
      <Title className={titleClassName}>{children}</Title>
    </div>
  )
}
