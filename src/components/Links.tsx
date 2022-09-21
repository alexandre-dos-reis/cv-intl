interface LinksProps {
  links: {
    href: string
    label: string
  }[]
}

export const Links = ({ links }: LinksProps) => {
  return (
    <>
      {links.map((l, i) => (
        <>
          <a href={l.href}>{l.label}</a> {i === links.length - 1 ? '| ' : '- '}
        </>
      ))}
    </>
  )
}
