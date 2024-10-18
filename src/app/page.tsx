import Image from "next/image";
import Link from "next/link";
import SignUp from "../pages/SignUp";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Page() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 banner">
      <div className="">
        <h1 className="text-white fw-bold head display-3 ">
          Mobiles Shopping
        </h1>
        <div className="d-flex justify-content-center gap-4 mt-4">
          <Link href="/SignIn">
          <button className="btn btn-success">Sign In</button>
          </Link>
          <Link href="/SignUp">
          <button className="btn btn-warning">Sign Up</button>
          </Link>
          <Link href="/AddProducts">add products</Link>

        </div>
      </div>

    </div>
  );
}
