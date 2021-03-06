import React, { Component } from 'react'
import cx from 'classnames'

import './Dropdown.scss'

type Props = {

}

class Dropdown extends Component<Props> {
  constructor(props) {
    super(props)
    const { defaultValue, items } = props
    this.state = {
      selected: defaultValue || (items && items[0]),
      isShowing: false,
    }
  }

  select = (itemIdx) => () => {
    const { items, onClick } = this.props
    const selectedItem = items[itemIdx]
    this.setState({
      selected: selectedItem,
    })
    onClick(selectedItem.value)
  }

  toggleMenu = () => {
    this.setState({
      isShowing: !this.state.isShowing,
    })
  }

  render() {
    const { selected, isShowing }  = this.state
    const { items, className } = this.props
    return (
      <div
        className={cx('Dropdown', className)}
        onClick={this.toggleMenu}
      >
        <div className="Dropdown__currentItem" >
          {selected.label}
        </div>
        {isShowing && (
          <div className="Dropdown__menu">
            {items.map(({ label, value }, itemIdx) => (
              <div
                key={label}
                className="Dropdown__menuItem"
                onClick={this.select(itemIdx)}
              >
                {label}
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }
}

export default Dropdown
