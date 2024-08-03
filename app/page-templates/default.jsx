import Header from '../components/Header';

export default function PageTemplateDefault({ children }) {
  return <div className="page-template page-template__default">
    <Header />
    <main className="main">{ children }</main>
    <footer>Footer...!</footer> 
  </div>
}