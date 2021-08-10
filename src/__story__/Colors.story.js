import React from 'react'
// import { brandColors, accentColors, alertColors } from '@.storybook/base/Colors'

const brandColors = [
  {
    groupTitle: 'Primary Color',
    sections: [
      {
        title: 'Section 1',
        colors: [
          {
            swatch: '#140532',
            variable: '$indigo-120',
            use: 'on-hover primary link',
            isWhiteText: true,
          },
          {
            swatch: '#280f96',
            variable: '$indigo-110',
            use: 'on-hover primary button',
            isWhiteText: true,
          },
          {
            swatch: '#5528ff',
            variable: '$indigo-100',
            use: 'primary button, primary link, selected state of tabs',
            isWhiteText: true,
            isBaseColor: true,
          },
          {
            swatch: '#8c82ff',
            variable: '$indigo-090',
            use: 'in tooltip link',
          },
          {
            swatch: '#c8c8ff',
            variable: '$indigo-070',
            use: 'in tooltip link on-hover',
          },
        ],
      },
    ],
  },
  {
    groupTitle: 'Accent Color',
    sections: [
      {
        title: 'Section 1',
        colors: [
          {
            swatch: '#ffb200',
            variable: '$egg-100',
            use:
              'backgrounds for prominent small elements, border hovers, unaccessible branding elements',
            isBaseColor: true,
            isWhiteText: false,
          },
          {
            swatch: '#ffd87f',
            variable: '$egg-050',
            use: 'hover color for egg-100',
          },
        ],
      },
      {
        title: 'Section 2',
        colors: [
          {
            swatch: '#55FF55',
            variable: '$some-kinda-green',
            use: 'green test text vts vts vts',
            isBaseColor: true,
            isWhiteText: false,
          },
          {
            swatch: '#AAFFAA',
            variable: '$egg-050',
            use: 'hover color for egg-100',
          },
        ],
      },
    ],
  },
  {
    groupTitle: 'Other Test Colors',
    sections: [
      {
        title: 'Section 1',
        colors: [
          {
            swatch: '#000',
            variable: '$black-100',
            use: 'body color, headers color, selected toggle button, side navigation',
            isWhiteText: true,
          },
          {
            swatch: '#191919',
            variable: '$black-090',
            use: 'hover state for tabs on side nav',
            isWhiteText: true,
          },
          {
            swatch: '#666666',
            variable: '$black-060',
            use: 'subtext, labels, inactive state of tabs, empty state text, muted text',
            isWhiteText: true,
          },
          {
            swatch: '#a6a6a6',
            variable: '$black-035',
            use: 'empty state copy, muted copy, field placeholder copy',
          },
          {
            swatch: '#cccccc',
            variable: '$black-020',
            use: 'toggle button outline, text-field outline, form field dropdowns',
          },
          {
            swatch: '#e5e5e5',
            variable: '$black-010',
            use: 'secondary button, table row line devider',
          },
          {
            swatch: '#f7f7f7',
            variable: '$black-003',
            use: 'disabled button, on-hover table row background color',
          },
          {
            swatch: '#fff',
            variable: '$white-100',
            use: 'cards, selected tab text on main nav',
          },
        ],
      },
    ],
  },
]

const contentColors = [
  {
    groupTitle: '',
    sections: [
      {
        title: 'Section 1',
        colors: [
          {
            swatch: '#666666',
            variable: '$black-060',
            use: 'subtext, labels, inactive state of tabs, empty state text, muted text',
            isWhiteText: true,
          },
        ],
      },
      {
        title: 'Section 2',
        colors: [
          {
            swatch: '#a6a6a6',
            variable: '$black-035',
            use: 'empty state copy, muted copy, field placeholder copy',
          },
        ],
      },
      {
        title: 'Section 3',
        colors: [
          {
            swatch: '#f7f7f7',
            variable: '$black-003',
            use: 'cards, selected tab text on main nav',
          },
        ],
      },
    ],
  },
]

const environmentalColors = [
  {
    groupTitle: '',
    sections: [
      {
        title: 'Section 1',
        colors: [
          {
            swatch: '#666666',
            variable: '$black-060',
            use: 'subtext, labels, inactive state of tabs, empty state text, muted text',
            isWhiteText: true,
          },
        ],
      },
      {
        title: 'Section 2',
        colors: [
          {
            swatch: '#a6a6a6',
            variable: '$black-035',
            use: 'empty state copy, muted copy, field placeholder copy',
          },
        ],
      },
      {
        title: 'Section 3',
        colors: [
          {
            swatch: '#cccccc',
            variable: '$black-020',
            use: 'toggle button outline, text-field outline, form field dropdowns',
          },
        ],
      },
      {
        title: 'Section 4',
        colors: [
          {
            swatch: '#e5e5e5',
            variable: '$black-010',
            use: 'secondary button, table row line devider',
          },
        ],
      },
    ],
  },
]

const utilityColors = [
  {
    groupTitle: 'Success Color',
    sections: [
      {
        title: 'Section 1',
        colors: [
          {
            swatch: '#008759',
            variable: '$green-140',
            use: 'on-hover primary link',
            isBaseColor: true,
            isWhiteText: true,
          },
          {
            swatch: '#00e295',
            variable: '$green-100',
            use: 'on-hover primary button',
            isWhiteText: false,
          },
        ],
      },
    ],
  },
  {
    groupTitle: 'Error Color',
    sections: [
      {
        title: 'Section 1',
        colors: [
          {
            swatch: '#e60c0c',
            variable: '$red-100',
            use:
              'backgrounds for prominent small elements, border hovers, unaccessible branding elements',
            isBaseColor: true,
            isWhiteText: true,
          },
          {
            swatch: '#ffa39e',
            variable: '$red-050',
            use: 'hover color for egg-100',
          },
          {
            swatch: '#fff1f0',
            variable: '$red-010',
            use: 'hover color for egg-100',
          },
        ],
      },
    ],
  },
  {
    groupTitle: 'Warning Color',
    sections: [
      {
        title: 'Section 1',
        colors: [
          {
            swatch: '#ff9e00',
            variable: '$orange-100',
            use: 'body color, headers color, selected toggle button, side navigation',
            isWhiteText: true,
          },
        ],
      },
      {
        title: 'Section 2',
        colors: [
          {
            swatch: '#ff8044',
            variable: '$coral-100',
            use: 'hover state for tabs on side nav',
            isWhiteText: true,
          },
        ],
      },
    ],
  },
]

const magicNumbers = {
  firstColumnWidth: '210px',
  secondColumnWidth: '100px',
  columnPadding: '17px',
  rowHeight: '30px',
}

function Color(props) {
  return (
    <div className="swatch">
      <span
        style={{
          display: 'block',
          background: props.swatch,
          width: magicNumbers.firstColumnWidth,
          height: props.isBaseColor ? '140px' : '40px',
          color: props.isWhiteText ? 'white' : 'black',
          fontSize: '14px',
          fontFamily: 'Roboto, sans-serif',
          paddingTop: '15px',
          paddingBottom: '15px',
          paddingLeft: '10px',
          paddingRight: '10px',
        }}
      >
        {props.isBaseColor ? (
          <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>Base color</div>
        ) : (
          ''
        )}
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>{props.variable}</span>
          <span>{props.swatch}</span>
        </div>
      </span>
    </div>
  )
}

function ColorSection(props) {
  return (
    <div style={{ marginRight: '20px', marginTop: '15px', marginBottom: '15px' }}>
      {/* {props.sectionTitle} */}
      {props.colors.map(color => {
        return (
          <Color
            swatch={color.swatch}
            variable={color.variable}
            isWhiteText={color.isWhiteText}
            isBaseColor={color.isBaseColor}
            use={color.use}
          />
        )
      })}
    </div>
  )
}

function ColorGroup(props) {
  return (
    <div
      className="color"
      style={{ display: 'flex', fontSize: '14px', fontFamily: 'Roboto, sans-serif' }}
    >
      <div style={{ display: 'block' }}>
        <span style={{ textTransform: 'uppercase', fontWeight: 'bold', color: 'gray' }}>
          {props.groupTitle}
        </span>
        <div style={{ display: 'flex' }}>
          {props.sections.map(section => {
            return <ColorSection sectionTitle={section.title} colors={section.colors} />
          })}
        </div>
      </div>
    </div>
  )
}

function ColorCollection(props) {
  return <ColorGroup groupTitle={props.group.groupTitle} sections={props.group.sections} />
}

function Colors(props) {
  return (
    <div style={{ display: 'flex', fontFamily: 'Roboto, sans-serif' }}>
      {/* <h1>{props.title}</h1> */}
      {props.groups.map(colorGroup => (
        <ColorCollection group={colorGroup} />
      ))}
    </div>
  )
}

export const Brand = () => <Colors title="Brand color" groups={brandColors} />
export const Content = () => <Colors title="Content color" groups={contentColors} />
export const Environmental = () => (
  <Colors title="Environmental color" groups={environmentalColors} />
)
export const Utility = () => <Colors title="Utility color" groups={utilityColors} />
