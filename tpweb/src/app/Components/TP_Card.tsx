import React, { ReactElement } from 'react'

type TP_CHILDREN = {
    children?: ReactElement | ReactElement[]
}

export default function TP_Card({children} : TP_CHILDREN)
{
    return (
        <div className='px-6 py-4 rounded-xl bg-[#FFFFFF10] backdrop-blur-lg shadow-md border border-white/20'>
            {children}
        </div>
    )
}
