import React from 'react'

import A from '../elements/A'
import Abbr from '../elements/Abbr'
import Address from '../elements/Address'
import Article from '../elements/Article'
import Aside from '../elements/Aside'
import B from '../elements/B'
import Button from '../elements/Button'
import Cite from '../elements/Cite'
import Code from '../elements/Code'
import Data from '../elements/Data'
import Dd from '../elements/Dd'
import Div from '../elements/Div'
import Dl from '../elements/Dl'
import Dt from '../elements/Dt'
import Em from '../elements/Em'
import Fieldset from '../elements/Fieldset'
import Footer from '../elements/Footer'
import Form from '../elements/Form'
import H1 from '../elements/H1'
import H2 from '../elements/H2'
import H3 from '../elements/H3'
import H4 from '../elements/H4'
import H5 from '../elements/H5'
import H6 from '../elements/H6'
import Header from '../elements/Header'
import Hr from '../elements/Hr'
//import I from '../elements/I'
import Img from '../elements/Img'
import Input from '../elements/Input'
import Kbd from '../elements/Kbd'
import Label from '../elements/Label'
import Legend from '../elements/Legend'
import Li from '../elements/Li'
import Main from '../elements/Main'
import Nav from '../elements/Nav'
import Ol from '../elements/Ol'
import P from '../elements/P'
import Pre from '../elements/Pre'
import Q from '../elements/Q'
import S from '../elements/S'
import Samp from '../elements/Samp'
import Section from '../elements/Section'
import Small from '../elements/Small'
import Span from '../elements/Span'
import Strong from '../elements/Strong'
import Sub from '../elements/Sub'
import Sup from '../elements/Sup'
import Table from '../elements/Table'
import Td from '../elements/Td'
import Th from '../elements/Th'
import Textarea from '../elements/Textarea'
import Time from '../elements/Time'
import Tr from '../elements/Tr'
import U from '../elements/U'
import Ul from '../elements/Ul'

const Elements = props => (
  <Div bg='red' py={[5,6]} px={[4,5,6]}>
    <Header pb={6} mb={6} borderBottom='1px solid black'> 
      <H1>Elements</H1>
      <P mb={0} lineHeight='1.5' fontWeight='600' fontSize={3}>HTML elements wired up to styled-system and glamorous backed by a cohesvie set of design primitives.</P>
    </Header>
    <Div><A>Click Here</A></Div>
    <Div><Abbr>E123</Abbr></Div>
    <Div><Address>837 Geary St., San Francisco, Ca 94109</Address></Div>
    <B>Bold text</B>
    <Button>A button</Button>
    <Cite>Citation</Cite>
    <Code>var k = 96</Code>
    <Data>A data wrapper</Data>
    <Dl>
      <Dt>A definition list is made up of a term</Dt>
      <Dd>And a description</Dd>
    </Dl>
    <Em>Some emphasized text</Em>
    <Form>
      <Fieldset>
        <Legend>Form Elements</Legend>
        <Label>A text field</Label>
        <Input type='text'></Input>
        <Label>Password Field</Label>
        <Input type='password'></Input>
        <Label>Radio</Label>
        <Input type='radio'></Input>
        <Label>Checkbox</Label>
        <Input type='checkbox'></Input>
      </Fieldset>
    </Form>
    <H1>Heading Level 1</H1>
    <H2>Heading Level 2</H2>
    <H3>Heading Level 3</H3>
    <H4>Heading Level 4</H4>
    <H5>Heading Level 5</H5>
    <H6>Heading Level 6</H6>
    <Hr />
    <Img src='https://mrmrs.github.io/photos/u/060.jpg' />
    <Kbd></Kbd>
    <P>
      Sample paragraph text.
    </P>
    <Pre>Preformatted text. Good for code and poetry or code that looks like poetry.</Pre>
    <Q></Q>
    <S>Some text that has a strike through it</S>
    <Samp>Just a sample</Samp>
    <Small>Some super small text</Small>
    <Span>Inline level span element for wrapping elements or text.</Span>
    <Strong>Text that works out a lot</Strong>
    <Sub>Sub text</Sub>
    <Sup>Super text</Sup>
    <Table>
      <Tr>
        <Th>Name</Th>
        <Th>Value</Th>
        <Th>Id</Th>
        <Th>Date</Th>
      </Tr>
      <Tr>
        <Td>John Smith</Td>
        <Td>2400</Td>
        <Td>99-aa-8793ab</Td>
        <Td>13 Mar 18</Td>
      </Tr>
    </Table>
    <Td></Td>
    <Textarea></Textarea>
    <Time></Time>
    <U>Some underlined text</U>
    <Ol>
      <Li>First item in an ordered list</Li>
      <Li>Second item in an ordered list</Li>
      <Li>Third item in an ordered list</Li>
    </Ol>
    <Ul>
      <Li>First item in an unordered list</Li>
      <Li>Second item in an unordered list</Li>
      <Li>Third item in an unordered list</Li>
    </Ul>
    <Div>A div element for dividing content</Div>
    <Article>Wrapper for Article    </Article>
    <Aside>An aside    </Aside>
    <Footer>A Footer</Footer>
    <Header>A header element</Header>
    <Main>The main element. Used for primary page content.</Main>
    <Nav>A navigation element.</Nav>
    <Section>This is a section element</Section>

  </Div>
)

export default Elements
