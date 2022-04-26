// importComponent
import Section from './components/section/Section';
import Header from './components/header/Header';
import Table from './components/table/Table';

export default function App() {
  return (
    <>
      <Section>
        <Header  /> 
      </Section>

       <Section>
          <Table type={"list"}></Table>
      </Section> 
        <Section>
          <Table type={"statistics"}></Table>
        </Section> 
    </>
  );
}
