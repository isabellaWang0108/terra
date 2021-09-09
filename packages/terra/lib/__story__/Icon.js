import classNames from 'classnames'
import { Card } from '@sb-config/components/Card'
import { SimpleTable, SimpleTableRow, SimpleTableCell } from '@sb-config/components/SimpleTable'
import React from 'react';
import s from './Icon.module.less'

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
           <span className="icon vts-logo size-12"></span>
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
           <span className="icon vts-logo size-16"></span>
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
           <span className="icon vts-logo size-20"></span>
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
           <span className="icon vts-logo size-24"></span>
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
           <span className="icon vts-logo size-50"></span>
          </SimpleTableCell>
        </SimpleTableRow>
        
      </SimpleTable>
    </Card.Content>
  </Card>


  <Card>
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
           <span className="icon vts-logo size-11"></span>
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
           <span className="icon vts-logo size-13"></span>
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
           <span className="icon vts-logo size-15"></span>
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
           <span className="icon vts-logo size-17" ></span>
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
           <span className="icon vts-logo size-24"></span>
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
    { name:'download', usage:"Starts download files." },
    { name:'file-v1', usage:"Indicates a folder." },
    { name:'file-v2', usage:"Indicates a checklist." },
    { name:'information', usage:"Indicates deal information." },
    { name:'pdf-filled', usage:"Denotes, displays, or initiates a PDF file." },
    { name:'upload', usage:"Starts upload actions." },
    { name:'xls-filled', usage:"Denotes, displays, or initiates a XLS file." },
    
    { name:'back-arrow', usage:"Navigates back to previous step. " },
    { name:'dots', usage:"Navigation move." },
    { name:'link-out', usage:"Links to a new view out of the current one." },
    { name:'list-expanded', usage:"Shows menu items." },
    { name:'nav-down', usage:"Navigates downward." },
    { name:'nav-left', usage:"Navigates to the left" },
    { name:'nav-right', usage:"Navigates to the right." },
    { name:'nav-up', usage:"Navigates upward." },
    
    { name:'calendar', usage:"Displays a calendar or event, or performs a related action." }, 
    { name:'clock', usage:"	Denotes or displays a clock or timer." }, 
    { name:'connect', usage:"	Denotes or displays connection." }, 
    { name:'encumbrance', usage:"Indicates an encumbrance." }, 
    { name:'financial', usage:"	Denotes dollar or money related items." }, 
    { name:'flame', usage:"Indicates Hot Prospect." }, 
    { name:'floorplan', usage:"	Denotes or displays a clock or timer." }, 
    { name:'hourglass', usage:"Shows pending status." },
    
    { name:'key', usage:"Indicates the field or application has encryption." }, 
    { name:'mag', usage:"Denotes or enters a search mode." }, 
    { name:'mail', usage:"	Denotes or displays Email. " }, 
    { name:'mobile', usage:"Denotes or displays phone number." }, 
    { name:'note', usage:"" }, 
    { name:'notification', usage:"Sets or displays notifications." }, 
    { name:'paperclip', usage:"	Denotes or shows attachment." }, 
    { name:'picture', usage:"Indicates images." },
    
    { name:'public-link', usage:"Sets or displays public link." }, 
    { name:'reminder', usage:"Sets or displays a reminder.	" }, 
    { name:'activity', usage:"Shows activities." }, 
    { name:'check', usage:"Sets or displays confirmation." }, 
    { name:'close-v1', usage:"Dismisses content like modals and alerts." }, 
    { name:'close-v2', usage:"Dismisses or clears content. " }, 
    { name:'collapse', usage:"Collapses a view in the current context. " }, 
    { name:'comment', usage:"Writes a comment or shows the comment history. " },
    
    { name:'exclamation-sign', usage:"Shows alert information." }, 
    { name:'exclamation', usage:"Shows warning information. " }, 
    { name:'expand', usage:"Expands a view in the current context. " }, 
    { name:'filter', usage:"Displays or enters filter settings. " }, 
    { name:'hide', usage:"Hides an item. " }, 
    { name:'home', usage:"Indicates or displays a home screen.  " }, 
    { name:'info', usage:"Shows information. " }, 
    { name:'location', usage:"Denotes the concept of location or accesses the current geographic location." },
    
    { name:'lock', usage:"Stops changes, indicates security features. " }, 
    { name:'move', usage:"Indicates or controls movements. " }, 
    { name:'move-v2', usage:"Opens overflow menu items." }, 
    { name:'pencil', usage:"Enters a edit mode." }, 
    { name:'play', usage:"Begins or resumes media playback.	" }, 
    { name:'plus-v2', usage:"Adds new items to current context. " }, 
    { name:'point', usage:"Indicates status." }, 
    { name:'preview', usage:"Shows preview, view count." },
    
    { name:'question', usage:"Denotes or displays a question." }, 
    { name:'reset', usage:"Starts reset action. " }, 
    { name:'ribbon', usage:"Committed lease off." }, 
    { name:'ribbon-filled', usage:"Committed lease on." }, 
    { name:'set-up', usage:"Opens setting menu items." }, 
    { name:'share', usage:"Shows share extensions, action extensions, and tasks." }, 
    { name:'sort-down', usage:"Sorts down content." }, 
    { name:'sort-up', usage:"Sorts up content." },
    
    { name:'task', usage:"Shows or enters task items. " }, 
    { name:'star-filled', usage:"Indicates a bookmarked item. " }, 
    { name:'star-outlined', usage:"Indicates bookmark. " }, 
    { name:'contact-info', usage:"Shows contact information" }, 
    { name:'user', usage:"Denotes or displays user's information." }, 
    { name:'users', usage:"Denotes or displays multiple uses' information." }, 
    { name:'building-list', usage:"Indicates building portfolios. " }, 
    { name:'building-small', usage:"Indicates a small propety." },
    
    { name:'building', usage:"Indicates a propety." }, 
    { name:'officepark', usage:"Indicates multiple propeties." }, 
    { name:'site-plan', usage:"Denotes or displays site plan." }, 
    { name:'stack', usage:"Denotes or displays stacking plan." }, 
    { name:'tour-3d', usage:"Indicates a 3d tour." }, 
    { name:'download2', usage:"Starts downloading one asset." }, 
    { name:'download-multiple', usage:"Starts downloading multiple assets." }, 
    { name:'flexible-size-area', usage:"Indicates a flexible size area." },
    
    { name:'link', usage:"Indicates a link." }, 
    { name:'location', usage:"Denotes the concept of location or accesses the current geographic location." }, 
    { name:'tourbook', usage:"Indicates add to tourbook option.  " }, 
    { name:'tourbook-filled', usage:"Denotes or marks an item as saved in tourbook.	" }, 
    { name:'heart-outline', usage:"Indicates save listing option. " }, 
    { name:'heart', usage:"Denotes or marks a listing as saved" }, 
    { name:'union', usage:"Shows a union icon. " }, 
    { name:'map-refresh', usage:"Refreshes the current map view. " },
    
    { name:'cube', usage:"Indicates a cube." },
  ]

}



export const LogoIcons = () => (

  <div style={{display:'flex'}}>
    {content.logoIcons.map((item, i)=>{
      return  <div className={s.iconCardStyle} key={i}>
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
    {content.productIcons 
     .sort((a, b) =>{
        if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        return 0;
       })
     .map((item, i)=>{
      return  <div className={s.iconCardStyle} key={i}>
       <br/>
       <span className={item.name + ' icon'}></span>
       <br/>
       <p className="body-3 black-060">{item.name}</p>
      </div>
     })
    }
  </div>

)

class Content extends React.Component {
  state={input:'', content: content };

  render() {
    return <div>
       <input className={s.inputBox}
              type="text"
              placeholder="Please enter a keyword to search"
              onChange={(e)=>{ this.setState({input:e.target.value}) }}>
       </input>
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
       {this.state.content.logoIcons
       .filter(word=>word.name.includes(this.state.input))
       .map((item, i)=>{
       return <SimpleTableRow key={i}>
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
       {this.state.content.productIcons
        .filter(word=>word.name.includes(this.state.input))
        .sort((a, b) =>{
          if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
          if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
          return 0;
         })
        .map((item, i )=>{
          return <SimpleTableRow key={i}>
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
    </div>;
  }
}
export default Content;

export const UsagePage = () => (
  <Content/>
)

