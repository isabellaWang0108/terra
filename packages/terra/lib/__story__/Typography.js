import classNames from 'classnames'
import { Card } from '@sb-config/components/Card'
import { SimpleTable, SimpleTableRow, SimpleTableCell } from '@sb-config/components/SimpleTable'
import s from './Typography.module.less'
export const FontStack = () => (
  <Card>
    <Card.Content isPadded>
      <h1 className={s.roboto}>Roboto</h1>
      <h1 className={s.roobert}>Roobert</h1>
      <h1 className={s.proxima}>Proxima nova</h1>
    </Card.Content>
  </Card>
)

export const TypeColor = () => (
  <div className={s.typeColorContainer}>
    <div className={s.col}>
      <Card className={classNames(s.typeColorCard, s.good)}>
        <Card.Content isPadded>
          <h2>Use neutral color when using text.</h2>
        </Card.Content>
      </Card>
      <Card className={classNames(s.typeColorCard, s.good)}>
        <Card.Content isPadded>
          <h2>
            <a href="#">Text link</a>
          </h2>
        </Card.Content>
      </Card>

      <p style={{ margin: '0 12px' }}>Primary color used for primary actions and text links</p>
    </div>
    <div className={s.col}>
      <Card className={classNames(s.typeColorCard, s.bad)}>
        <Card.Content isPadded>
          <h2 style={{ color: '#00C8C8' }}>Don’t use text color as decoration</h2>
        </Card.Content>
      </Card>
      <Card className={classNames(s.typeColorCard, s.good)}>
        <Card.Content isPadded>
          <h2 className={s.success}>Upload success! See you soon! </h2>
        </Card.Content>
      </Card>

      <p style={{ margin: '0 12px' }}>
        Utility colors with the right use case can be used to express states such as success, error,
        and warning
      </p>
    </div>
  </div>
)

export const RobotoWeight = () => (
  <Card>
    <Card.Content isPadded>
      <h1 className={classNames(s.regular, s.roboto)}>Regular</h1>
      <h1 className={classNames(s.medium, s.roboto)}>Medium</h1>
    </Card.Content>
  </Card>
)

export const RoobertWeight = () => (
  <Card>
    <Card.Content isPadded>
      <h1 className={classNames(s.regular, s.roobert)}>Regular</h1>
      <h1 className={classNames(s.semibold, s.roobert)}>Semibold</h1>
    </Card.Content>
  </Card>
)

export const RobotoTable = () => (
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

export const RoobertTable = () => (
  <Card>
    <Card.Header>
      <h2 className={s.roobert}>Roobert</h2>
    </Card.Header>
    <Card.Content>
      <SimpleTable
        title="Roobert"
        columns={[
          { name: '', width: 30 },
          { name: '', width: 70 },
        ]}
      >
        <SimpleTableRow>
          <SimpleTableCell>
            <h1 className={classNames(s.roobert, 'xl semibold')}>Header xl</h1>
          </SimpleTableCell>
          <SimpleTableCell>
            <FontStats font="Roobert" weight="Semibold" size="50px" letterSizing="0px" />
          </SimpleTableCell>
        </SimpleTableRow>
        <SimpleTableRow>
          <SimpleTableCell>
            <h1 className={classNames(s.roobert, 'xl semibold')}>Header xl</h1>
          </SimpleTableCell>
          <SimpleTableCell>
            <FontStats font="Roobert" weight="Regular" size="50px" letterSizing="0px" />
          </SimpleTableCell>
        </SimpleTableRow>
        <SimpleTableRow>
          <SimpleTableCell>
            <h1 className={classNames(s.roobert, 'semibold')}>Header large</h1>
          </SimpleTableCell>
          <SimpleTableCell>
            <FontStats font="Roobert" weight="Semibold" size="32px" letterSizing="0px" />
          </SimpleTableCell>
        </SimpleTableRow>
        <SimpleTableRow>
          <SimpleTableCell>
            <h1 className={s.roobert}>Header large</h1>
          </SimpleTableCell>
          <SimpleTableCell>
            <FontStats font="Roobert" weight="Regular" size="32px" letterSizing="0px" />
          </SimpleTableCell>
        </SimpleTableRow>
        <SimpleTableRow>
          <SimpleTableCell>
            <h2 className={classNames(s.roobert, 'semibold')}>Header medium</h2>
          </SimpleTableCell>
          <SimpleTableCell>
            <FontStats font="Roobert" weight="Semibold" size="24px" letterSizing="0px" />
          </SimpleTableCell>
        </SimpleTableRow>
        <SimpleTableRow>
          <SimpleTableCell>
            <h2 className={s.roobert}>Header medium</h2>
          </SimpleTableCell>
          <SimpleTableCell>
            <FontStats font="Roobert" weight="Regular" size="24px" letterSizing="0px" />
          </SimpleTableCell>
        </SimpleTableRow>
        <SimpleTableRow>
          <SimpleTableCell>
            <h3 className={classNames(s.roobert, 'small semibold')}>Header small</h3>
          </SimpleTableCell>
          <SimpleTableCell>
            <FontStats font="Roobert" weight="Semibold" size="20px" letterSizing="0px" />
          </SimpleTableCell>
        </SimpleTableRow>
        <SimpleTableRow>
          <SimpleTableCell>
            <h3 className={classNames(s.roobert, 'small')}>Header small</h3>
          </SimpleTableCell>
          <SimpleTableCell>
            <FontStats font="Roobert" weight="Regular" size="20px" letterSizing="0px" />
          </SimpleTableCell>
        </SimpleTableRow>
        <SimpleTableRow>
          <SimpleTableCell>
            <p className={classNames(s.roobert, 'body-medium semibold')}>Body medium semibold</p>
          </SimpleTableCell>
          <SimpleTableCell>
            <FontStats font="Roobert" weight="Semibold" size="16px" letterSizing="0px" />
          </SimpleTableCell>
        </SimpleTableRow>
        <SimpleTableRow>
          <SimpleTableCell>
            <p className={classNames(s.roobert, 'body-medium')}>Body medium regular</p>
          </SimpleTableCell>
          <SimpleTableCell>
            <FontStats font="Roobert" weight="Regular" size="16px" letterSizing="0px" />
          </SimpleTableCell>
        </SimpleTableRow>
        <SimpleTableRow>
          <SimpleTableCell>
            <p className={classNames(s.roobert, 'body-small semibold')}>Body small semibold</p>
          </SimpleTableCell>
          <SimpleTableCell>
            <FontStats font="Roobert" weight="Semibold" size="14px" letterSizing="0px" />
          </SimpleTableCell>
        </SimpleTableRow>
        <SimpleTableRow>
          <SimpleTableCell>
            <p className={classNames(s.roobert, 'body-small')}>Body small regular</p>
          </SimpleTableCell>
          <SimpleTableCell>
            <FontStats font="Roobert" weight="Regular" size="14px" letterSizing="0px" />
          </SimpleTableCell>
        </SimpleTableRow>
        <SimpleTableRow>
          <SimpleTableCell>
            <p className={classNames(s.roobert, 'body-xsmall semibold')}>Body x-small semibold</p>
          </SimpleTableCell>
          <SimpleTableCell>
            <FontStats font="Roobert" weight="Semibold" size="12px" letterSizing="0px" />
          </SimpleTableCell>
        </SimpleTableRow>
        <SimpleTableRow>
          <SimpleTableCell>
            <p className={classNames(s.roobert, 'body-xsmall')}>Body x-small regular</p>
          </SimpleTableCell>
          <SimpleTableCell>
            <FontStats font="Roobert" weight="Regular" size="12px" letterSizing="0px" />
          </SimpleTableCell>
        </SimpleTableRow>
        <SimpleTableRow>
          <SimpleTableCell>
            <label className={classNames(s.roobert, 'market-label')}>Label</label>
          </SimpleTableCell>
          <SimpleTableCell>
            <FontStats font="Roobert" weight="Semibold" size="14px" letterSizing="1px" />
          </SimpleTableCell>
        </SimpleTableRow>
      </SimpleTable>
    </Card.Content>
  </Card>
)

const FontStats = ({ font, weight, size, letterSizing }) => (
  <div style={{ display: 'flex' }}>
    <div style={{ margin: 16 }}>
      <label className={s.tableLabel}>Font</label>
      <p>{font}</p>
    </div>
    <div style={{ margin: 16 }}>
      <label className={s.tableLabel}>Weight</label>
      <p>{weight}</p>
    </div>
    <div style={{ margin: 16 }}>
      <label className={s.tableLabel}>Size</label>
      <p>{size}</p>
    </div>
    <div style={{ margin: 16 }}>
      <label className={s.tableLabel}>Letter Sizing</label>
      <p>{letterSizing}</p>
    </div>
  </div>
)
