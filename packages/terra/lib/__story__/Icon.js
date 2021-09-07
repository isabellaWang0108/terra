import classNames from 'classnames'
import { Card } from '@sb-config/components/Card'
import { SimpleTable, SimpleTableRow, SimpleTableCell } from '@sb-config/components/SimpleTable'


export const Iconsize = () => (
<div style={{display:'flex', margin:60, justifyContent:'space-around'}}>
  <Card>
    <Card.Header>
      <h3>Web icon size</h3>
    </Card.Header>

    <Card.Content>
      <SimpleTable
        columns={[
          { name: 'TYPE', width: 33 },
          { name: 'FONT', width: 33 },
          { name: 'ICON', width: 33 },
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
    </Card.Header>

    <Card.Content>
      <SimpleTable
        title=" "
        columns={[
          { name: 'TYPE', width: 33 },
          { name: 'FONT', width: 33 },
          { name: 'ICON', width: 33 },
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
    { name:'vts-logo-no-text', usage: "VTS vertical lockup logo, the preferred expression for the VTS brand."},
    { name:'vts-logo', usage: "The logomark is preferred for situations that warrant an abbreviated expression." },
    { name:'vts-logo-side-text', usage: "VTS horizontal lockup logo, the preferred expression for the VTS brand." }
  ],
  productIcons:[
    { name:'doc-filled', usage:"Symbol of documentation files." },
    { name:'download', usage:"" },
    { name:'file-v1', usage:"" },
    { name:'file-v2', usage:"" },
    { name:'information', usage:"" },
    { name:'pdf-filled', usage:"" },
    { name:'upload', usage:"" },
    { name:'xls-filled', usage:"" },
    
    { name:'back-arrow', usage:"" },
    { name:'dots', usage:"" },
    { name:'link-out', usage:"" },
    { name:'list-expanded', usage:"" },
    { name:'nav-down', usage:"" },
    { name:'nav-left', usage:"" },
    { name:'nav-right', usage:"" },
    { name:'nav-up', usage:"" },
    
    { name:'calendar', usage:"" }, 
    { name:'clock', usage:"" }, 
    { name:'connect', usage:"" }, 
    { name:'encumbrance', usage:"" }, 
    { name:'financial', usage:"" }, 
    { name:'flame', usage:"" }, 
    { name:'floorplan', usage:"" }, 
    { name:'hourglass', usage:"" },
    
    { name:'key', usage:"" }, 
    { name:'mag', usage:"" }, 
    { name:'mail', usage:"" }, 
    { name:'mobile', usage:"" }, 
    { name:'note', usage:"" }, 
    { name:'notification', usage:"" }, 
    { name:'paperclip', usage:"" }, 
    { name:'picture', usage:"" },
    
    { name:'public-link', usage:"" }, 
    { name:'reminder', usage:"" }, 
    { name:'activity', usage:"" }, 
    { name:'check', usage:"" }, 
    { name:'close-v1', usage:"" }, 
    { name:'close-v2', usage:"" }, 
    { name:'collapse', usage:"" }, 
    { name:'comment', usage:"" },
    
    { name:'exclamation-sign', usage:"" }, 
    { name:'exclamation', usage:"" }, 
    { name:'expand', usage:"" }, 
    { name:'filter', usage:"" }, 
    { name:'hide', usage:"" }, 
    { name:'home', usage:"" }, 
    { name:'info', usage:"" }, 
    { name:'location', usage:"" },
    
    { name:'lock', usage:"" }, 
    { name:'move', usage:"" }, 
    { name:'move-v2', usage:"" }, 
    { name:'pencil', usage:"" }, 
    { name:'play', usage:"" }, 
    { name:'plus-v2', usage:"" }, 
    { name:'point', usage:"" }, 
    { name:'preview', usage:"" },
    
    { name:'question', usage:"" }, 
    { name:'reset', usage:"" }, 
    { name:'ribbon', usage:"" }, 
    { name:'ribbon-filled', usage:"" }, 
    { name:'set-up', usage:"" }, 
    { name:'share', usage:"" }, 
    { name:'sort-down', usage:"" }, 
    { name:'sort-up', usage:"" },
    
    { name:'task', usage:"" }, 
    { name:'star-filled', usage:"" }, 
    { name:'star-outlined', usage:"" }, 
    { name:'contact-info', usage:"" }, 
    { name:'user', usage:"" }, 
    { name:'users', usage:"" }, 
    { name:'building-list', usage:"" }, 
    { name:'building-small', usage:"" },
    
    { name:'building', usage:"" }, 
    { name:'officepark', usage:"" }, 
    { name:'site-plan', usage:"" }, 
    { name:'stack', usage:"" }, 
    { name:'3d-tour', usage:"" }, 
    { name:'download2', usage:"" }, 
    { name:'download-multiple', usage:"" }, 
    { name:'flexible-size-area', usage:"" },
    
    { name:'link', usage:"" }, 
    { name:'location', usage:"" }, 
    { name:'tourbook', usage:"" }, 
    { name:'tourbook-filled', usage:"" }, 
    { name:'heart-outline', usage:"" }, 
    { name:'heart', usage:"" }, 
    { name:'union', usage:"" }, 
    { name:'map-refresh', usage:"" },
    
    { name:'cube', usage:"" },
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

export const LogoUsage = () => (
  <Card>
    <Card.Header>
      <h3>Logos</h3>
    </Card.Header>

    <Card.Content>
      <SimpleTable
        columns={[
          { name: 'ICON', width: 10 },
          { name: 'NAME', width: 30 },
          { name: 'USAGE', width: 60 },
        ]}
      >
       {content.logoIcons.map((item)=>{
       return <SimpleTableRow>
          <SimpleTableCell>
          <span className={item.name+" icon"} style={{fontSize:32}}></span>
          </SimpleTableCell>
          <SimpleTableCell>
            <p>{item.name}</p>
          </SimpleTableCell>
          <SimpleTableCell>
           <p>{item.usage}</p>
          </SimpleTableCell>
        </SimpleTableRow>
       }) }

      </SimpleTable>
    </Card.Content>
  </Card>
)

export const ProductIconUsage = () => (
  <Card>
    <Card.Header>
      <h3>Product icon</h3>
    </Card.Header>

    <Card.Content>
      <SimpleTable
        columns={[
          { name: 'ICON', width: 10 },
          { name: 'NAME', width: 30 },
          { name: 'USAGE', width: 60 },
        ]}
      >
       {content.productIcons.map((item)=>{
       return <SimpleTableRow>
          <SimpleTableCell>
          <span className={item.name+" icon"} style={{fontSize:32}}></span>
          </SimpleTableCell>
          <SimpleTableCell>
            <p>{item.name}</p>
          </SimpleTableCell>
          <SimpleTableCell>
           <p>{item.usage}</p>
          </SimpleTableCell>
        </SimpleTableRow>
       }) }

      </SimpleTable>
    </Card.Content>
  </Card>
)


const iconCardStyle={backgroundColor:'#F7F7F7', width:100, height:100, textAlign:'center', marginRight:16, marginTop:16}