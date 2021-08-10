const magicNumbers = {
  firstColumnWidth: '210px',
  secondColumnWidth: '100px',
  columnPadding: '17px',
  rowHeight: '30px',
}
export const Color = ({ variable, swatch, isBaseColor, isWhiteText }) => {
  return (
    <div className="swatch">
      <span
        style={{
          display: 'block',
          background: swatch,
          width: magicNumbers.firstColumnWidth,
          height: isBaseColor ? '140px' : '40px',
          color: isWhiteText ? 'white' : 'black',
          fontSize: '14px',
          fontFamily: 'Roboto, sans-serif',
          paddingTop: '15px',
          paddingBottom: '15px',
          paddingLeft: '10px',
          paddingRight: '10px',
        }}
      >
        {isBaseColor ? (
          <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>Base color</div>
        ) : (
          ''
        )}
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>{variable}</span>
          <span>{swatch}</span>
        </div>
      </span>
    </div>
  )
}
export const ColorSection = ({ children }) => {
  return (
    <div style={{ marginRight: '20px', marginTop: '15px', marginBottom: '15px' }}>{children}</div>
  )
}
export const ColorGroup = ({ groupTitle, children }) => {
  return (
    <div
      className="color"
      style={{ display: 'flex', fontSize: '14px', fontFamily: 'Roboto, sans-serif' }}
    >
      <div style={{ display: 'block' }}>
        <span style={{ textTransform: 'uppercase', fontWeight: 'bold', color: 'gray' }}>
          {groupTitle}
        </span>
        <div style={{ display: 'flex' }}>{children}</div>
      </div>
    </div>
  )
}
export const ColorCollection = ({ children }) => {
  return <div style={{ display: 'flex', fontFamily: 'Roboto, sans-serif' }}>{children}</div>
}
