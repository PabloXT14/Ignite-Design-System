import '../styles/tokens-grid.css'

interface TokensGridProps {
  tokens: Record<string, string>
  hasRemValue?: boolean
}

export function TokensGrid({ tokens, hasRemValue }: TokensGridProps) {
  return (
    <table className="tokens-grid sb-unstyled">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          {hasRemValue && <th>Pixels</th>}
        </tr>
      </thead>

      <tbody>
        {Object.entries(tokens).map(([key, value]) => {
          const valueInPixels = hasRemValue
            ? Number(value.replace('rem', '')) * 16
            : null

          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
              {hasRemValue && <td>{valueInPixels}px</td>}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
