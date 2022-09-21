import React from 'react'

type StringOrLinkType = string | { label: string; href: string }

interface IdentityElement {
  title: string
  children: StringOrLinkType[]
}

interface IdentitySectionProps {
  element: IdentityElement
}

export const IdentitySection = ({ element }: IdentitySectionProps) => {
  return (
    <div className="box">
      <h2>{element.title}</h2>
      {element.children.map((c, i) => (
        <StringOrLink key={i} item={c} />
      ))}
    </div>
  )
}

interface StringOrLinkProps {
  item: StringOrLinkType
}

const StringOrLink = ({ item }: StringOrLinkProps) => {
  if (typeof item === 'string') {
    return (
      <>
        {item} <br />
      </>
    )
  } else {
    return (
      <>
        <a href={item.href}>{item.label}</a>
        <br />
      </>
    )
  }
}
