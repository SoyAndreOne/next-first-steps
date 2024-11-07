import type { Metadata } from 'next';
import x from "./styles/about.module.css";

export const metadata:Metadata = {
 title: 'About page',
 description: 'SEO Title',
 keywords:["About page","Fernando","informacion"]
};
const AboutPage = () => {
  return (
    <span className={x.spanMainFirst}>HOME PAGE</span>
  )
}
export default AboutPage;
