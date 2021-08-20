import classNames from 'classnames'
import { Card } from '@sb-config/components/Card'
import { SimpleTable, SimpleTableRow, SimpleTableCell } from '@sb-config/components/SimpleTable'
import s from './Typography.module.less'
import ColorIcon from '../assets/pencil.png'
import Typography from '../assets/typography.png'
import Iconography from '../assets/iconography.png'
import ButtonIcon from '../assets/buttonIcon.png'
import CardIcon from '../assets/cardIcon.png'
import DatePickerIcon from '../assets/datePickerIcon.png'
import Logo from '../assets/VTSLogo.png'
import Heroimg from '../assets/hero.png'

const content = {
    style: [{ title: "Colors", body: "Color brings a design to life. It is used in meaningful and intentional ways to create patterns and visual cues. ", icon: ColorIcon },
    { title: "Typography", body: "Typography is crucial to content structure. It is used to convey the appropriate sentiment and visual hierarchy for our users. ", icon: Typography },
    { title: "Iconography", body: "Iconography uses symbols to represent an object visually. It communicates distinct and informative messages in the design. ", icon: Iconography }]
    ,
    cards: [{ title: "Button", body: "Buttons are a single tap that lets users take action on the the current view they are at. ", icon: ButtonIcon },
    { title: "Card", body: "Cards are components containing content and actions about a single subject. ", icon: CardIcon },
    { title: "Date Picker", body: "Date pickers allow users to select a specific date and year, or a range of dates.", icon: DatePickerIcon }]
    ,
    systems: [
        { title: "Wave Design System", label: "Core" },
        { title: "Truva Design System", label: "Marketplace" },
        { title: "Marketing Design System", label: "Marketing" },
        { title: "Rise Design System", label: "Rise" },
        { title: "Android Design System", label: "Android" },
        { title: "iOS Design System", label: "iOS" }]
}



export const Hero = () => (
        <img style={{ width:'100%' }} src={Heroimg}></img>
)

export const Style = () => (
    <div style={contentSection}>
        <div style={titleCol}>
            <h2>Style</h2>
            <p>This section describes the layout and general expression of style using qualities such as color, typography, and iconography. </p>

        </div>

        {content.style.map((item) => {
            return <div style={contentCard}>

                <h3> <img style={cardIcon} src={item.icon} />{item.title}</h3>
                <div style={containerWithTopLine}>
                    <p>{item.body}</p>
                </div>
            </div>
        })}

    </div>
)


export const Components = () => (
    <div style={contentSection}>
        <div style={titleCol}>
            <h2>Components</h2>
            <p>Components are building blocks for creating a user interface. It is an adaptable system that should support the use of our customer’s journey, and the best practices of user interface design. </p>

        </div>

        {content.cards.map((item) => {
            return <div style={contentCard}>
                <h3> <img style={cardIcon} src={item.icon} />{item.title}</h3>
                <div style={containerWithTopLine}>
                    <p>{item.body}</p>
                </div>
            </div>
        })}

    </div>
)

export const OtherLibrary = () => (
    <div style={{ padding: '60px 63px' }}>
        <h2 style={{ textAlign: 'center' }}>Other VTS libraries</h2>
        <p>As our design system evolves, components and content from other Design System will slowly merge into the Terra Design System. If you do not see the component you are looking for above, please visit the Design System for the platform you are looking for below. </p>
        <div style={{ padding: '60px 0px', display: 'flex', flexWrap: 'wrap', justifyContent:'stretch' }}>
            {content.systems.map((item) => {
                return <div style={systemCard}>
                    <div style={{ fontFamily: 'Roboto, sans-serif', fontSize: '19pt', backgroundColor: '#5528FF', padding: 32, paddingTop: 92, color: 'white' }}>
                        <img style={{ marginRight: 16 , height:20}} src={Logo} />{item.label}
                    </div>
                    <h3 style={{ marginLeft: 16 }}>{item.title}</h3>

                </div>
            })}
        </div>
    </div>
)


const titleCol = {
    marginRight: 16,
    width: 400
}
const contentSection = { backgroundColor: '#F7F7F7', padding: '60px 63px', display: 'flex' }
const contentCard = { width: 400, backgroundColor: 'white', margin: 10, padding: 18, boxShadow: "1px 2px 4px #CCCCCC" }
const cardIcon = { height: 35, width: 35, marginRight: 16, marginBottom: -6 }
const containerWithTopLine = { borderTop: 'solid', width: '100%', borderWidth: .1, borderColor: '#E5E5E5' }
const systemCard = { width: '250px', backgroundColor: 'white', margin: 10, boxShadow: "1px 2px 4px #CCCCCC" }
