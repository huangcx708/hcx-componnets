import React, { FC, useEffect } from "react";
import classNames from 'classnames'
import useStore from '../../store/menu'

type MenuMode = 'horizontal' | 'vertical'
export interface MenuProps {
    defaultIndex?: number
    className?: string
    style?: React.CSSProperties
    onSelect?: (selectIndex: number) => void
    mode?: MenuMode
}

const Menu: FC<MenuProps> = (props) => {
    const {
        defaultIndex,
        className,
        style,
        onSelect,
        mode,
        children,
    } = props
    const classes = classNames('hcx-menu', className, {
        'menu-vertical': mode === 'vertical',
        'menu-horizontal': mode === 'horizontal'
    })
    const setDetail = useStore(state => state.onSelect)


    useEffect(() => {
        console.log('defaultIndex', defaultIndex)
        setDetail(defaultIndex)
    }, [])
    return (
        <ul className={classes} style={style}>
            {children}
        </ul>
    )
}

export default Menu;

