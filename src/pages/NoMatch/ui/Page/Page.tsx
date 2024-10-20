import { PageTransitionWrapper } from "@/widgets";
import { FC } from "react";
import { Link } from "react-router-dom";

const NoMatch: FC = () => {
  return (
    <PageTransitionWrapper>
      <div className="flex min-h-screen w-screen flex-col items-center justify-center gap-y-5">
        <h1 className="bg-gradient-to-l from-primary-content via-secondary to-primary bg-clip-text text-9xl font-bold text-transparent">
          Cкоро буде...
        </h1>
        <p className="text-3xl font-medium text-neutral">В процесі розробки</p>
        <Link className="btn-primary-content btn px-16" to="/">
          На головну
        </Link>
      </div>
    </PageTransitionWrapper>
  );
};

export default NoMatch;
