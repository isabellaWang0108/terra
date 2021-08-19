import classNames from 'classnames'
import { Card } from '@sb-config/components/Card'
import { SimpleTable, SimpleTableRow, SimpleTableCell } from '@sb-config/components/SimpleTable'
import s from './Typography.module.less'
import ColorIcon from '../assets/pencil.png'
import Typography from '../assets/typography.png'
import Iconography from '../assets/iconography.png'

const contentStyles = {
    cards: [{ title: "Colors", body: "Color brings a design to life. It is used in meaningful and intentional ways to create patterns and visual cues. ", icon: ColorIcon },
    { title: "Typography", body: "Typography is crucial to content structure. It is used to convey the appropriate sentiment and visual hierarchy for our users. ", icon: Typography },
    { title: "Iconography", body: "Iconography uses symbols to represent an object visually. It communicates distinct and informative messages in the design. ", icon: Iconography }]
}


export const Hero = () => (
    <div style={{ padding: '84px 58px' }}>
        <div style={{ fontSize: 41, fontFamily: 'Roboto' }}>Welcome to Terra</div>
        <h3>Terra is the VTS Design System that provides design guidelines and component documentation.</h3>

    </div>
)

export const Section = () => (
    <div style={contentSection}>
        <div style={titleCol}>
            <h2>Style</h2>
            <p>This section describes the layout and general expression of style using qualities such as color, typography, and iconography. </p>

        </div>

        {contentStyles.cards.map((item) => {
            return <div style={contentCard}>

                <h3> <img style={cardIcon} src={item.icon} />{item.title}</h3>
                <div style={containerWithTopLine}>
                    <p>{item.body}</p>
                </div>
            </div>
        })}
        
    </div>
)



const titleCol = {
    marginRight: 16,
    width: 400
}
const contentSection = { backgroundColor: '#F7F7F7', padding: '84px 63px', display: 'flex' }
const contentCard = { width: 400, backgroundColor: 'white', margin: 10, padding: 18 }
const cardIcon = { height: 35, width: 35, marginRight: 16, marginBottom: -6 }
const containerWithTopLine = { borderTop: 'solid', width: '100%', borderWidth: .1, borderColor: '#E5E5E5' }