import React from 'react'
import { LinkProps, useResolvedPath } from "react-router-dom";
import { useMatch, Link } from 'react-router-dom'


const CustomLink = ({ children, to, ...props }: LinkProps) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true })
    return (
        <Link
            className={match ? ("sidebar__item sidebar__item-active") : ("sidebar__item ")}

            to={to}
            {...props}
        >
            {children}
        </Link>
    )
}

export default CustomLink