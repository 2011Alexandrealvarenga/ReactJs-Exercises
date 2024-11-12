import { Children } from "react";

type Props={
  phrase: string;
  author?: string;
}
export const Card =({phrase, author}:Props) =>{

      return(
        <div className="border-2 border-red-600 p-3 text-3xl text-center m-2">
        <h3>{phrase}</h3>

         {/* 
         verifica se tem ou seja if  
         {!author} negativa 
         */}
        {author && 
          <p>{author}</p>
        }
      </div>
    );
} 