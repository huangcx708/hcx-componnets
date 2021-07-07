import React, { FC } from "react"
import classNames from 'classnames'
import useStore from '../../store/menu'


export interface MenuItemProps {
    className?: string
    index?: number
    disabled?: boolean
    style?: React.CSSProperties
}

const MenuItem: FC<MenuItemProps> = (props) => {
    const {
        className,
        style,
        index,
        disabled,
        children
    } = props
    const activeIndex = useStore(state => state.activeIndex)
    const onSelect = useStore(state => state.onSelect)
    const classes = classNames('menu-item', className, {
        'is-disabled': disabled,
        'is-active': index === activeIndex
    })

    return (
        <li className={classes} style={style} onClick={() => onSelect(index)}>
            {children}
        </li>
    )
}

export default MenuItem