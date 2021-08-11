import { Card } from '../Card'
import { SimpleTable, SimpleTableRow, SimpleTableCell } from '../SimpleTable'
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
export const ColorTableColorCell = ({ color, hexCode }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
      <div>
        <span style={{ display: 'block' }}>{color}</span>
        <span style={{ display: 'block' }}>#{hexCode}</span>
      </div>
      <div
        style={{
          height: '40px',
          width: '72px',
          background: `#${hexCode}`,
          marginLeft: '15px',
        }}
      ></div>
    </div>
  )
}
export const ColorTable = () => (
  <Card>
    <Card.Content>
      <SimpleTable
        columns={[
          { name: 'token', width: 16 },
          { name: 'web role', width: 30 },
          { name: 'mobile role', width: 31 },
          { name: 'value', width: 26 },
        ]}
      >
        <SimpleTableRow>
          <SimpleTableCell>$indigo-120</SimpleTableCell>
          <SimpleTableCell>On-hover primary link</SimpleTableCell>
          <SimpleTableCell>NA</SimpleTableCell>
          <SimpleTableCell>
            <ColorTableColorCell color="indigo 120" hexCode="140532" />
          </SimpleTableCell>
        </SimpleTableRow>
        <SimpleTableRow>
          <SimpleTableCell>$indigo-110</SimpleTableCell>
          <SimpleTableCell>On-hover primary button</SimpleTableCell>
          <SimpleTableCell>NA</SimpleTableCell>
          <SimpleTableCell>
            <ColorTableColorCell color="indigo 110" hexCode="280F96" />
          </SimpleTableCell>
        </SimpleTableRow>
        <SimpleTableRow>
          <SimpleTableCell>$indigo-100</SimpleTableCell>
          <SimpleTableCell>
            Primary color; Primary button; Primary link; selected state of tabs
          </SimpleTableCell>
          <SimpleTableCell>
            Primary color; primary button; primary link, unread UI, switch on
          </SimpleTableCell>
          <SimpleTableCell>
            <ColorTableColorCell color="indigo 100" hexCode="5528FF" />
          </SimpleTableCell>
        </SimpleTableRow>
        <SimpleTableRow>
          <SimpleTableCell>$indigo-090</SimpleTableCell>
          <SimpleTableCell>In tooltip link</SimpleTableCell>
          <SimpleTableCell>Deal activity color (deal stage)</SimpleTableCell>
          <SimpleTableCell>
            <ColorTableColorCell color="indigo 090" hexCode="8C82FF" />
          </SimpleTableCell>
        </SimpleTableRow>
        <SimpleTableRow>
          <SimpleTableCell>$indigo-070</SimpleTableCell>
          <SimpleTableCell>In tooltip link on hover</SimpleTableCell>
          <SimpleTableCell>NA</SimpleTableCell>
          <SimpleTableCell>
            <ColorTableColorCell color="indigo 070" hexCode="E6E6FF" />
          </SimpleTableCell>
        </SimpleTableRow>
        <SimpleTableRow>
          <SimpleTableCell>$egg-100</SimpleTableCell>
          <SimpleTableCell>
            Background for prominent small elements, boarder hovers, unaccessible branding elements
          </SimpleTableCell>
          <SimpleTableCell>NA</SimpleTableCell>
          <SimpleTableCell>
            <ColorTableColorCell color="egg 100" hexCode="FFB200" />
          </SimpleTableCell>
        </SimpleTableRow>
        <SimpleTableRow>
          <SimpleTableCell>$egg-050</SimpleTableCell>
          <SimpleTableCell>hover color for egg-100</SimpleTableCell>
          <SimpleTableCell>NA</SimpleTableCell>
          <SimpleTableCell>
            <ColorTableColorCell color="egg 050" hexCode="FFD87F" />
          </SimpleTableCell>
        </SimpleTableRow>
        <SimpleTableRow>
          <SimpleTableCell>$aqua-120</SimpleTableCell>
          <SimpleTableCell>Main add deal button on-hover in main header</SimpleTableCell>
          <SimpleTableCell>Deal activity color (proposal)</SimpleTableCell>
          <SimpleTableCell>
            <ColorTableColorCell color="aqua 120" hexCode="004B4B" />
          </SimpleTableCell>
        </SimpleTableRow>
        <SimpleTableRow>
          <SimpleTableCell>$aqua-110</SimpleTableCell>
          <SimpleTableCell>main add deal button on-hover in main header</SimpleTableCell>
          <SimpleTableCell>NA</SimpleTableCell>
          <SimpleTableCell>
            <ColorTableColorCell color="aqua 110" hexCode="009696" />
          </SimpleTableCell>
        </SimpleTableRow>
        <SimpleTableRow>
          <SimpleTableCell>$aqua-100</SimpleTableCell>
          <SimpleTableCell>
            main add deal button in main header, accents for required form items
          </SimpleTableCell>
          <SimpleTableCell>Deal activity color (new deal), quick action button</SimpleTableCell>
          <SimpleTableCell>
            <ColorTableColorCell color="aqua 100" hexCode="00C8C8" />
          </SimpleTableCell>
        </SimpleTableRow>
        <SimpleTableRow>
          <SimpleTableCell>$black-100</SimpleTableCell>
          <SimpleTableCell>primary text color</SimpleTableCell>
          <SimpleTableCell>
            Deal activity color (deal task), primary text color, title text, selected state of tabs
          </SimpleTableCell>
          <SimpleTableCell>
            <ColorTableColorCell color="black 100" hexCode="000000" />
          </SimpleTableCell>
        </SimpleTableRow>
        <SimpleTableRow>
          <SimpleTableCell>$black-090</SimpleTableCell>
          <SimpleTableCell>hover state for tabs on side nav</SimpleTableCell>
          <SimpleTableCell>NA</SimpleTableCell>
          <SimpleTableCell>
            <ColorTableColorCell color="black 090" hexCode="191919" />
          </SimpleTableCell>
        </SimpleTableRow>
        <SimpleTableRow>
          <SimpleTableCell>$black-060</SimpleTableCell>
          <SimpleTableCell>
            subtext, labels, inactive state of tabs, empty state text, muted text
          </SimpleTableCell>
          <SimpleTableCell>
            subtext, labels, inactive state of tabs, empty state text, muted text
          </SimpleTableCell>
          <SimpleTableCell>
            <ColorTableColorCell color="black 060" hexCode="666666" />
          </SimpleTableCell>
        </SimpleTableRow>
        <SimpleTableRow>
          <SimpleTableCell>$black-035</SimpleTableCell>
          <SimpleTableCell>Empty state copy, muted copy, field placeholder copy</SimpleTableCell>
          <SimpleTableCell>field placeholder copy</SimpleTableCell>
          <SimpleTableCell>
            <ColorTableColorCell color="black 035" hexCode="A6A6A6" />
          </SimpleTableCell>
        </SimpleTableRow>
        <SimpleTableRow>
          <SimpleTableCell>$black-020</SimpleTableCell>
          <SimpleTableCell>
            Toggle button outline, text-field outline, form field dropdowns
          </SimpleTableCell>
          <SimpleTableCell>NA</SimpleTableCell>
          <SimpleTableCell>
            <ColorTableColorCell color="black 020" hexCode="CCCCCC" />
          </SimpleTableCell>
        </SimpleTableRow>
        <SimpleTableRow>
          <SimpleTableCell>$black-010</SimpleTableCell>
          <SimpleTableCell>secondary button, table row line divider </SimpleTableCell>
          <SimpleTableCell>Field placeholder copy, space pill UI, switch off</SimpleTableCell>
          <SimpleTableCell>
            <ColorTableColorCell color="black 010" hexCode="E5E5E5" />
          </SimpleTableCell>
        </SimpleTableRow>
        <SimpleTableRow>
          <SimpleTableCell>$black-003</SimpleTableCell>
          <SimpleTableCell>disabled button, on-hover table row background color</SimpleTableCell>
          <SimpleTableCell>Background color, text box, line divider</SimpleTableCell>
          <SimpleTableCell>
            <ColorTableColorCell color="black 003" hexCode="F7F7F7" />
          </SimpleTableCell>
        </SimpleTableRow>
        <SimpleTableRow>
          <SimpleTableCell>$white-100</SimpleTableCell>
          <SimpleTableCell>
            cards, main background color, selected tab text on main nav
          </SimpleTableCell>
          <SimpleTableCell>
            Card background, text on black tooltip, text on primary button
          </SimpleTableCell>
          <SimpleTableCell>
            <ColorTableColorCell color="white 100" hexCode="FFFFFF" />
          </SimpleTableCell>
        </SimpleTableRow>
        <SimpleTableRow>
          <SimpleTableCell>$green-140</SimpleTableCell>
          <SimpleTableCell>success copy, positive numerical data</SimpleTableCell>
          <SimpleTableCell>
            Deal activity color (tenant connection), positive numerical data, tenant sentiment
            (positive)
          </SimpleTableCell>
          <SimpleTableCell>
            <ColorTableColorCell color="green 140" hexCode="008759" />
          </SimpleTableCell>
        </SimpleTableRow>
        <SimpleTableRow>
          <SimpleTableCell>$green-100</SimpleTableCell>
          <SimpleTableCell>non essentials success accent</SimpleTableCell>
          <SimpleTableCell>success accent</SimpleTableCell>
          <SimpleTableCell>
            <ColorTableColorCell color="green 100" hexCode="00E295" />
          </SimpleTableCell>
        </SimpleTableRow>
        <SimpleTableRow>
          <SimpleTableCell>$red-100</SimpleTableCell>
          <SimpleTableCell>alert error, alert failure</SimpleTableCell>
          <SimpleTableCell>
            Error, failure, delete button, reject button, tenant sentiment (negative)
          </SimpleTableCell>
          <SimpleTableCell>
            <ColorTableColorCell color="red 100" hexCode="E60C0C" />
          </SimpleTableCell>
        </SimpleTableRow>
        <SimpleTableRow>
          <SimpleTableCell>$red-050</SimpleTableCell>
          <SimpleTableCell>error message boarder</SimpleTableCell>
          <SimpleTableCell>NA</SimpleTableCell>
          <SimpleTableCell>
            <ColorTableColorCell color="red 050" hexCode="FFA39E" />
          </SimpleTableCell>
        </SimpleTableRow>
        <SimpleTableRow>
          <SimpleTableCell>$red-010</SimpleTableCell>
          <SimpleTableCell>error message background</SimpleTableCell>
          <SimpleTableCell>NA</SimpleTableCell>
          <SimpleTableCell>
            <ColorTableColorCell color="red 010" hexCode="FFF1F0" />
          </SimpleTableCell>
        </SimpleTableRow>
        <SimpleTableRow>
          <SimpleTableCell>$orange-100</SimpleTableCell>
          <SimpleTableCell>warning</SimpleTableCell>
          <SimpleTableCell>
            Deal activity color (comment&mentioned), warning, landing page visual icon, tenant
            sentiment (neutral)
          </SimpleTableCell>
          <SimpleTableCell>
            <ColorTableColorCell color="orange 100" hexCode="FF9E00" />
          </SimpleTableCell>
        </SimpleTableRow>
      </SimpleTable>
    </Card.Content>
  </Card>
)
