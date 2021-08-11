import s from './SimpleTable.module.less'

export const SimpleTable = ({ title, columns, children }) => (
  <table className={[s.table]} style={{ width: '100%' }}>
    <colgroup>
      {columns.map(column => (
        <col style={{ width: `${column.width}%` }} />
      ))}
    </colgroup>
    <thead className={[s.tableHeader]}>
      <tr>
        {columns
          .filter(column => column.name !== '')
          .map(column => (
            <th className={[s.tableHeaderCell]}>{column.name}</th>
          ))}
      </tr>
    </thead>
    <tbody>{children}</tbody>
  </table>
)

export const SimpleTableRow = ({ children }) => <tr>{children}</tr>

export const SimpleTableCell = ({ children }) => <td className={[s.tableCell]}>{children}</td>
