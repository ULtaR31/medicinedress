import React , {FC} from 'react'

export enum CArdVariant {
    outline= 'outlined',
    primery = 'primery'
}

interface CardProps {
    width?: string;
    height?: string;
    children?:React.ReactChild | React.ReactNode;
    variant:CArdVariant;
    onClick?:() => void;
}

const Card:FC<CardProps> = function({
    width, 
    height, 
    variant,
    children,
    onClick,
    }:  CardProps) {
  return (
    <div style={{
        width,
        height,
        border:variant === CArdVariant.outline ? '1px solid darkgray':'none',
        background: variant === CArdVariant.primery ? 'darkgray' :'',

    }}
    onClick={onClick}
    >
        {children}        
    </div>
  )
}

export default Card