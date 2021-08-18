import s from './SimpleTable.module.less'

type Column = {
  width: string
  name: string
}

type Props = {
  columns: Column[]
  children: JSX.Element
}

export const SimpleTable = ({ columns, children }: Props) => (
  <table className={s.table} style={{ width: '100%' }}>
    <colgroup>
      {columns.map(column => (
        <col style={{ width: `${column.width}%` }} />
      ))}
    </colgroup>
    <thead className={s.tableHeader}>
      <tr>
        {columns
          .filter(column => column.name !== '')
          .map(column => (
            <th className={s.tableHeaderCell}>{column.name}</th>
          ))}
      </tr>
    </thead>
    <tbody>{children}</tbody>
  </table>
)

export const SimpleTableRow = ({ children }: { children: JSX.Element }) => <tr>{children}</tr>

export const SimpleTableCell = ({ children }: { children: JSX.Element }) => (
  <td className={s.tableCell}>{children}</td>
)
