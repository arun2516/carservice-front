import React from 'react'
import {Container,Wrapper,Row,Column,Link,Title} from './Footerstyle'

export default function Footer({children,...restprops}){
    return <Container {...restprops}>{children}</Container>
}

Footer.Wrapper = function FooterWrapper({children,...restprops}){
    return <Wrapper {...restprops}>{children}</Wrapper>
}
Footer.Row = function FooterRow({children,...restprops}){
    return <Row {...restprops}>{children}</Row>
}
Footer.Column = function FooterColumn({children,...restprops}){
    return <Column {...restprops}>{children}</Column>
}
Footer.Link = function FooterLink({children,...restprops}){
    return <Link {...restprops}>{children}</Link>
}
Footer.Title = function FooterTitle({children,...restprops}){
    return <Title {...restprops}>{children}</Title>
}