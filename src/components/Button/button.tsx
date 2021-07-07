import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react' 
import classNames from 'classnames'

export enum ButtonSize {
    Large = 'lg',
    Small = 'sm'
}

export enum ButtonType {
    Primary = 'primary',
    Danger = 'danger',
    Link = 'link',
    Default = 'default'
}

interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    size?: string;
    btnType?: string;
    children: React.ReactNode;
    href?: string;
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
// export type ButtonProps = NativeButtonProps & AnchorButtonProps
// 由于组件 综合了原生 button 和 a 两种元素，可能某元素有必填项，这样搞可能不能更好兼容
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>
// ts 中 Partial 将所有属性修改为可选

const Button: React.FC<BaseButtonProps> = (props) => {
    const {
        btnType,
        children,
        size,
        href,
        disabled,
        className,
        ...reset
    } = props;

    const classes = classNames('btn', className, {
        'disabled': btnType === ButtonType.Link && disabled,
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size
    })

    if (btnType === ButtonType.Link && href) {
        return (
            <a
                className={classes}
                href={href}
                {...reset}
            >
                {children}
            </a>
        )
    } else {
        return (
            <button
                className={classes}
                disabled={disabled}
                {...reset}
            >
                {children}
            </button>
        )
    }
}

Button.defaultProps = {
    disabled: false,
    btnType: 'default'
}
 
export default Button;

