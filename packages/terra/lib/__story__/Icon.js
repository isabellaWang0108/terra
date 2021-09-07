import classNames from 'classnames'
import { Card } from '@sb-config/components/Card'
import { SimpleTable, SimpleTableRow, SimpleTableCell } from '@sb-config/components/SimpleTable'


export const FontStack = () => (
  <Card>
    <Card.Content isPadded>
      <h1 className={s.roboto}>Roboto</h1>
      <h1 className={s.roobert}>Roobert</h1>
      <h1 className={s.proxima}>Proxima nova</h1>
    </Card.Content>
  </Card>
)


export const Iconsize = () => (
  <Card>
    <Card.Header>
      <h2>Roboto</h2>
    </Card.Header>
    <Card.Content>
      <SimpleTable
        title="Roboto"
        columns={[
          { name: '', width: 30 },
          { name: '', width: 70 },
        ]}
      >
        <SimpleTableRow>
          <SimpleTableCell>
            <h1>Heading 1</h1>
          </SimpleTableCell>
          <SimpleTableCell>
            <FontStats font="Roboto" weight="Regular" size="32px" letterSizing="0px" />
          </SimpleTableCell>
        </SimpleTableRow>
        <SimpleTableRow>
          <SimpleTableCell>
            <h2>Heading 2</h2>
          </SimpleTableCell>
          <SimpleTableCell>
            <FontStats font="Roboto" weight="Regular" size="24px" letterSizing="0px" />
          </SimpleTableCell>
        </SimpleTableRow>
        <SimpleTableRow>
          <SimpleTableCell>
            <h3>Heading 3</h3>
          </SimpleTableCell>
          <SimpleTableCell>
            <FontStats font="Roboto" weight="Regular" size="18px" letterSizing="0px" />
          </SimpleTableCell>
        </SimpleTableRow>
        <SimpleTableRow>
          <SimpleTableCell>
            <h4>Heading 4</h4>
          </SimpleTableCell>
          <SimpleTableCell>
            <FontStats font="Roboto" weight="Medium" size="14px" letterSizing="0px" />
          </SimpleTableCell>
        </SimpleTableRow>
        <SimpleTableRow>
          <SimpleTableCell>
            <p className="body-1 medium">Body 1 medium</p>
          </SimpleTableCell>
          <SimpleTableCell>
            <FontStats font="Roboto" weight="Medium" size="14px" letterSizing="0px" />
          </SimpleTableCell>
        </SimpleTableRow>
        <SimpleTableRow>
          <SimpleTableCell>
            <p className="body-1">Body 1 regular</p>
          </SimpleTableCell>
          <SimpleTableCell>
            <FontStats font="Roboto" weight="Regular" size="14px" letterSizing="0px" />
          </SimpleTableCell>
        </SimpleTableRow>
        <SimpleTableRow>
          <SimpleTableCell>
            <p className="body-2 medium">Body 2 medium</p>
          </SimpleTableCell>
          <SimpleTableCell>
            <FontStats font="Roboto" weight="Medium" size="12px" letterSizing="0px" />
          </SimpleTableCell>
        </SimpleTableRow>
        <SimpleTableRow>
          <SimpleTableCell>
            <p className="body-3">Body 2 regular</p>
          </SimpleTableCell>
          <SimpleTableCell>
            <FontStats font="Roboto" weight="Regular" size="12px" letterSizing="0px" />
          </SimpleTableCell>
        </SimpleTableRow>
        <SimpleTableRow>
          <SimpleTableCell>
            <p className="body-3 medium">Body 3 medium</p>
          </SimpleTableCell>
          <SimpleTableCell>
            <FontStats font="Roboto" weight="Medium" size="10px" letterSizing="0px" />
          </SimpleTableCell>
        </SimpleTableRow>
        <SimpleTableRow>
          <SimpleTableCell>
            <p className="body-3">Body 3 regular</p>
          </SimpleTableCell>
          <SimpleTableCell>
            <FontStats font="Roboto" weight="Regular" size="10px" letterSizing="0px" />
          </SimpleTableCell>
        </SimpleTableRow>
        <SimpleTableRow>
          <SimpleTableCell>
            <label>Labels</label>
          </SimpleTableCell>
          <SimpleTableCell>
            <FontStats font="Roboto" weight="Regular" size="10px" letterSizing="0px" />
          </SimpleTableCell>
        </SimpleTableRow>
      </SimpleTable>
    </Card.Content>
  </Card>
)

const content = {
  logoIcons:[
    { name:'vts-logo-no-text' },
    { name:'vts-logo' },
    { name:'vts-logo-side-text' }
  ],
  productIcons:[
    { name:'doc-filled' },{ name:'download' },{ name:'file-v1' },{ name:'file-v2' },{ name:'information' },{ name:'pdf-filled' },{ name:'upload' },{ name:'xls-filled' },
    { name:'back-arrow' },{ name:'dots' },{ name:'link-out' },{ name:'list-expanded' },{ name:'nav-down' },{ name:'nav-left' },{ name:'nav-right' },{ name:'nav-up' },
    { name:'calendar' }, { name:'clock' }, { name:'connect' }, { name:'encumbrance' }, { name:'financial' }, { name:'flame' }, { name:'floorplan' }, { name:'hourglass' },
    { name:'key' }, { name:'mag' }, { name:'mail' }, { name:'mobile' }, { name:'note' }, { name:'notification' }, { name:'paperclip' }, { name:'picture' },
    { name:'public-link' }, { name:'reminder' }, { name:'activity' }, { name:'check' }, { name:'close-v1' }, { name:'close-v2' }, { name:'collapse' }, { name:'comment' },
    { name:'exclamation-sign' }, { name:'exclamation' }, { name:'expand' }, { name:'filter' }, { name:'hide' }, { name:'home' }, { name:'info' }, { name:'location' },
    { name:'lock' }, { name:'move' }, { name:'move-v2' }, { name:'pencil' }, { name:'play' }, { name:'plus-v2' }, { name:'point' }, { name:'preview' },
    { name:'question' }, { name:'reset' }, { name:'ribbon' }, { name:'ribbon-filled' }, { name:'set-up' }, { name:'share' }, { name:'sort-down' }, { name:'sort-up' },
    { name:'task' }, { name:'star-filled' }, { name:'star-outlined' }, { name:'contact-info' }, { name:'user' }, { name:'users' }, { name:'building-list' }, { name:'building-small' },
    { name:'building' }, { name:'officepark' }, { name:'site-plan' }, { name:'stack' }, { name:'3d-tour' }, { name:'download2' }, { name:'download-multiple' }, { name:'flexible-size-area' },
    { name:'link' }, { name:'location' }, { name:'tourbook' }, { name:'tourbook-filled' }, { name:'heart-outline' }, { name:'heart' }, { name:'union' }, { name:'map-refresh' },
    { name:'cube' },
  ]
}



export const LogoIcons = () => (

  <div style={{display:'flex'}}>
    {content.logoIcons.map((item)=>{
      return  <div style={iconCardStyle}>
       <br/>
       <span className={item.name + ' icon'}></span>
       <br/>
       <p className="body-3 black-060">{item.name}</p>
      </div>
    })
    }
  </div>

)

export const ProductIcons = () => (

  <div style={{display:'flex', flexWrap:'wrap'}}>
    {content.productIcons.map((item)=>{
      return  <div style={iconCardStyle}>
       <br/>
       <span className={item.name + ' icon'}></span>
       <br/>
       <p className="body-3 black-060">{item.name}</p>
      </div>
    })
    }
  </div>

)

const iconCardStyle={backgroundColor:'#F7F7F7', width:100, height:100, textAlign:'center', marginRight:16, marginTop:16}