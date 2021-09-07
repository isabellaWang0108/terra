import classNames from 'classnames'
import { Card } from '@sb-config/components/Card'
import { SimpleTable, SimpleTableRow, SimpleTableCell } from '@sb-config/components/SimpleTable'


export const Iconsize = () => (
<div style={{display:'flex', margin:60, justifyContent:'space-around'}}>


  <Card>
    <Card.Header>
      <h3>Web icon size</h3>
      <div style={{display:'flex', justifyContent:'space-around'}}>
         <label>TYPE</label> <label>FONT</label> <label>ICON</label>
      </div>
    </Card.Header>

    <Card.Content>
      <SimpleTable
        columns={[
          { name: '', width: 33 },
          { name: '', width: 33 },
          { name: '', width: 33 },
        ]}
      >
        <SimpleTableRow>
          <SimpleTableCell>
            <p>XS</p>
          </SimpleTableCell>
          <SimpleTableCell>
            <p>12PX</p>
          </SimpleTableCell>
          <SimpleTableCell>
           <span className="icon vts-logo" style={{fontSize:12}}></span>
          </SimpleTableCell>
        </SimpleTableRow>

        <SimpleTableRow>
          <SimpleTableCell>
            <p>SM</p>
          </SimpleTableCell>
          <SimpleTableCell>
            <p>16PX</p>
          </SimpleTableCell>
          <SimpleTableCell>
           <span className="icon vts-logo" style={{fontSize:16}}></span>
          </SimpleTableCell>
        </SimpleTableRow>

        <SimpleTableRow>
          <SimpleTableCell>
            <p>MD</p>
          </SimpleTableCell>
          <SimpleTableCell>
            <p>20PX</p>
          </SimpleTableCell>
          <SimpleTableCell>
           <span className="icon vts-logo" style={{fontSize:20}}></span>
          </SimpleTableCell>
        </SimpleTableRow>

        <SimpleTableRow>
          <SimpleTableCell>
            <p>LG</p>
          </SimpleTableCell>
          <SimpleTableCell>
            <p>24PX</p>
          </SimpleTableCell>
          <SimpleTableCell>
           <span className="icon vts-logo" style={{fontSize:24}}></span>
          </SimpleTableCell>
        </SimpleTableRow>

        <SimpleTableRow>
          <SimpleTableCell>
            <p>XL</p>
          </SimpleTableCell>
          <SimpleTableCell>
            <p>50PX</p>
          </SimpleTableCell>
          <SimpleTableCell>
           <span className="icon vts-logo" style={{fontSize:50}}></span>
          </SimpleTableCell>
        </SimpleTableRow>
        
      </SimpleTable>
    </Card.Content>
  </Card>


  <Card style={{width:"100%"}}>
    <Card.Header>
      <h3>Mobile icon size</h3>
      <div style={{display:'flex', justifyContent:'space-around'}}>
         <label>TYPE</label> <label>FONT</label> <label>ICON</label>
      </div>
    </Card.Header>

    <Card.Content>
      <SimpleTable
        title=" "
        columns={[
          { name: '', width: 33 },
          { name: '', width: 33 },
          { name: '', width: 33 },
        ]}
      >
        <SimpleTableRow>
          <SimpleTableCell>
            <p>Extra Small</p>
          </SimpleTableCell>
          <SimpleTableCell>
            <p>11PX</p>
          </SimpleTableCell>
          <SimpleTableCell>
           <span className="icon vts-logo" style={{fontSize:11}}></span>
          </SimpleTableCell>
        </SimpleTableRow>

        <SimpleTableRow>
          <SimpleTableCell>
            <p>Small</p>
          </SimpleTableCell>
          <SimpleTableCell>
            <p>13PX</p>
          </SimpleTableCell>
          <SimpleTableCell>
           <span className="icon vts-logo" style={{fontSize:13}}></span>
          </SimpleTableCell>
        </SimpleTableRow>

        <SimpleTableRow>
          <SimpleTableCell>
            <p>Regular</p>
          </SimpleTableCell>
          <SimpleTableCell>
            <p>15PX</p>
          </SimpleTableCell>
          <SimpleTableCell>
           <span className="icon vts-logo" style={{fontSize:15}}></span>
          </SimpleTableCell>
        </SimpleTableRow>

        <SimpleTableRow>
          <SimpleTableCell>
            <p>Medium</p>
          </SimpleTableCell>
          <SimpleTableCell>
            <p>17PX</p>
          </SimpleTableCell>
          <SimpleTableCell>
           <span className="icon vts-logo" style={{fontSize:17}}></span>
          </SimpleTableCell>
        </SimpleTableRow>

        <SimpleTableRow>
          <SimpleTableCell>
            <p>Large</p>
          </SimpleTableCell>
          <SimpleTableCell>
            <p>24PX</p>
          </SimpleTableCell>
          <SimpleTableCell>
           <span className="icon vts-logo" style={{fontSize:24}}></span>
          </SimpleTableCell>
        </SimpleTableRow>
        
      </SimpleTable>
    </Card.Content>
  </Card>

</div>
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