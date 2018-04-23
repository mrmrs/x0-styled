import React from 'react'

import A from './components/A'
import Abbr from './components/Abbr'
import Address from './components/Address'
import Article from './components/Article'
import Aside from './components/Aside'
import B from './components/B'
import Button from './components/Button'
import Cite from './components/Cite'
import Code from './components/Code'
import Data from './components/Data'
import Dd from './components/Dd'
import Div from './components/Div'
import Dl from './components/Dl'
import Dt from './components/Dt'
import Em from './components/Em'
import Fieldset from './components/Fieldset'
import Footer from './components/Footer'
import Form from './components/Form'
import H1 from './components/H1'
import H2 from './components/H2'
import H3 from './components/H3'
import H4 from './components/H4'
import H5 from './components/H5'
import H6 from './components/H6'
import Header from './components/Header'
import Hr from './components/Hr'
//import I from './components/I'
import Img from './components/Img'
import Input from './components/Input'
import Kbd from './components/Kbd'
import Label from './components/Label'
import Legend from './components/Legend'
import Li from './components/Li'
import Main from './components/Main'
import Nav from './components/Nav'
import Ol from './components/Ol'
import P from './components/P'
import Pre from './components/Pre'
import Q from './components/Q'
import S from './components/S'
import Samp from './components/Samp'
import Section from './components/Section'
import Small from './components/Small'
import Span from './components/Span'
import Strong from './components/Strong'
import Sub from './components/Sub'
import Sup from './components/Sup'
import Table from './components/Table'
import Td from './components/Td'
import Th from './components/Th'
import Textarea from './components/Textarea'
import Time from './components/Time'
import Tr from './components/Tr'
import U from './components/U'
import Ul from './components/Ul'

const Kit = props => (
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

export default Kit
