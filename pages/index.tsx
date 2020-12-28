import {NextPage} from 'next';
import Nav from "../components/nav";
import Button from "./Taa";
const IndexPage: NextPage = () => {
  return (
    <div>
      <Nav />
      <div className="py-20">
        <h1 className="text-5xl text-center text-gray-700 dark:text-gray-100">
          Next.js + Tailwind CSS 2.0
        </h1>
      </div>
      <Button />
    </div>
  );
}
export default IndexPage;